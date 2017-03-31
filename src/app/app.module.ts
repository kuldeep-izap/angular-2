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

@NgModule({
  declarations: [
    AppComponent, StocksComponent, HighlightDirective,
    MutualfundsComponent,
    SharedComponent,
    StockDirectiveDirective,
    DateFormetterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
