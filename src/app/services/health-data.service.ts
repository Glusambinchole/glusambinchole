import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface HealthRecord {
  glukosa: number;
  asam_urat: number;
  hemoglobin: number;
  kolesterol: number;
  tanggal: string;
}

@Injectable({
  providedIn: 'root'
})
export class HealthDataService {

  constructor(private firestore: Firestore) { }

  // Fungsi untuk mengambil data dari Firestore
  getHealthRecords(): Observable<HealthRecord[]> {
    const healthRecordsCollection = collection(this.firestore, 'healthRecords');
    return collectionData(healthRecordsCollection, { idField: 'id' }) as Observable<HealthRecord[]>;
  }
}

