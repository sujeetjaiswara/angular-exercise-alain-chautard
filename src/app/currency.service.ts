import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  // TODO Handle exchange rates for each currency using the endpoint: https://lp-store-server.vercel.app/rates

  currencySignal = signal('USD');

  setCurrency(value: string) {
    this.currencySignal.set(value);
  }

  get getCurrency(): Signal<string> {
    return this.currencySignal.asReadonly();
  }
}
