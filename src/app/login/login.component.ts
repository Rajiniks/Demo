import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
// import {Router, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router
  ) { }

  ngOnInit() {
 //   this.router.navigate(['./register/registser.component']);
  }

  goToRegisterUser() {
    this.router.navigate(['/registeruser']);
 }
}
