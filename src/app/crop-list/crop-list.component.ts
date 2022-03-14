import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent implements OnInit {

  // Crops: any = [];

  Crops: any = [
    { id: 1, parcel_name: "แปลง A", plant_name: "ข้าวโพด", plant_at: "2022-01-01" },
    { id: 2, parcel_name: "แปลง A", plant_name: "มังคุด", plant_at: "2022-01-01" },
    { id: 3, parcel_name: "แปลง B", plant_name: "อ้อย", plant_at: "2022-01-02" },
  ];

  constructor() { }

  ngOnInit(): void {
    this.Crops = this.Crops
  }

}
