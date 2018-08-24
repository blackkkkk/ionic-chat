import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CoreModule} from "../common/core.module";
import {NativeService} from "../providers/native.service";
import {Contacts} from "../providers/contacts";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        HttpModule,
        BrowserModule,
        CoreModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios',
            tabsHideOnSubPages: true,
            swipeBackEnabled: true,
            backButtonText: ''
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        NativeService,
        Contacts,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
