import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public response: any;
  public images: any;
  userData = { user_id: "", token: "" };

  constructor(public navCtrl: NavController,  public authService: AuthService) {
  this.getImages();

  }

  getImages(){
    this.userData.user_id = "1";
    this.userData.token = "222";
    this.authService.postData(this.userData, "getImages").then(
      result => {
        this.response = result;
        this.images = this.response.imageData
        console.log(this.images.imageData);
      },
      err => {
        console.log("error");
        // Error log
      }
    );
  }

}
