import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  history = [
    { date: '2024-10-04', stats: this.generateStats('Fri, 4 Oct') },
    { date: '2024-10-03', stats: this.generateStats('Thu, 3 Oct') },
    { date: '2024-10-02', stats: this.generateStats('Wed, 2 Oct') },
  ];

  selectedDate: string | null = null; // Untuk menyimpan tanggal yang dipilih
  filteredStats: any[] = []; // Data yang difilter sesuai tanggal

  generateStats(dateLabel: string) {
    return [
      { name: 'Glucose', value: 0.8, status: 'Normal' },
      { name: 'Cholesterol', value: 0.6, status: 'Low' },
      { name: 'Uric Acid', value: 0.7, status: 'High' },
      { name: 'Hemoglobin', value: 0.5, status: 'Normal' },
    ];
  }

  onDateChange(event: any) {
    const selectedDate = new Date(event.detail.value).toISOString().split('T')[0];
    console.log('Selected date:', selectedDate); // Debugging

    // Cari data yang sesuai dengan tanggal yang dipilih
    const found = this.history.find(item => item.date === selectedDate);

    if (found) {
      this.selectedDate = found.date;
      this.filteredStats = found.stats;
    } else {
      this.selectedDate = null;
      this.filteredStats = [];
      console.log('No data found for selected date:', selectedDate);
    }
  }

  getProgressColor(status: string): string {
    switch (status) {
      case 'High':
        return 'danger';
      case 'Low':
        return 'warning';
      default:
        return 'primary';
    }
  }
}
