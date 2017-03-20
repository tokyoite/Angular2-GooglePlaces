import { Directive, HostListener, ElementRef, OnInit, OnChanges, Input, Output, EventEmitter, NgZone } from "@angular/core";
import { NgModel } from '@angular/forms';
declare var google: any;

@Directive({
    selector: '[googleplace]',
    providers: [NgModel]
})
export class GoogleplaceDirective {
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    modelValue: any;
    autocomplete: any;
    private el: HTMLElement;


    constructor(el: ElementRef, private model: NgModel, private ngZone: NgZone) {
        this.el = el.nativeElement;
        this.modelValue = this.model;
        let input = this.el;
            this.autocomplete = new google.maps.places.Autocomplete(input, {});
            google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
                this.ngZone.run(() => {
                    let place = this.autocomplete.getPlace();
                    this.setAddress.emit(place);
                })
            });
    }
}