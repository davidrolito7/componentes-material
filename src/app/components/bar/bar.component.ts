import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

/**
 * @title Basic radios
 */
@Component({
  selector: 'radio-com',
  templateUrl: 'bar.component.html',
  styleUrls: ['bar.component.css'],
  standalone: true,
  imports: [MatRadioModule],
})
export class BarComponent {}
