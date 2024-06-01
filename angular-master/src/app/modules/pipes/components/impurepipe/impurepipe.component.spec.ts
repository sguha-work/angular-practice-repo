import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurepipeComponent } from './impurepipe.component';

describe('ImpurepipeComponent', () => {
  let component: ImpurepipeComponent;
  let fixture: ComponentFixture<ImpurepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpurepipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpurepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
