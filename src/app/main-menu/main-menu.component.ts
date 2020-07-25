import { Component, OnInit } from '@angular/core';
import { IBrightnessSetting } from './brightness-setting/brightness-setting';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  brightnessSettings: IBrightnessSetting[];

  constructor() { }

  ngOnInit(): void {
    this.brightnessSettings = [
      {
        brightness: 255,
        character: "░"
      },
      {
        brightness: 150,
        character: "▒"
      }, 
      {
        brightness: 50,
        character: "▓"
      }];
  }

  addBrightnessControl() {
    this.brightnessSettings.push({
      brightness: 255,
      character: "░"
    });
  }
}
