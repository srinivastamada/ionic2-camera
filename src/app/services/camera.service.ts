import {Injectable} from "@angular/core";
import {Camera} from 'ionic-native';

@Injectable()
export class CameraService {

    constructor() {}
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
                // imageData is either a base64 encoded string or a file URI If it's base64: let
                // base64Image = 'data:image/jpeg;base64,' + imageData;
                return Promise.resolve('data:image/jpeg;base64,' + imageData);

            }, (err) => {
                // Handle error
                console.log("Error");
                return Promise.reject(err);
            });
    }

}
