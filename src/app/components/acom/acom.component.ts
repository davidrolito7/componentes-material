import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'acom-num',
  templateUrl: 'acom.component.html',
  styleUrls: ['acom.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class AcomComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}