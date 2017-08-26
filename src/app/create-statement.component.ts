import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { StatementService } from './statement.service';

@Component({
  selector: 'create-statement',
  templateUrl: './create-statement.component.html',
  styleUrls: ['./create-statement.component.css']
})
export class CreateStatementComponent {
  text: string;
  constructor(
  	private router: Router,
  	private statementService: StatementService
  ) {}

  add(): void {
  	let statement = this.statementService.createStatement(this.text);
  	this.text = "";

  	this.router.navigate(['/vote', statement.id]);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
        this.add();
    }
  }
}
