import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(hmsloginForm: NgForm) {
    const details = hmsloginForm.value;
    if (details.username === 'admin' && details.password === 'admin') {
      this.router.navigate(['dashboard']);
    } else {

    }
  }
}
