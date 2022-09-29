import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from 'src/app/shared/service/unique-id/unique-id.service';

enum YesNoButtonGroupOptions{
    YES = 'yes',
    NO = 'no'
}

@Component({
    selector: 'app-form-yes-no-button-group',
    templateUrl: './yes-no-button-group.component.html',
    styleUrls: ['./yes-no-button-group.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => YesNoButtonGroupComponent)
        }
    ]
})

//dizer pro componente implementar a interface que interage com o FormGroup
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
    @Input() disabled!: boolean;
    @Input() value!: string;
    @Input() label!: string;
    @Output() valueChange =  new EventEmitter<string>();

    public id!: string;
    public options = YesNoButtonGroupOptions;
    public onChange = (value: string) => {};
    public onTouched = () => {};

    constructor(private _uniqueIdService: UniqueIdService) {
        this.id = this._uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
     }

    ngOnInit(): void {
    }

    //cara que recebe o valor e passa pro componente
    public writeValue(value: string): void {
        this.value = value;
        this.onChange(this.value);
        this.valueChange.emit(this.value);
    }

    //cara que monitora as mudanças do componente
    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public activate(value: string): void{
        this.writeValue(value);
    }
}
