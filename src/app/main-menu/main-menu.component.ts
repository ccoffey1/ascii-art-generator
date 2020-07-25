import { Component, OnInit } from '@angular/core';
import { BrightnessSettingComponent } from './brightness-setting/brightness-setting.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  brightnessControls: BrightnessSettingComponent[];

  constructor() { }

  ngOnInit(): void {
    this.brightnessControls = [];
  }

  addBrightnessControl() {
    this.brightnessControls.push(new BrightnessSettingComponent());
  }

}
