import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherParentComponentComponent } from './another-parent-component.component';

describe('AnotherParentComponentComponent', () => {
  let component: AnotherParentComponentComponent;
  let fixture: ComponentFixture<AnotherParentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherParentComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnotherParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
