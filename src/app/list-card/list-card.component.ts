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
    this.listCardService.sortListItems();
    console.log("today", this.listCardService.todaysListUpdated)
    console.log("tomorrow", this.listCardService.tomorrowsListUpdated)
    console.log("later", this.listCardService.laterListUpdated)
  }

  get listCardTitles() {
    return this.listCardService.listCardTitles;
   }

  get todaysList() {
    return this.listCardService.todaysListUpdated;
  } 

  get tomorrowsList() {
    return this.listCardService.tomorrowsListUpdated;
  }

  get laterList() {
    return this.listCardService.laterListUpdated;
  }

  onDoneTodaysTask(i: number) {
    this.listCardService.deleteItemFromTodaysList(i);
  }
  onDoneTomorrowsTask(i: number) {
    this.listCardService.deleteItemFromTomorrowsList(i);
  }

  onDoneLatersTask(i: number) {
    this.listCardService.deleteItemFromLatersList(i);
  }
  
}
