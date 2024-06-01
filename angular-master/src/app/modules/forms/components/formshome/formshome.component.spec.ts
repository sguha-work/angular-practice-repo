import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormshomeComponent } from './formshome.component';

describe('FormshomeComponent', () => {
  let component: FormshomeComponent;
  let fixture: ComponentFixture<FormshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
