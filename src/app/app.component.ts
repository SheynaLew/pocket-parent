import { Component } from '@angular/core';
import { ListCardService } from './services/list-card.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pocket-parent';

  get listCardTitles() {
    return this.listCardService.listCardTitles;
   }
  
   constructor(private listCardService: ListCardService) { }
}


    