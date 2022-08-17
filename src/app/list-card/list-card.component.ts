import { Component, OnInit } from '@angular/core';
import { ListCardService } from '../services/list-card.service';


@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  constructor(
    private listCardService: ListCardService
  ) { }


  ngOnInit(): void {
  }

  get listCardTitles() {
    return this.listCardService.listCardTitles;
   }

}
