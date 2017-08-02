import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() { }

  @Input() isFavorite: boolean = false;
  @Output() eventSendFromThisComponement = new EventEmitter() 

  ngOnInit() {
  }

  onClickFunction() {
    this.isFavorite = !this.isFavorite;
    this.eventSendFromThisComponement.emit();
    
  }

}
