import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateNgIfComponent } from './ng-template-ng-if.component';

describe('NgTemplateNgIfComponent', () => {
  let component: NgTemplateNgIfComponent;
  let fixture: ComponentFixture<NgTemplateNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemplateNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
