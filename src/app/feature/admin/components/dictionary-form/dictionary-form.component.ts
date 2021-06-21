import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogCloseReasons } from '@core/enums/dialog-close-reasons.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dictionary-form',
  templateUrl: './dictionary-form.component.html',
  styleUrls: ['./dictionary-form.component.scss'],
})
export class DictionaryFormComponent implements OnInit {
  @Input() id?: string;
  @Input() name?: string;
  nameControl = new FormControl('', Validators.required);
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    if (this.name) {
      this.nameControl.setValue(this.name);
    }
  }

  close() {
    this.modalController.dismiss({ reason: DialogCloseReasons.Cancel });
  }

  save() {
    this.modalController.dismiss({
      reason: DialogCloseReasons.Done,
      data: { id: this.id, name: this.nameControl.value },
    });
  }
}
