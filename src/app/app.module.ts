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

@NgModule({
  declarations: [
    AppComponent, StocksComponent, HighlightDirective,
    MutualfundsComponent,
    SharedComponent,
    StockDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
