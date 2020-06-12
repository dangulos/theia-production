import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public storage: Storage) { }
  
  canActivate() : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
    return new Promise((resolve, reject) => {
        this.checkToken().then(data =>{
          resolve(data);
        })
    });
  }
  checkToken() {
    return new Promise<boolean>(resolve => {
      this.storage.get("hasLoggedIn").then(token => {
        console.log("Este es el Token", token);
        if (token) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
}
