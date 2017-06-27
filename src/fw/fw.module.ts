import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FwBodyComponent } from 'fw/body/body.component';
import { FwMediaComponent } from "fw/media/media.component";
import { FwControlComponent } from "fw/controls/control.component";

@NgModule({
    declarations: [
        FwBodyComponent,
        FwControlComponent,
        FwMediaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    exports: [
        FwBodyComponent,
        FwControlComponent,
        FwMediaComponent
    ]
})
export class FwModule { }
