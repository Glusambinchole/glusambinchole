import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.page.html',
  styleUrls: ['./diagnose.page.scss'],
})
export class DiagnosePage implements OnInit {

  constructor(private navController: NavController) {}

  goBack() {
    this.navController.pop(); // Kembali ke halaman sebelumnya
  }

  ngOnInit() {
  }

}
