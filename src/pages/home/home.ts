import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupsService } from "../../providers/services/groups.service";
import { TicketsService } from "../../providers/services/tickets.service";

import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'home.html',
  selector: 'home',
  providers: [GroupsService, TicketsService]
})
export class HomePage {
  segmentValue: string = "groups";
  isAndroid: boolean = false;
  groups: any;

  constructor(private nav: NavController, platform: Platform, groupService: TicketsService, groupsService: GroupsService) {
    this.isAndroid = platform.is('android');
    this.groups = groupsService.getAll();
  }

}
