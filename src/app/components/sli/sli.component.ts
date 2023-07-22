import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-o',
  templateUrl: 'sli.component.html',
  styleUrls: ['sli.component.css'],
  standalone: true,
  imports: [MatSliderModule],
})
export class SliComponent {}