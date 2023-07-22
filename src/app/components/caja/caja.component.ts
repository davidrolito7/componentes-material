import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Form field appearance variants */
@Component({
  selector: 'caja-selec',
  templateUrl: 'caja.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
})
export class CajaComponent {}