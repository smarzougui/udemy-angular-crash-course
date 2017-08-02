import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tweet = {
    body: "this is text",
    isLiked: false,
    totalLikes: 0
  }

  on_EventSendFromThisComponement_Triggered() {
    console.log('The Component send/externed/throuw OUTSIDE to the Host the Event.')
  }

}
