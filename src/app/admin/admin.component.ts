import { Component, OnInit } from '@angular/core';
import { Teammate } from '../teammate.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { TeammateService } from '../teammate.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeammateService]
})

export class AdminComponent implements OnInit {

  constructor(private teammateService: TeammateService) { }

  ngOnInit() {
  }

  submitForm(name: string, specialty: string, email: string, phone: string) {
    var newTeammate: Teammate = new Teammate(name, specialty, phone, email);
    this.teammateService.addTeammate(newTeammate);
  }
}
