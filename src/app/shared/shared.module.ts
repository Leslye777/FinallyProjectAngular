import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';


const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ... components
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],

  exports: [
    ... components
  ]
})
export class SharedModule { }
