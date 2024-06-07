import { Component, inject } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from './currency';

@Component({
  selector: 'app-currency-switcher',
  standalone: true,
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css'],
})
export class CurrencySwitcherComponent {
  showItems = false;
  service = inject(CurrencyService);

  changeCurrency(currency: Currency): void {
    this.showItems = false;
    this.service.setCurrency(currency);
  }
}
