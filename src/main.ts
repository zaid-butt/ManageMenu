import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), provideAnimationsAsync(),
    
  ]
}).catch((err) => console.error(err));
