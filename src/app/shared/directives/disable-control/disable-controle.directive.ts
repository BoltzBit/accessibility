import { Directive, Input, OnChanges, SimpleChange } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
    selector: '[appDisableControl]'
})

export class DisableControlDirective implements OnChanges{
    @Input() appDisableControl!: boolean;

    constructor(private _ngControl: NgControl){}

    ngOnChanges(): void{
        if(this.appDisableControl){
            const action = this.appDisableControl ? 'disable' : 'enable';
            this._ngControl.control![action]();
        }
    }
}
