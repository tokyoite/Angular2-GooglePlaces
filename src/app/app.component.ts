import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    property: any = {};
    title = 'app works!';
    place: Object = null;
    getAddress(place: Object) {
        this.place = place;
        this.property.StreetAddress = place['name'];

        for (let x of place["address_components"]) {
            if (x["types"][0] == "postal_code") {
                this.property.Zip = x["long_name"];
            }

            if (x["types"][0] == "locality") {
                this.property.City = x["long_name"];
            }

            if (x["types"][0] == "administrative_area_level_1") {
                this.property.State = x["long_name"];
            }

            if (x["types"][0] == "administrative_area_level_2") {
                this.property.County = x["long_name"];
            }

            
        }

        console.log("Address Object", place);
    }
}
