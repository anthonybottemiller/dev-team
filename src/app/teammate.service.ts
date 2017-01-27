import { Injectable } from '@angular/core';
import { Teammate } from './teammate.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TeammateService {
  teammates: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
  this.teammates = angularFire.database.list('teammates');
  }

  getTeammates(){
    return this.teammates;
  }

  getTeammateById(teammateId: string){
    return this.angularFire.database.object('teammates/' + teammateId);
  }
}
