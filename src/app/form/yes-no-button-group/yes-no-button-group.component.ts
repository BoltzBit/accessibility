import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum YesNoButtonGroupOptions{
    YES = 'yes',
    NO = 'no'
}

@Component({
    selector: 'app-form-yes-no-button-group',
    templateUrl: './yes-no-button-group.component.html',
    styleUrls: ['./yes-no-button-group.component.scss']
})

export class YesNoButtonGroupComponent implements OnInit {
    @Input() value!: string;
    @Input() label!: string;
    @Output() valueChange =  new EventEmitter<string>();

    public options = YesNoButtonGroupOptions;

    constructor() { }

    ngOnInit(): void {
    }

    public activate(value: string): void{
        this.value = value;

        this.valueChange.emit(this.value);
    }
}
