import { Component, OnInit, Input, ContentChild, AfterContentInit} from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input == undefined)
      throw new Error("Esse componente tem que ser usado com a diretiva ngModel ")

  }

  hasSuccess():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }

}
