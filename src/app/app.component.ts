import { RestService } from './rest.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dathaplusangular';
  users: any;
  dataRender: any;
  constructor(private userData: RestService) {
    this.userData.users().subscribe((data) => {
      this.users = data;
    });

    dataRender: this.dataRender;
  }

  getUserFormData(data: any) {
    console.warn(data);
    this.userData.saveUser(data).subscribe((result) => {
      console.warn(result);
      this.dataRender = result;
    });
  }
}
