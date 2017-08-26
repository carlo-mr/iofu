import { Component, OnInit } from '@angular/core';

import { Statement } from './statement';

import { StatementService } from './statement.service';

@Component({
  selector: 'statement-list',
  templateUrl: './statement-list.component.html',
  styleUrls: ['./statement-list.component.css']
})
export class StatementListComponent implements OnInit {
  statements: Statement[];

  constructor(private statementService: StatementService) {}

  ngOnInit(): void {
  	this.statementService.getStatements().then(statements => this.statements = statements);
  }
}
