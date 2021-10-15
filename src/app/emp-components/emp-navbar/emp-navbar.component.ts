import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logs } from 'src/app/classes/logs';

@Component({
  selector: 'app-emp-navbar',
  templateUrl: './emp-navbar.component.html',
  styleUrls: ['./emp-navbar.component.scss']
})
export class EmpNavbarComponent implements OnInit {

  menuArray : any = [
    {
      title: 'Dashboard',
      width : '15%',
      route : `app/dashboard`
    },
    {
      title: 'Add Employee',         
      width : '15%',
      route : `app/addEmp`
    },
   ]

   active : string = '';

  constructor( public router : Router ) { }

  ngOnInit(): void {

    this.active = 'Dashboard';
  }

  activeMenu(title :any ,event : any){

    this.active = title;
    Logs.printLog( event )
    this.router.navigate([event])
  }

}
