import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'xyz company', 'http://portfolio.alonsohernandez.com', 'ruby on rails', 150, 120, 15, 'alonso@hernandez.com')
  proposalTwo: Proposal = new Proposal(30, 'abc company', 'http://portfolio.alonsohernandez.com', 'ruby on rails', 150, 120, 15, 'alonso@hernandez.com')
  proposalThree: Proposal = new Proposal(32, '123 company', 'http://portfolio.alonsohernandez.com', 'ruby on rails', 150,120, 15, 'alonso@hernandez.com')
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}

