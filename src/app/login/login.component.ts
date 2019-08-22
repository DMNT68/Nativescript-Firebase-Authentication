import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

import { AuthFirebaseService } from '../services/auth-firebase.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  constructor(private page:Page, private router:RouterExtensions, public _auth: AuthFirebaseService) { }

  ngOnInit() {
    this.page.actionBarHidden=true;
  }

  public loginFacebook(){
    this._auth.loginFacebook();
  }

  public loginGoogle(){
   this._auth.loginGoogle();
  }

}
