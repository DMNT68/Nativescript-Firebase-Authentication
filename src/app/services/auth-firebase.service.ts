import { Injectable } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import * as firebase from 'nativescript-plugin-firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  nombre:string = '';
  email:string = '';
  photo:string = '';
  proveedor: string = '';

  isloading:boolean=false;

  constructor(private router: RouterExtensions) { }

  public loginFacebook(){
    this.isloading=true;
    firebase.login({
      type: firebase.LoginType.FACEBOOK,
      facebookOptions: {
        scopes: ['public_profile', 'email']
      }
    }).then(
         result => {

          this.nombre = result.displayName;
          this.email = result.email;
          this.photo = result.photoURL;
          this.proveedor = result.additionalUserInfo.providerId;
          this.router.navigate(['home'], { clearHistory: true, transition:{name:'slide'} });
          this.isloading=false; 

        },errorMessage => {
          this.isloading=false; 
          alert('Error facebooklogin'+ errorMessage);
          console.log('Error mensaje: ',errorMessage);
        }
    );
  }

  public loginGoogle(){
    this.isloading=true;
    firebase.login({
      type: firebase.LoginType.GOOGLE
    }).then(
        (result) => {
          this.nombre = result.displayName;
          this.email = result.email;
          this.photo = result.photoURL;
          this.proveedor = result.additionalUserInfo.providerId;
          this.router.navigate(['home'], { clearHistory: true, transition:{name:'slide'} });
          console.log('resultado', result.additionalUserInfo.profile);
          this.isloading=false; 

        },
        (errorMessage) => {
          this.isloading=false; 
          alert('Error Google Login'+ errorMessage);
          console.log('error:',errorMessage);
        }
    );
  }

  public logout(){
    firebase.logout().then(()=>{
      this.router.navigate(['login'], { clearHistory: true, transition:{name:'slideleft'} });
    });
  }

}
