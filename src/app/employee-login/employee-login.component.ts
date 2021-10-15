import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Logs } from '../classes/logs';
import { regexValidation } from '../classes/regex';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {

  form : FormGroup = this._fb.group({
    email : ['',[Validators.required, Validators.pattern(regexValidation.EMAIL)]],
    password : ['',Validators.required]
  });

  hide = false;
  errorMessage = "";
  
  constructor( public _fb : FormBuilder, public router : Router) { }

  ngOnInit(): void {
  }

  onSubmit( formValue : Object ){

   Logs.printLog(formValue , "this is form Data");
   this.router.navigate(['app/dashboard']);
  }

  clear( event ){


  }

}
