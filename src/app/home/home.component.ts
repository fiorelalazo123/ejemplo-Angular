import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() namePadre: string;
  public dataClient: string = '';
  constructor() {
    this.namePadre = ' Fredillo'
  }

  ngOnInit(): void {
  }
  listenEvent(sendName: string) {
    console.log(sendName, 'sendName')
  }
}
