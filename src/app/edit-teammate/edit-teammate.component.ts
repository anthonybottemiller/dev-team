import { Component, Input, OnInit } from '@angular/core';
import { Teammate } from '../teammate.model';
import { TeammateService } from '../teammate.service';

@Component({
  selector: 'app-edit-teammate',
  templateUrl: './edit-teammate.component.html',
  styleUrls: ['./edit-teammate.component.css'],
  providers: [TeammateService]
})

export class EditTeammateComponent implements OnInit {
  @Input() selectedTeammate;

  constructor(private teammateService: TeammateService) { }

  ngOnInit() {
  }

  beginUpdatingTeammate(teammateToUpdate){
    this.teammateService.updateTeammate(teammateToUpdate);
  }

  beginDeletingTeammate(teammateToDelete){
    if(confirm("Are you sure you want to delete this valuable developer?")){
      this.teammateService.deleteTeammate(teammateToDelete);
    }
  }
}
