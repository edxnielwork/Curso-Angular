import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userLogged:any;
  newMesseger : string = "";
  messegers:any=[
    {
      id:"id",
      texto:"Hola como estas"
    }, {
      id:"id",
      texto:" como estas"
    }, 
    
    {
      id:"id",
      texto:"Hola como "
    }, 
    
    {
      id:"id",
      texto:"Hola  estas"
    }, 
    
    {
      id:"id",
      texto:" comowteferfttttttttttttttttttttttttttttttttttt "
    },
  ];
  constructor(private authService: AuthService) { 

  }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(usuario=>{
      this.userLogged =usuario;
    });
  }

  sendMessager(){
    console.log(this.newMesseger);
    this.newMesseger="";
  }


}
