import {Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
@Component({
  selector: 'op-s',
  templateUrl: 'op.component.html',
  styleUrls: ['op.component.css'],
  standalone: true,
  imports: [MatChipsModule],
})
export class OpComponent{}
