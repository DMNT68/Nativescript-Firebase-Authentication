import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";

import * as firebase from 'nativescript-plugin-firebase';
import { AuthFirebaseService } from "../services/auth-firebase.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private page:Page, private router:RouterExtensions, public _auth:AuthFirebaseService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden=true;
    }

    logout(){
        this._auth.logout();
      }

}
