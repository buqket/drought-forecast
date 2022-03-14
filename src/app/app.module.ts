import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { RecordListComponent } from './record-list/record-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    AboutmeComponent,
    CropListComponent,
    AlertListComponent,
    RecordListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
