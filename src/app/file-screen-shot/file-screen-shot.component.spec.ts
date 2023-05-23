import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileScreenShotComponent } from './file-screen-shot.component';

describe('FileScreenShotComponent', () => {
  let component: FileScreenShotComponent;
  let fixture: ComponentFixture<FileScreenShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileScreenShotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileScreenShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
