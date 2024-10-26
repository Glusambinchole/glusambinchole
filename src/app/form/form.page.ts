import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  selectedDate: string = '';
  showDatePicker: boolean = false;
  formData = {
    glucose: null,
    cholesterol: null,
    uricAcid: null,
    hemoglobin: null,
    selectedDate: null,
  }

  constructor() {}
  dateChanged(event: any) {
    console.log("Tanggal yang dipilih:", event.detail.value); // Debugging untuk memastikan nilai
    this.selectedDate = event.detail.value; // Simpan nilai dari event
    this.showDatePicker = false; // Sembunyikan date picker setelah tanggal dipilih
   }

   submitData() {
    console.log('Form Data:', this.formData);
    // Tambahkan logika pengiriman data ke backend atau database di sini
  }

}