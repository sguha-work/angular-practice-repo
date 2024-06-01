import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeshomeComponent } from './pipeshome.component';

describe('PipeshomeComponent', () => {
  let component: PipeshomeComponent;
  let fixture: ComponentFixture<PipeshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
