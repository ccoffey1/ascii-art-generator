import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightnessSettingComponent } from './brightness-setting.component';

describe('BrightnessSettingComponent', () => {
  let component: BrightnessSettingComponent;
  let fixture: ComponentFixture<BrightnessSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrightnessSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrightnessSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
