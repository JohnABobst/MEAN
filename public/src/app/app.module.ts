import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { CreateObjectComponent } from './create-object/create-object.component';
import { EditObjectComponent } from './edit-object/edit-object.component';
import { ObjectsComponent } from './objects/objects.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    ObjectDetailComponent,
    CreateObjectComponent,
    EditObjectComponent,
    ObjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
