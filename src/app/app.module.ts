import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CajaComponent} from './components/caja/caja.component';
import {NotificacionComponent} from './components/notificacion/notificacion.component';
import {AcomComponent} from './components/acom/acom.component';
import { VentanaComponent} from './components/ventana/ventana.component';
import {BottomSheetOverviewExampleSheet} from './components/ventana/ventana.component';
import {BotonComponent} from './boton/boton.component';
import {ButtonToggleAppearanceExample } from './components/inter/inter.component';
import {TarjetaComponent} from './components/tarjeta/tarjeta.component';
import {OpComponent} from './components/op/op.component';
import {MenuComponent} from './components/menu/menu.component';
import {BarComponent} from './components/bar/bar.component';
import{SliComponent} from './components/sli/sli.component';
import{TableBasicExample} from './components/tabla/tabla.component'
import {TabGroupBasicExample} from './components/des/des.component'





@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        MenuComponent,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgOptimizedImage,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatCardModule,
        MatChipsModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        CajaComponent,
        NotificacionComponent,
        AcomComponent,
        VentanaComponent,
        BottomSheetOverviewExampleSheet,
        BotonComponent,
        ButtonToggleAppearanceExample ,
        TarjetaComponent,
        OpComponent,
        BarComponent,
        SliComponent,
        TableBasicExample,
        TabGroupBasicExample
     
        
    ]
})
export class AppModule { }
