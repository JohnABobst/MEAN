import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { EditObjectComponent } from './edit-object/edit-object.component';
import { CreateObjectComponent } from './create-object/create-object.component';
import { ObjectsComponent } from './objects/objects.component';
const routes: Routes = [
  { path: '', redirectTo: 'objects', pathMatch: 'full'},
  { path: 'objects', component: ObjectsComponent},
  { path: 'details/:id', component: ObjectDetailComponent },
  { path: 'edit/:id', component: EditObjectComponent },
  { path: 'create', component: CreateObjectComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
