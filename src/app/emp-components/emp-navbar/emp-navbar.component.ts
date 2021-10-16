import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Logs } from 'src/app/classes/logs';

@Component({
  selector: 'app-navbar',
  templateUrl: './emp-navbar.component.html',
  styleUrls: ['./emp-navbar.component.scss']
})
export class EmpNavbarComponent implements OnInit {

  @Output() addEmpClicked = new EventEmitter<any>();

  constructor( public router : Router ) { }

  ngOnInit(): void {

  }

  addEmployee( event ){

    this.addEmpClicked.emit( event )
  }

  logout(){

    Logs.printLog( "LogOut" )
    this.router.navigate(['login'])
  }
}
