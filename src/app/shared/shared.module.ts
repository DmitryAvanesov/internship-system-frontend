import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [LoaderComponent, IonicModule],
})
export class SharedModule {}
