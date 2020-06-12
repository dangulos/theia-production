import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit {

  constructor(public alertController: AlertController, public modalCtrl: ModalController) { }

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Create',
      message: 'You strategy was created.',
      buttons: [{
        text: 'Okay',
        handler: () => {
          this.modalCtrl.dismiss();
        }
      }]
    });

    await alert.present();
  }
}
