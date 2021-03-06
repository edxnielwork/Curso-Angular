import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase  from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) {}
    

    //REGISTRARSE
  
    async register(email:string,  password: string){
      try {
        return await this.afauth.createUserWithEmailAndPassword(email, password);
      } catch (error) {
        console.log("error of login: ", error);
        return null;
      }
    }
  
  //LOGIN BASIC
  
  async login(email:string,  password: string){
      try {
        return await this.afauth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log("error of login: ", error);
        return null;
      }
    }
  
    //LOGIN GOOGLE

    async loginWithGoogle(email:string,  password: string){
      try {
        return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      } catch (error) {
        console.log("error of login with Google: ", error);
        return null;
      }
    }


    getUserLogged(){
      return this.afauth.authState;
    }

    logout(){
      this.afauth.signOut();
  
    }
}
