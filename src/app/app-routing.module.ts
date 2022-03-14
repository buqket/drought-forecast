import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropListComponent } from './crop-list/crop-list.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SettingComponent } from './setting/setting.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { RecordListComponent } from './record-list/record-list.component';
import { AddCropComponent } from './add-crop/add-crop.component';
import { CropDetailComponent } from './crop-detail/crop-detail.component';
import { AddRecordComponent } from './add-record/add-record.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'router' },
  { path: 'crop-list', component: CropListComponent },
  { path: 'add-crop', component: AddCropComponent },
  { path: 'crop-detail/:id', component: CropDetailComponent,  },
  { path: 'alert-list', component: AlertListComponent },
  { path: 'record-list', component: RecordListComponent },
  { path: 'add-record', component: AddRecordComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'setting', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
