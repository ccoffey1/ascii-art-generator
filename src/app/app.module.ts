import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrightnessSettingComponent } from './main-menu/brightness-setting/brightness-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    BrightnessSettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
