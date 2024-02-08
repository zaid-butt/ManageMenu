import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    // Add other Angular Material modules here
  ],
  providers: [],
  bootstrap: []
})


export class AppModule { }
