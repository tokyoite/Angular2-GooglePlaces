import { Component, HostListener, ElementRef, OnInit, OnChanges, Input, Output, EventEmitter, NgZone } from "@angular/core";
import { NgModel } from '@angular/forms';
declare var google: any;

@Component({
    selector: 'google-maps',
    template: '<div></div>',
    providers: [NgModel]
})
export class GooglemapsComponent {
    @Input() place: Object = null;
    @Input() width: string = "100%";
    @Input() height: string = "400px";
    private el: HTMLElement;

    constructor(el: ElementRef, private ngZone: NgZone) {
        this.el = el.nativeElement;
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

        this.el.childNodes[0]['style'].width = this.width;
        this.el.childNodes[0]['style'].height = this.height;

        let map = new google.maps.Map(this.el.childNodes[0], {
            center: { lat: lat, lng: lng },
            scrollwheel: false,
            zoom: 18
        });

        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: this.place ? this.place['formatted_address']: "No Address"
        });

        google.maps.event.trigger(map, 'resize');
    }

}