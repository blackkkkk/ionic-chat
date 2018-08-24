import {ChangeDetectorRef, Component, ViewChild, ViewChildren} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import * as _ from 'lodash';
import {Contacts} from "../../providers/contacts";

@IonicPage()
@Component({
    selector: 'page-address-book',
    templateUrl: 'address-book.html',
})
export class AddressBookPage {
    index: string = 'A';
    showModal: boolean = false;
    timeout: any;
    indexes: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
    offsetTops: Array<number> = [];
    contacts: Array<any> = [];

    @ViewChildren('IonItemGroup') ionItemGroup;
    @ViewChild(Content) content: Content;

    constructor(public navCtrl: NavController,
                public contactsSev: Contacts,
                public ref: ChangeDetectorRef,) {

        this.contactsSev.getContacts()
            .then(res => {
                this.contacts = this.contactsSev.grouping(res);
                console.log(this.contacts)
            })
    }

    ionViewDidEnter() {
        this.getOffsetTops();
    }

    getOffsetTops() {
        this.offsetTops = this.ionItemGroup._results.map(ele => {
            return ele.nativeElement.offsetTop
        })
    }

    selectIndex(index: number) {
        this.index = this.indexes[index];
        const offsetTop = this.offsetTops[index];
        this.content.scrollTo(0, offsetTop, 300);
        this.createModal();
    }


    onScroll() {

        const threshold = 42;

        if (this.content.scrollTop < threshold) {
            this.index = this.indexes[0];
            return;
        }

        for (let i = this.offsetTops.length; i > 0; i--) {
            if (this.content.scrollTop + threshold >= this.offsetTops[i]) {
                this.index = this.indexes[i];
                this.ref.detectChanges();
                return;
            }
        }
    }

    createModal() {
        clearTimeout(this.timeout);
        this.showModal = true;
        this.timeout = setTimeout(() => {
            this.showModal = false;
            this.ref.detectChanges();
        }, 800)
    }
}
