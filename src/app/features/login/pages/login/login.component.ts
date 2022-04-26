import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modal!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.modal = false;
  }

  logar():void{
    this.modal = true;
  }
  
  fecharModal():void{
    this.modal = false;
  }
  


}
