import {Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

/**
 * @title Button toggle appearance
 */
@Component({
  selector: 'button-t',
  templateUrl: 'inter.component.html',
  styleUrls: ['inter.component.css'],
  standalone: true,
  imports: [MatButtonToggleModule],
})
export class ButtonToggleAppearanceExample {}