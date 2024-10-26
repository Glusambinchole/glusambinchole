import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  healthRecords: any[] = []; // Array untuk menyimpan data dari Firestore

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    // Memanggil data dari Firestore saat halaman diinisialisasi
    this.fetchHealthRecords();
  }

  fetchHealthRecords() {
    // Mengambil data dari koleksi Firestore 'healthRecords'
    this.firestore.collection('healthRecords').valueChanges().subscribe(data => {
      this.healthRecords = data;
    });
  }

  getAverage(field: string): number {
    const total = this.healthRecords.reduce((sum, record) => sum + record[field], 0);
    return total / this.healthRecords.length || 0;
  }
}


