import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent implements OnInit {
  @ViewChild('lineCanvas', { static: true }) lineCanvas: ElementRef;
  private color = Chart.helpers.color;
  public strategysInfo = [{
    name: "V1.0",
    profits: 25000,
    lastUpdate: '10/02/2020'
  },
  {
    name: "V2.0",
    profits: 25000,
    lastUpdate: '10/02/2020'
    }
  ];
  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.createGraph();
  }
  createGraph() {
    this.lineCanvas = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'V1.0',
          backgroundColor: this.color('#9daee3').alpha(0.7).rgbString(),
          borderColor: this.color('#9daee3').alpha(0.95).rgbString(),
          data: [100, 56, 200, 456, 324, 567, 800, 803],
          fill: false,
        }, {
          label: 'V2.0',
          fill: false,
          backgroundColor: this.color('#b5b6ba').alpha(0.7).rgbString(),
          borderColor: this.color('#b5b6ba').alpha(0.95).rgbString(),
          data: [100, 300, 321, 678, 788, 457, 954, 1000],
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Strategy 1'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          x: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          },
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
              },
              scaleLabel: {
                display: true,
                labelString: 'Profits'
              }
            },
          ]
        }
      }
    });
  }
  async presentAlertReport() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Report',
      message: 'You report is being generated.',
      buttons: [{
        text: 'Okay'
      }]
    });

    await alert.present();
  }
}
