import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomponent1Component } from './mycomponent1.component';

describe('Mycomponent1Component', () => {
  let component: Mycomponent1Component;
  let fixture: ComponentFixture<Mycomponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mycomponent1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mycomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
