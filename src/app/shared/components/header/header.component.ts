import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  name: any;
  logado: any;

  ngOnInit(): void {
    this.name = 'otavio';
    this.logado = true;
  }

  exit(): void{
    this.router.navigate(['/login']);
  }


  navigateByUrl():void{
    console.log("trocou de rota");
  }
}
