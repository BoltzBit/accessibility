import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public form!: FormGroup;
    title = 'accessibility';

    constructor(private _formBuilder: FormBuilder){
        this.form = this._formBuilder.group({
            yesNoAnswer: [{
                value: 'no',
                disabled: false
            }]
        });
    }

    public submit(): void{
        console.log(this.form.value)
    }
}
