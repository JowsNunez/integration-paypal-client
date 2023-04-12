import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PysuccesComponent } from './pysucces/pysucces.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [

  {path:"succes",component:PysuccesComponent},
  {path:"",component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
