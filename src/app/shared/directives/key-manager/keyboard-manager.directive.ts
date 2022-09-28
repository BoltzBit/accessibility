import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboardManagedItemDirective } from "./keyboard-managed-item.directive";

@Directive({
    selector: '[app-keyboard-manager]'
})

export class KeyboardManagerDirective {
    @ContentChildren(KeyboardManagedItemDirective) public items!: QueryList<KeyboardManagedItemDirective>;

    @HostListener('keyup', ['$event'])
    public manageKeys(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowUp':
                this.moveFocus(ArrowDirection.RIGHT).focus();
                console.log('up');
                break;
            case 'ArrowDown':
                this.moveFocus(ArrowDirection.LEFT).focus();
                break;
            case 'ArrowLeft':
                this.moveFocus(ArrowDirection.LEFT).focus();
                break;
            case 'ArrowRight':
                this.moveFocus(ArrowDirection.RIGHT).focus();
                break;
        }
    }

    public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective{
        const items = this.items.toArray(); //manipular a queryList como array
        const selectedItemIndex = items.findIndex(item => item.isFocus());//pegar o item focado da dom
        const targetElementFocus = items[selectedItemIndex + direction];

        //entender essa lógica
        if(targetElementFocus){
            return targetElementFocus;
        }

        return direction === ArrowDirection.LEFT
            ? items[items.length - 1]
            : items[0];
    }
}

enum ArrowDirection {
    LEFT = -1,
    RIGHT = 1
}
