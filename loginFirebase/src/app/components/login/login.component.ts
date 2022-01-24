import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   
  usuario = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService) {
    
  }

  Send() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("Registed:",res);
    })
  }

  SendGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("Registed:",res);
    })
  }

  // AddUserLogged(){
  //   this.authService.getUserLogged().subscribe(res => { 
  //     console.log(res?.email);
  //   });
  // }

  LogOut(){
    this.authService.logout();
  }


  ngOnInit(): void {
  }

}
