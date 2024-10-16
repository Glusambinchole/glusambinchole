import { Component, AfterViewInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Chart } from 'chart.js/auto';


@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements AfterViewInit {
  connected: boolean = false;
  inputData: boolean = false;
  userStruggling: boolean = false;
  isLoading: boolean = false;
  uploading: boolean = false;
  data_uploaded: boolean = false;
  progress: number=0;
  dataComplete: boolean = true; // Atur ke true atau false sesuai kondisi awal

  chart: any;

  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
    
  }

  ionViewWillEnter() {
    // Tampilkan alert ketika tab dibuka
    this.presentAlert();
  }
  
  ngAfterViewInit() {
    this.createBarChart(); // Panggil fungsi untuk membuat chart setelah halaman selesai dirender
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Data Tidak Lengkap',
      message: 'Apakah Anda ingin melengkapi data sekarang?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Pengguna menolak untuk melengkapi data.');
          }
        }, {
          text: 'Ya',
          handler: () => {
            this.completeData();
          }
        }
      ]
    });

    await alert.present();
  }

  completeData() {
    this.dataComplete = true; // Ubah dataComplete menjadi true
    console.log('Data telah dilengkapi.');
  }

  connectDevice() {
    this.isLoading = true; // Set loading saat tombol diklik

    // Simulasi koneksi perangkat
    setTimeout(() => {
      this.userStruggling = true;
      this.isLoading = true; 
      this.dataComplete = false;
      // Set loading selesai
      // Di sini, kamu bisa menambahkan logika untuk memeriksa koneksi
    }, 2000); // Simulasi loading selama 2 detik
  }

  inputManual() {
    this.userStruggling = true;
  }

  helpUser() {
    this.inputData = true
  }

  successconnected(){
    this.connected = true;
  }


  dataUpload() {
    this.uploading = true; // Set loading saat tombol diklik
    this.progress = 0;
    // Simulasi koneksi perangkat

    let interval = setInterval(() => {
      this.progress += 0.01;  // Setiap 10% loading bertambah

    if (this.progress >= 1)
      clearInterval(interval);
      this.connected = false;
      this.uploading = false;
      this.data_uploaded = true;
      this.progress = 0;
      
    }, 1000); 
  }

  oke(){
    this.data_uploaded = true;
    this.connected = false
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Data Sales',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  

}

