import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ModalComponent } from './components/modal/modal.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FormsModule }   from '@angular/forms';  



const components = [
  HeaderComponent,
  FooterComponent,
  ModalComponent,

];
const pipes = [
  CurrencyPipe
]



@NgModule({
  declarations: [
    ... components,
    ... pipes
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FormsModule
  ],

  exports: [
    ... components,
    ... pipes
    
  ]
})
export class SharedModule { }
