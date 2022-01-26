import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  ViewChat=false;
  userLogged:any;
  newMesseger : string = "";
  messegers:any=[];
  constructor(private authService: AuthService) { 

  }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(usuario=>{
      this.userLogged = usuario;
    });
  }

  sendMessager(){
    if(this.newMesseger == "")return;

      console.log(this.newMesseger);
      let messeger ={
        id: this.userLogged.uid,
        text: this.newMesseger
      }
    
  
    this.messegers.push(messeger);
    this.newMesseger="";

    setTimeout(() =>{
      this.scrollToTheLastElementByClassName();
    }, 30);
    
  }
  
  scrollToTheLastElementByClassName(){
    let elements=document.getElementsByClassName('msj');
    let ultimo:any=elements[(elements.length-1)];
    let toppos = ultimo.offsetTop;

    //@ts-ignore
    document.getElementById('containerMessage')?.scrollTop = toppos;
  }
    
}
