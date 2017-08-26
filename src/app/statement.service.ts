import { Injectable } from '@angular/core';

import { Statement } from './statement';

import { MOCK_STATEMENTS } from './mock-statements'

@Injectable()
export class StatementService {
	statements: Statement[] = MOCK_STATEMENTS;

	getRandomStatement(): Promise<Statement> {
		return Promise.resolve(this.statements[Math.floor(Math.random()*this.statements.length)]);
	}

	getStatement(id: string): Promise<Statement> {
		if(id === null) {
			return this.getRandomStatement();
		} else {
			return this.getStatements()
             	.then(statements => statements.find(statement => statement.id === +id));
		}
	};

	getStatements(): Promise<Statement[]> {
		return Promise.resolve(this.statements);
	};

	createStatement(text: string): Statement {
	  let statement = {id: this.statements.length +1, text: text, illegalVotes: 0, frownedUponVotes: 0};

	  this.statements.push(statement);

	  return statement;
	};

	voteIllegal(statement: Statement): void {
  		statement.illegalVotes += 1;
	};

	voteFrownedUpon(statement: Statement): void {
  		statement.frownedUponVotes += 1;
	};
}