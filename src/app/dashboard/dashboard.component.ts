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
  Name: string;
  AccNum;
  accname;
  ledger;
  available;
  resesrved;
  unclear;
  today;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let tempName = this._activatedRoute.snapshot.params['name'];
    this.Name = tempName.charAt(0).toUpperCase() + tempName.substring(1).toLowerCase();
    this.AccNum = this._activatedRoute.snapshot.queryParams['accNum'] || '018305008865';
    this.accname = this._activatedRoute.snapshot.queryParams['accname'] || 'RRMAININGAGENCY PR';
    this.accname = this.accname.toUpperCase();
    this.ledger = this._activatedRoute.snapshot.queryParams['ledger'] || Math.floor(Math.random()*100000).toString() + '.00';
    this.available = this._activatedRoute.snapshot.queryParams['available'] || Math.floor(Math.random()*100000).toString() + '.00';
    this.resesrved = this._activatedRoute.snapshot.queryParams['resesrved'] || '0.00';
    this.unclear = this._activatedRoute.snapshot.queryParams['unclear'] || '0.00';
    this.today = new Date().toLocaleString().split(',')[0];
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
