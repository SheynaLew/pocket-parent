import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class ListCardService {

todaysListUpdated = [];    
        
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
    this.todaysListUpdated = todaysList;
}

constructor() { }
    }

    
