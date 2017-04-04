import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { SharedComponent } from './shared/shared.component';
import { StocksComponent } from './stocks.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import { HighlightDirective} from './shared/highlight.directive';
import { StockService} from './stock.service';
import { DateFormetterPipe } from './date-formetter.pipe';
import { routing} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CurrencyService} from './currency.service';
import { BondsDirective } from './bonds.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, StocksComponent, HighlightDirective,
    MutualfundsComponent,
    SharedComponent,
    StockDirectiveDirective,
    DateFormetterPipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
