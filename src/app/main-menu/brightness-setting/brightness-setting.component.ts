import { Component, OnInit, Input, ViewChild, ElementRef, Optional } from '@angular/core';

@Component({
  selector: 'app-brightness-setting',
  templateUrl: './brightness-setting.component.html',
  styleUrls: ['./brightness-setting.component.css']
})
export class BrightnessSettingComponent implements OnInit {

  @ViewChild('brightnessInput') brightnessInput: ElementRef; 
  @Input() character: string;
  @Input() brightness: number;

  min: number;
  max: number;

  ngOnInit(): void {
    this.brightness = this.brightness ? this.brightness : 255;
    this.character = this.character ? this.character : '░';
    this.min = 0;
    this.max = 255;
  }

  onBrightnessChanged(value: number) {
    let newBrightness = value;

    if (isNaN(value) || value > 255) {
      newBrightness = 255;
    }
    else if (value < 0) {
      newBrightness = 0;
    }
    
    this.brightness = newBrightness;
    this.brightnessInput.nativeElement.value = newBrightness;
  }
}
