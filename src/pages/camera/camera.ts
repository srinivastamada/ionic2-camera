import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

//import {CameraService} from '../../app/services/camera.service';

@Component({selector: 'page-camera', templateUrl: 'camera.html'})
export class CameraPage {
  photos : any;
  public base64Image : string;
  constructor(public navCtrl : NavController, private camera : Camera, private alertCtrl : AlertController) {}

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index) {

    let confirm = this
      .alertCtrl
      .create({
        title: 'Sure you want to delete this update? There is NO undo!',
        message: '',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');

            }
          }, {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              this
                .photos
                .splice(index, 1);
              //return true;
            }
          }
        ]
      });
    confirm.present();
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this
      .camera
      .getPicture(options)
      .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this
          .photos
          .push(this.base64Image);
        this
          .photos
          .reverse();
      }, (err) => {
        console.log(err);
      });
  }

}
