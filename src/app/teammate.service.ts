import { Injectable } from '@angular/core';
import { Teammate } from './teammate.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TeammateService {
  teammates: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
  this.teammates = angularFire.database.list('teammates');
  }

  addTeammate(newTeammate: Teammate) {
    this.teammates.push(newTeammate);
  }

  getTeammates(){
    return this.teammates;
  }

  getTeammateById(teammateId: string){
    return this.angularFire.database.object('teammates/' + teammateId);
  }

  updateTeammate(localUpdatedTeammate){
    var teammateEntryInDatabase = this.getTeammateById(localUpdatedTeammate.$key);
    teammateEntryInDatabase.update({name: localUpdatedTeammate.name, specialty: localUpdatedTeammate.specialty, email: localUpdatedTeammate.email, phone: localUpdatedTeammate.phone});
  }

  deleteTeammate(localTeammateToDelete){
    var teammateEntryInDatabase = this.getTeammateById(localTeammateToDelete.$key);
    teammateEntryInDatabase.remove();
  }
}
