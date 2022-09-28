import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: '[app-keyboard-managed-item]'
})
export class KeyboardManagedItemDirective{
    @Output() focused = new EventEmitter<void>();

    constructor(private _elementRef: ElementRef<HTMLElement>){}

    public focus(): void{
        this._elementRef.nativeElement.focus();
        this.focused.emit();
    }

    public isFocus(): boolean{
        return this._elementRef.nativeElement === document.activeElement;
    }
}
