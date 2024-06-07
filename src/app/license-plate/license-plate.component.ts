import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { LicensePlate } from '../license-plate';

@Component({
  selector: 'app-license-plate',
  standalone: true,
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css'],
  imports: [CurrencyPipe],
})
export class LicensePlateComponent {
  @Input()
  plate!: LicensePlate;

  @Input()
  buttonText!: string;

  service = inject(CurrencyService);
}
