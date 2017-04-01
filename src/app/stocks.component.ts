import {Component} from '@angular/core';
import { StockService} from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h2>Stocks</h2>
    {{title}}
    Test
    <ul>
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>

    `
})

export class StocksComponent{
    
    title = 'List of Stocks: ';
    stocks;
    
    constructor(stockservice : StockService){
        this.stocks = stockservice.getStocks();
    }


}