import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateNgSwitchComponent } from './ng-template-ng-switch.component';

describe('NgTemplateNgSwitchComponent', () => {
  let component: NgTemplateNgSwitchComponent;
  let fixture: ComponentFixture<NgTemplateNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemplateNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
