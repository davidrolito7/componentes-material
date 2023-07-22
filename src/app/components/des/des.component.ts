import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group',
  templateUrl: 'des.component.html',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabGroupBasicExample {}
