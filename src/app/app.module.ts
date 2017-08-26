import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatementDisplayComponent } from './statement-display.component';
import { StatementListComponent } from './statement-list.component';

import { CreateStatementComponent } from './create-statement.component';
import { VoteStatementComponent } from './vote-statement.component';

import { StatementService } from './statement.service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    StatementDisplayComponent,
    StatementListComponent,
    CreateStatementComponent,
    VoteStatementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StatementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
