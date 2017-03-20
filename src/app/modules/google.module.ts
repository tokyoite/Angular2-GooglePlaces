//Required Deps
import { NgModule } from '@angular/core';
import { GooglemapsComponent } from '../components/google/googlemaps.component'
import { GoogleplaceDirective } from '../directives/googleplaces/googleplaces.directive'
import { GooglemapsDirective } from '../directives/googleplaces/googlemaps.directive'
@NgModule({
    exports: [
        GooglemapsComponent,
        GoogleplaceDirective
    ],
    declarations: [GooglemapsComponent,GoogleplaceDirective]
})

export class googleModule { }
