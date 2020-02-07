import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number
  @Input() itensValue: number

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    if (this.itensValue > 0)
      return this.itensValue + this.delivery
    else
      return this.itensValue
  }

}
