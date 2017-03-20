import { Directive, HostListener, ElementRef, OnInit, OnChanges, Input, Output, EventEmitter, NgZone } from "@angular/core";
import { NgModel } from '@angular/forms';
declare var google: any;

@Directive({
    selector: '[googlemaps]',
    providers: [NgModel]
})
export class GooglemapsDirective {
    @Input() place: Object = null;
    modelValue: any;
    autocomplete: any;
    private el: HTMLElement;


    constructor(el: ElementRef, private model: NgModel, private ngZone: NgZone) {
        this.el = el.nativeElement;
        this.modelValue = this.model;
    }

    ngOnChanges() {

        let lat, lng;

        if (this.place) {
            let geo = this.place['geometry'];
            lat = geo.location.lat();
            lng = geo.location.lng();
        } else {
            lat = -34.397;
            lng = 150.644;
        }

        let map = new google.maps.Map(this.el, {
            center: { lat: lat, lng: lng },
            scrollwheel: false,
            zoom: 8
        });

        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: this.place ? this.place['formatted_address']: "No Address"
        });

        google.maps.event.trigger(map, 'resize');
    }

}