import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Detail {
  name: string;
  value: number;
  status: string;
}

interface History {
  date: Date;
  details: Detail[];
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  selectedDate: string = '';
  showDatePicker: boolean = false;
  history: History[] = [
    {
      date: new Date(2024, 9, 4),
      details: [
        { name: 'Glucose', value: 0.6, status: 'Normal' },
        { name: 'Cholesterol', value: 0.2, status: 'Low' },
        { name: 'Uric Acid', value: 0.8, status: 'High' },
        { name: 'Hemoglobin', value: 0.7, status: 'Normal' },
      ],
    },
    {
      date: new Date(2024, 9, 3),
      details: [
        { name: 'Glucose', value: 0.5, status: 'Normal' },
        { name: 'Cholesterol', value: 0.4, status: 'Normal' },
        { name: 'Uric Acid', value: 0.6, status: 'Low' },
        { name: 'Hemoglobin', value: 0.8, status: 'Low' },
      ],
    },
    {
      date: new Date(2024, 9, 2),
      details: [
        { name: 'Glucose', value: 0.7, status: 'Normal' },
        { name: 'Cholesterol', value: 0.3, status: 'Low' },
        { name: 'Uric Acid', value: 0.9, status: 'High' },
        { name: 'Hemoglobin', value: 0.6, status: 'Low' },
      ],
    },
  ];

  get filteredHistory() {
    if (this.selectedDate) {
      return this.history.filter((h) =>
        new Date(h.date).toDateString() === new Date(this.selectedDate).toDateString()
      );
    }
    return this.history;
  }

  toggleDatePicker() {
    this.showDatePicker = !this.showDatePicker;
  }

  getBarColor(status: string): string {
    switch (status) {
      case 'High':
        return 'danger';
      case 'Low':
        return 'warning';
      case 'Normal':
        return 'primary';
      default:
        return 'medium';
    }
  }
}