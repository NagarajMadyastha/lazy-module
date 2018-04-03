import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

export const moduleRoutes: Routes = [
  {
    path: "",
    component: HeaderComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(moduleRoutes)
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { 
 
}
