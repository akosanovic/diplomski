
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule, MdInputModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import 'hammerjs';




@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
