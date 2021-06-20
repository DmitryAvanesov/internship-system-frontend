import { Component, OnInit } from '@angular/core';
import {selectAllSpecializations} from '@store/dictionaries/dictionaries.selectors';
import {Store} from '@ngrx/store';
import {ModalController} from '@ionic/angular';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';
import {fromPromise} from 'rxjs/internal-compatibility';
import {DictionaryFormComponent} from '@admin/components/dictionary-form/dictionary-form.component';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {DictionaryFormResult} from '@admin/interfaces/dictionary-form-result.interface';
import {DialogCloseReasons} from '@core/enums/dialog-close-reasons.enum';
import {createOrSaveSpecialization} from '@store/dictionaries/dictionaries.actions';

@Component({
  selector: 'app-specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.scss'],
})
export class SpecializationsListComponent implements OnInit {
  specializations$ = this.store.select(selectAllSpecializations);
  constructor(private store: Store, private modalController: ModalController) { }

  ngOnInit() {}

  createOrEdit(specialization?: DictionaryElementModel) {
    fromPromise(this.modalController.create({
      component: DictionaryFormComponent,
      componentProps: {
        id: specialization?.id,
        name: specialization?.name,
      }
    }))
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
          this.store.dispatch(createOrSaveSpecialization({newEntity: data.data}));
        }
      });
  }
}
