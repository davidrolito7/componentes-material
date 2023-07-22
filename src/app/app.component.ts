import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common'
import { Product } from './modls/product.model';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PROYECTO ANGULAR COMPONENTES';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle() {
    this.title = "Primer proyecto angular";
  }

  
}


