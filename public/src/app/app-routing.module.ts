import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { EditObjectComponent } from './edit-object/edit-object.component';
import { CreateObjectComponent } from './create-object/create-object.component';
import { ObjectsComponent } from './objects/objects.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: ObjectsComponent}, 
  { path: 'edit/:id', component: EditObjectComponent },
  { path: 'create', component: CreateObjectComponent },
  { path: 'products/:id', component: ObjectDetailComponent },

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
