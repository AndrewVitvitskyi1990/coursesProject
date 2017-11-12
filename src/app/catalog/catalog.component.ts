import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {

  courseList=[
    {caption:'Java',price:1000,duration:'3 month'},
    {caption:'Phyton',price:800,duration:'2.5 month'},
    {caption:'C++',price:1200,duration:'4 month'},
    {caption:'Android',price:1000,duration:'3.5 month'},
    {caption:'Front-End',price:700,duration:'2 month'},
    {caption:'Php',price:900,duration:'3.5 month'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
