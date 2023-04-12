import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PysuccesComponent } from './pysucces/pysucces.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [

  {path:"succes",component:PysuccesComponent},
  {path:"",component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
