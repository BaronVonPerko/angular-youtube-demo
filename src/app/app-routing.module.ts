import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {ListComponent} from './list/list.component';
import {GithubComponent} from './github/github.component';

const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'list', component: ListComponent},
  {path: 'github', component: GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
