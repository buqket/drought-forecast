import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropListComponent } from './crop-list/crop-list.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SettingComponent } from './setting/setting.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { RecordListComponent } from './record-list/record-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'router' },
  { path: 'crop-list', component: CropListComponent },
  { path: 'alert-list', component: AlertListComponent },
  { path: 'record-list', component: RecordListComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'setting', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
