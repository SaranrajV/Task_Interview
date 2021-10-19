import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSampleTemplate';
  toggleVar:boolean = false;

  callrecords:any =[
    {
      'title' : 'Lorem Ipsum' ,
      'value' : '10 calls per hour'
    },
    {
      'title' : 'Lorem Ipsum' ,
      'value' : '20 calls per hour'
    }
  ]

  public ShowHomeBlock() {
    this.toggleVar = !this.toggleVar;
    let elArr = document.querySelectorAll<HTMLElement>('.toggle-box'); // all
    if(this.toggleVar){
      elArr[0].style.display = 'block'
    }
    else {
      elArr[0].style.display = 'none'
    }
    
    
    
  }
}
