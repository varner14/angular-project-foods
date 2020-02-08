import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mt-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
 @Output() rated = new EventEmitter<number>()

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;

  previosRate: number;
  constructor() {}

  ngOnInit() {}

  setRate(r: number) {
    this.rate = r;
    this.previosRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(r: number) {
    if (this.previosRate === undefined) this.previosRate = this.rate;
    this.rate = r;
  }

  clearTemporaryRate(){
    if(this.previosRate !== undefined){
      this.rate = this.previosRate
      this.previosRate = undefined
    }
  }
}
