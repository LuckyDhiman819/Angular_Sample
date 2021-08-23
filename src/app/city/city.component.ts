import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  inputs: ["temprature"]
})
export class CityComponent implements OnInit {

  
  @Input()
  temprature:String = "";
  
  @Output()
  cityEvent = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  saveData(value:String){

    this.cityEvent.emit(value);

  }

}
