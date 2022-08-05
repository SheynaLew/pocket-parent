import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  constructor() { }
  listCardTitles = ["Today", "Tomorrow", "Later"];

  ngOnInit(): void {
  }


}
