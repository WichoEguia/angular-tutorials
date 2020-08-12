import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainIwiComponent } from './input-with-icon/main-iwi.component';

export const routes: Routes = [
  {
    path: 'input-with-icon',
    component: MainIwiComponent,
    loadChildren: () =>
      import('./input-with-icon/input-with-icon.module').then(
        (m) => m.InputWithIconModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
