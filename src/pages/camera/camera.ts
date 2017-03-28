import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({selector: 'page-camera', templateUrl: 'camera.html'})
export class CameraPage {
  photos : any;
  public base64Image : string;
  constructor(public navCtrl : NavController) {}

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index){
   this.photos.slice(index, 1);
  }

  takePhoto() {
    const options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    };

    Camera
      .getPicture(options)
      .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this
          .photos
          .push(this.base64Image);
      }, (err) => {
        console.log(err);
      });
  }

}
