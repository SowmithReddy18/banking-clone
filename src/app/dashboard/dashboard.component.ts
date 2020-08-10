import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Balance: string;

  constructor() { }

  ngOnInit(): void {
  }

  showBalance(){
    this.Balance = 'Loading';
    setTimeout(() => {
      this.Balance='27,845'
    }, 1000);
  }

}
