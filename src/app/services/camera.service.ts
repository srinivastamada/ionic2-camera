import { Injectable } from "@angular/core";
import {Camera, CameraOptions} from 'ionic-native';

@Injectable()
export class CameraService {

    constructor() {

    }
  getImage() {
       return "xyz"
    }

      takePhoto() {
        const options : CameraOptions = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE
        }

        Camera
            .getPicture(options)
            .then((imageData) => {
                // imageData is either a base64 encoded string or a file URI If it's base64:
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                console.log(base64Image);
                return base64Image;
            }, (err) => {
                // Handle error
                console.log("Error");
            });
    }
  

    
}
