import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
//import {CameraService} from '../../app/services/camera.service';

@Component({selector: 'page-camera', templateUrl: 'camera.html'})
export class CameraPage {
  photos : any;
  public base64Image : string;
  constructor(public navCtrl : NavController, private camera: Camera) {}

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index) {

    this
      .photos
      .splice(index, 1);
   
   
    //return this.photos; return this.photos.slice(index, 1);
  }
  // takePhotox() {
  //   console.log("this.cameraSerive.takePhoto()");
  //   console.log(this.cameraSerive.takePhoto());

  //   if (this.cameraSerive.takePhoto()) {
  //     this
  //       .photos
  //       .push(this.cameraSerive.takePhoto());
  //   }

  //   console.log("this.photos.length");
  //   alert(this.photos.length);

  // }

  takePhoto() {
   const options : CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera
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
