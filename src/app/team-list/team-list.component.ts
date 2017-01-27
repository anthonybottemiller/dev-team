import { Component, OnInit } from '@angular/core';
import { Teammate } from '../teammate.model';
import { TeammateService } from '../teammate.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeammateService]
})

export class TeamListComponent implements OnInit {

  teammates: FirebaseListObservable<any[]>;

  constructor(private teammateService: TeammateService) { }

  ngOnInit() {
    this.teammates = this.teammateService.getTeammates();
  }

}
