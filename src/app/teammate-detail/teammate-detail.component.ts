import { Component, OnInit } from '@angular/core';
import { TeammateService } from '../teammate.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Teammate } from '../teammate.model';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-teammate-detail',
  templateUrl: './teammate-detail.component.html',
  styleUrls: ['./teammate-detail.component.css'],
  providers: [TeammateService]
})
export class TeammateDetailComponent implements OnInit {
  teammateId: string = null;
  teammateToDisplay;ß

  constructor(private route: ActivatedRoute, private location: Location, private teammateService: TeammateService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teammateId = urlParameters['id'];
    });
    this.teammateToDisplay = this.teammateService.getTeammateById(this.teammateId);
  }

}
