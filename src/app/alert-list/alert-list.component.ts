import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {


  Alerts: any = [
    { id: 1, parcel_name: "แปลง A", plant_name: "ข้าวโพด", activity_id: "ภัยแล้ง", alert_date: "2022-01-05",alert_at:"2022-02-01" },
    { id: 2, parcel_name: "แปลง B", plant_name: "อ้อย", activity_id: "โรคพืชและแมลง", alert_date: "2022-01-05",alert_at:"2022-02-01" },
  ];

  constructor() { }

  ngOnInit(): void {
    this.Alerts = this.Alerts
  }

}
