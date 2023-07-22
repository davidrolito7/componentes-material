import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'boton-m',
  templateUrl: 'boton.component.html',
  styleUrls: ['boton.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class BotonComponent {}