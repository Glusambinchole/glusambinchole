import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-keterangan',
  templateUrl: './keterangan.page.html',
  styleUrls: ['./keterangan.page.scss'],
})
export class KeteranganPage implements OnInit {
  constructor(private navController: NavController) {}

  goBack() {
    this.navController.pop(); // Kembali ke halaman sebelumnya
  }

  ngOnInit() {
  }

}
