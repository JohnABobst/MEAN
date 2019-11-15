import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { CreateObjectComponent } from './create-object/create-object.component';
import { EditObjectComponent } from './edit-object/edit-object.component';
import { ObjectsComponent } from './objects/objects.component';
import { HttpService } from './http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";


@NgModule({
  declarations: [
    AppComponent,
    ObjectDetailComponent,
    CreateObjectComponent,
    EditObjectComponent,
    ObjectsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
