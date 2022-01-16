import { AdminComponent } from './admin.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule],
})
export class AdminModule {}
