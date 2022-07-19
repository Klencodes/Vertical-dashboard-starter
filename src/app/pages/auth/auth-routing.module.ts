import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent, data: { title: 'Sign In' } },
  { path: 'signup', component: SigninComponent, data: { title: 'Sign Up' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
