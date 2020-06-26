import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase'
import { config } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app3';

  ngOnInit(): void {

    var config = {
      apiKey: "AIzaSyCVMQxfaejEE-oE2JbcQpdsis7xzFPv538",
      authDomain: "jta-instagram-clone-e2e1e.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-e2e1e.firebaseio.com",
      projectId: "jta-instagram-clone-e2e1e",
      storageBucket: "jta-instagram-clone-e2e1e.appspot.com",
      messagingSenderId: "951882451912",
      appId: "1:951882451912:web:9081d7622e2b376bd08efd"
    };

    firebase.initializeApp(config)
  }
}
