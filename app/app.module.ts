import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from "./app.component";
import {routing} from "./routes";
import {HeaderComponent} from "./header.component";
import {HeaderInfoComponent} from "./header-info.component";
import {SideMenuComponent} from "./side-menu.component";
import {MainComponent} from "./main-content.component";
import {AddNewComponent} from "./add-new.component";

@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        HeaderInfoComponent,
        SideMenuComponent,
        AddNewComponent,
        MainComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }