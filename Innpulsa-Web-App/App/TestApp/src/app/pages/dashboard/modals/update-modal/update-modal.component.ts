import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent implements OnInit {

  constructor(public alertController: AlertController, public modalCtrl: ModalController) { }

  ngOnInit() {}
  async presentAlertUpdate() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Update',
      message: 'You strategy was updated.',
      buttons: [{
        text: 'Okay',
        handler: () => {
          this.modalCtrl.dismiss();
        }
      }]
    });

    await alert.present();
  }
  async presentAlertUnlink() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Unlink',
      message: 'Are you sure you want to unlink this repo?',
      buttons: [{
        text: 'Confirm',
        handler: () => {
          this.modalCtrl.dismiss();
        }
      },
      {
        text: 'Cancel',
        handler: () => {
          this.modalCtrl.dismiss();
        }
      }]
    });

    await alert.present();
  }
}
