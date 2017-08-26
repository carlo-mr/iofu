import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatementListComponent }   from './statement-list.component';
import { CreateStatementComponent }      from './create-statement.component';
import { VoteStatementComponent }  from './vote-statement.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/vote', pathMatch: 'full' },
  { path: 'app',     component: AppComponent },
  { path: 'list',  component: StatementListComponent },
  { path: 'vote/:id', component: VoteStatementComponent },
  { path: 'vote', component: VoteStatementComponent },
  { path: 'add',     component: CreateStatementComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}