import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class ListCardService {

todaysListUpdated = [];   
tomorrowsListUpdated = [];  
laterListUpdated = [];
        
listCardTitles = [
    {title: "Today"}, 
    {title: "Tomorrow"}, 
    {title: "Later"}
];

listItems = [
    {item: "Empty dishwasher",
    list: "Today",
    },
    {item: "Feed cat",
    list: "Today",
    },
    {item: "Cook dinner",
    list: "Tomorrow",
    },
    {item: "Paint living room",
    list: "Later",
    },
    {item: "Sort playroom",
    list: "Later",
    }
]

sortListItems() {
    let todaysList = this.listItems.filter(function (listItem)
        {return listItem.list === "Today"
        })
    let tomorrowsList = this.listItems.filter(function (listItem)
        {return listItem.list === "Tomorrow"
        })
    let laterList = this.listItems.filter(function (listItem)
        {return listItem.list === "Later"
        })
    this.todaysListUpdated = todaysList;
    this.tomorrowsListUpdated = tomorrowsList;
    this.laterListUpdated = laterList
}

constructor() { }
    }

    
