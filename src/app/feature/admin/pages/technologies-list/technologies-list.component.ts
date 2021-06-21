import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTechnologies } from '@store/dictionaries/dictionaries.selectors';
import { ModalController } from '@ionic/angular';
import { DictionaryFormComponent } from '@admin/components/dictionary-form/dictionary-form.component';
import { fromPromise } from 'rxjs/internal-compatibility';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DictionaryFormResult } from '@admin/interfaces/dictionary-form-result.interface';
import { DialogCloseReasons } from '@core/enums/dialog-close-reasons.enum';
import { DictionaryElementModel } from '@store/dictionaries/models/dictionary-element.model';
import { createOrSaveTechnology } from '@store/dictionaries/dictionaries.actions';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.scss'],
})
export class TechnologiesListComponent {
  technologies$ = this.store.select(selectAllTechnologies);

  constructor(private store: Store, private modalController: ModalController) {}

  createOrEdit(technology?: DictionaryElementModel) {
    fromPromise(
      this.modalController.create({
        component: DictionaryFormComponent,
        componentProps: {
          id: technology?.id,
          name: technology?.name,
        },
      })
    )
      .pipe(
        switchMap((modal) => {
          modal.present();
          return modal.onWillDismiss();
        }),
        switchMap((data) => {
          console.log(data);
          return of(data.data);
        })
      )
      .subscribe((data: DictionaryFormResult) => {
        if (data?.reason === DialogCloseReasons.Done && data.data) {
          this.store.dispatch(createOrSaveTechnology({ newEntity: data.data }));
        }
      });
  }
}
