import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms/src/directives';

import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
    value = "start value";
    myValue = '';
    @Input() okText;
    @Input() cancelText;
    @Input() template;
    @Input() placeholder;
    @Input() title;
    @Input() showPrompt;
   
    @Output() valueEmitted = new EventEmitter<string>();
    

    constructor() {
        this.okText = 'OK',
        this.cancelText = 'Cancel';
    }
    emitValue(value) {
        console.log('value to emit', value)
        this.valueEmitted.emit(value);
    }
    ngOnInit() {
        this.value = this.myValue;
        this.title = "Working for now";
        this.template = "Template to be added";
        
    }
    onValueInput(e){
        console.log("value inputed, ", e.target.value)
        this.myValue = e.target.value;
    }
}
