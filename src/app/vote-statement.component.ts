import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Statement } from './statement';

import { StatementService } from './statement.service';

@Component({
  selector: 'vote-statement',
  templateUrl: './vote-statement.component.html',
  styleUrls: ['./vote-statement.component.css']
})
export class VoteStatementComponent implements OnInit {
  statement: Statement;

  constructor(
  	private route: ActivatedRoute,
  	private statementService: StatementService
  ) {}

  ngOnInit(): void {
  	this.route.paramMap
    .switchMap((params: ParamMap) => this.statementService.getStatement(params.get('id')))
    .subscribe(statement => this.statement = statement);
  }

  illegal(): void {
  	this.statementService.voteIllegal(this.statement);

  	this.statementService.getRandomStatement().then(statement => this.statement = statement);
  }

  frownedUpon(): void {
  	this.statementService.voteFrownedUpon(this.statement);

    this.statementService.getRandomStatement().then(statement => this.statement = statement);
  }
}
