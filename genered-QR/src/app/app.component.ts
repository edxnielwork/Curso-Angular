import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'genered-QR';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'www.futurolamanense.fin.ec';
  url = 'www.futurolamanense.fin.ec';

  mostrar(){
    this.url= this.value;
  }
  
  clear(){
    this.value= "";
  }
}
