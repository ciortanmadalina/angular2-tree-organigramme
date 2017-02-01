import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { TreeComponent} from './tree/tree.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/organigramme', pathMatch: 'full'},
  {path: 'organigramme', component: TreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
