import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableViewComponent } from './table-view/table-view.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ViewauthordetailsComponent } from './viewauthordetails/viewauthordetails.component';
const routes: Routes = [
  {
    path:'tableview',

    children:[
    {
   
      path:':id',
      component:ViewauthordetailsComponent },
      {path:'',component:TableViewComponent}]
    },
    {
      path:'home',
      component:HomeComponent},
      {
        path:'dialogbox',
        component:DialogboxComponent},
       
       
          
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
