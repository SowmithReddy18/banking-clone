import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  IsBalanceAvailable: boolean;
  Balance = {};
  Name : string;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let tempName = this._activatedRoute.snapshot.params['name'];
    this.Name = tempName.charAt(0).toUpperCase() + tempName.substring(1).toLowerCase();
  }

  showBalance() {
    this.IsBalanceAvailable = true;
    this.Balance = {
      Asset: 'Loading',
      Liability: 'Loading'
    }
    setTimeout(() => {
      this.Balance = {
        Asset: Math.floor(Math.random() * 100000),
        Liability: Math.floor(Math.random() * 100000)
      }
    }, 1000);
  }

}
