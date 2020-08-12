import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIwiComponent } from './main-iwi.component';
import { InputIconComponent } from './input-icon/input-icon.component';

@NgModule({
  declarations: [MainIwiComponent, InputIconComponent],
  imports: [CommonModule],
})
export class InputWithIconModule {}
