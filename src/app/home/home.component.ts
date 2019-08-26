import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";

import * as flashlight from "nativescript-flashlight";

import { AuthFirebaseService } from "../services/auth-firebase.service";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    flashlightState:string = 'TURN ON';
    state: boolean = false;

    constructor(private page:Page, private router:RouterExtensions, public _auth:AuthFirebaseService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        // this.page.actionBarHidden=true;
    }
    
    encender(){
        
        if (flashlight.isAvailable()) {

            if (!this.state) {

                flashlight.on();
                this.flashlightState = 'TURN OFF';
                this.state = true;
                
            } else {

                flashlight.off();
                this.flashlightState = 'TURN ON';
                this.state = false;

            }
        } else {
            alert("la linterna no es accesible en el dispositivo");
        }

    }
    

    logout() {
        this._auth.logout();
    }

}
