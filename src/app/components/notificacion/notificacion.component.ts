import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

/**
 * @title Badge overview
 */
@Component({
  selector: 'notificacion-g',
  templateUrl: 'notificacion.component.html',
  styleUrls: ['notificacion.component.css'],
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
})
export class NotificacionComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
