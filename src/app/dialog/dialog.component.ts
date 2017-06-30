import { Component,
         EventEmitter,
         Input,
         OnInit,
         Output
 } from '@angular/core';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
    title;
    @Input() okText;
    @Input() cancelText;
    @Input() template;
    @Input() placeholder;
    @Input() value: string;
    @Input() showPrompt;

    @Output() valueEmitted = new EventEmitter<string>();

    constructor() {
        this.okText = 'OK',
        this.cancelText = 'Cancel';
    }
    emitValue(value) {
        this.valueEmitted.emit(value);
    }
    ngOnInit() {
        this.title = "Working for now";
        this.template = "Template to be added";
    }

}
