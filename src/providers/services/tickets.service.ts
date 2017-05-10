import { Injectable } from '@angular/core';
import { DataProvider } from "../data";
import { Observable } from 'rxjs/Observable';
import { Ticket } from "../models/ticket.model";
import { LotteryGroup } from "../models/group.model";


@Injectable()
export class TicketsService {
  group: LotteryGroup;

  constructor(private fire: DataProvider) {
      this.group = {
          members: [],
          name: "test",
          tickets: [],
          imgUrl: ""
      };
  }

  loadData(userId) {
    this.fire.object("/groups").subscribe((data) => {

    })
  }

  addTicket(ticket: Ticket) {
      this.group.tickets.push(ticket);
  }

  getGroup() {
      return this.group;
  }

}
