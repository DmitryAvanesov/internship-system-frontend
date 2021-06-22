import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '@auth/pages/sign-in/sign-in.component';
import { AuthRouting } from '@auth/auth.routing';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, AuthRouting, SharedModule, ReactiveFormsModule],
})
export class AuthModule {}
