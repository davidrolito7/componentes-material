import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-fancy',
  templateUrl: 'tarjeta.component.html',
  styleUrls: ['tarjeta.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class TarjetaComponent {}