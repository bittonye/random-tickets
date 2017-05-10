import { Injectable } from '@angular/core';
import { DataProvider } from "../data";
import { Observable } from 'rxjs/Observable';
import { LotteryGroup } from "../models/group.model";
import { Ticket } from "../models/ticket.model";

@Injectable()
export class GroupsService {
  groups: LotteryGroup[];

  constructor(private fire: DataProvider) {
     let group: LotteryGroup = {
            name: "group1",
            imgUrl: "../../assets/img/cat-background.jpg",
            members: [{
                firstName: "user1",
                lastName: "user1",
                email: "user1@gmail.com",
                imgUrl: ""
            }],
            tickets: [{
                firstNumbers: [2,4,8,21,28,31,35],
                strongNumber: 7
            }]
     };
  }

  loadData(userId) {
    this.fire.object("/groups").subscribe((data) => {

    })
  }

  addGroup(group: LotteryGroup) {
      this.groups.push(group);
  }

  removeGroup(id) {

  }

  getAll() {
      return this.groups;
  }

}
