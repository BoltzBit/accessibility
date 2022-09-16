import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-yes-no-button-group',
    templateUrl: './yes-no-button-group.component.html',
    styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {
    @Input() value!: string;
    @Input() label!: string;

    constructor() { }

    ngOnInit(): void {
    }

}
