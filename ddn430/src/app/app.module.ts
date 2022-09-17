import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';







@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, RouterModule, HttpClientModule, BrowserAnimationsModule, MatToolbarModule, MatTableModule, MatTabsModule
    , MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
