import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @Input() name: string = '';

  @Output() sendName: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.sendName.emit(this.name)
  }
}

