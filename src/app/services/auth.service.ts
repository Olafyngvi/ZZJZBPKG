import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string){
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line: max-line-length
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(userData => resolve(userData), err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
