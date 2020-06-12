import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from './modals/details-modal/details-modal.component';
import { UpdateModalComponent } from './modals/update-modal/update-modal.component';
import { CreateModalComponent } from './modals/create-modal/create-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('barCanvas', { static: true }) barCanvas: ElementRef;
  private barChart: Chart;
  private color = Chart.helpers.color;
  public strategysInfo = [{
    name: "Strategy 1",
    profits: 25000,
    lastUpdate: '10/02/2020'
  },
  {
    name: "Strategy 2",
    profits: 25000,
    lastUpdate: '10/02/2020'
    },
    {
      name: "Strategy 3",
      profits: 1225000,
      lastUpdate: '10/02/2020'
      },
  ];
  constructor(public modalController: ModalController,private router: Router) { }

  ngOnInit() {
    this.createGraph();
  }
  createGraph() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Strategy 1', 'Strategy 2', 'Strategy 3'],
        datasets: [
          {
            label: 'V1.0',
            data: [800, 552, 1187],
            backgroundColor: this.color("#9daee3").alpha(0.7).rgbString(),
            borderColor: this.color("#9daee3").alpha(0.95).rgbString(),
            borderWidth: 1
          },
          {
            label: 'V2.0',
            data: [923, 689, 1687],
            backgroundColor: this.color("#b5b6ba").alpha(0.7).rgbString(),
            borderColor: this.color("#b5b6ba").alpha(0.95).rgbString(),
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: function (value, index, values) {
                  if (parseInt(value) >= 1000) {
                    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  } else {
                    return '$' + value;
                  }
                }
              }
            }
          ]
        }
      }
    });
  }
  async presentDetailsModal() {
    const modal = await this.modalController.create({
      component: DetailsModalComponent,
      cssClass: 'detail-strategy-modal'
    });
    return await modal.present();
  }
  async presentUpdateModal() {
    const modal = await this.modalController.create({
      component: UpdateModalComponent,
      cssClass: 'update-strategy-modal'
    });
    return await modal.present();
  }
  async presentCreateModal() {
    const modal = await this.modalController.create({
      component: CreateModalComponent,
      cssClass: 'update-strategy-modal'
    });
    return await modal.present();
  }
  goToThia() {
      return this.router.navigateByUrl('theia-space');
  }
}

