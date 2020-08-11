import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  WrongPass: boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(username, password){
    if(password.value != 'admin') {
      this.WrongPass = true;
      console.log(password.value);
      
      return;
    }
    this.router.navigate(['/dashboard', username.value]);
  }
}
