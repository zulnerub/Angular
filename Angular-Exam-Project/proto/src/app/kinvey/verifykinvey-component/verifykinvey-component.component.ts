import { Component, OnInit } from '@angular/core';
import { PingService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-verifykinvey-component',
  templateUrl: './verifykinvey-component.component.html',
  styleUrls: ['./verifykinvey-component.component.scss']
})

export class VerifykinveyComponentComponent {

  constructor(private pingService: PingService) {}
  async verify() {
    try {
      const response = await this.pingService.ping();
      console.log("Kinvey is up! "
                 + "Version: " + response.version
                 + " Response: " + response.kinvey
      );
    } catch (error) {
      console.log("Kinvey Ping Failed. Response: ${error.description}");
    }
  }

}
