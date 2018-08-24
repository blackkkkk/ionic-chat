import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddressBookPage} from './address-book';
import {IndexListModule} from "ionic3-index-list";
import {SharedModule} from "../../common/shared/shared.module";

@NgModule({
    declarations: [
        AddressBookPage,
    ],
    imports: [
        IndexListModule,
        SharedModule,
        IonicPageModule.forChild(AddressBookPage),
    ],
    providers: [
    ]
})
export class AddressBookPageModule {
}
