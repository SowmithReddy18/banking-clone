import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  WrongPass: boolean;
  accnum;
  accname;
  accbal;
  ledger;
  available;
  resesrved;
  unclear;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(username, password) {
    if (password.value != 'admin') {
      this.WrongPass = true;
      return;
    }
    if (this.accnum != null ||
      this.ledger != null ||
      this.available != null ||
      this.resesrved != null ||
      this.unclear != null) {
      this.router.navigate(['/dashboard', username.value], {
        queryParams: {
          accNum: this.accnum,
          accname: this.accname,
          ledger: this.ledger,
          available: this.available,
          resesrved: this.resesrved,
          unclear: this.unclear
        }
      });
      return;
    }
    this.router.navigate(['/dashboard', username.value]);
  }
}
