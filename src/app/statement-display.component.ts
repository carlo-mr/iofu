import { Component, Input } from '@angular/core';

import { Statement } from './statement';

import { StatementService } from './statement.service';

@Component({
  selector: 'statement-display',
  templateUrl: './statement-display.component.html',
  styleUrls: ['./statement-display.component.css']
})
export class StatementDisplayComponent {
	@Input() statement: Statement;

	calculateVoteSum(): number {
		return this.statement.illegalVotes + this.statement.frownedUponVotes;
	}
}
