import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomattributedirectiveComponent } from './customattributedirective.component';

describe('CustomattributedirectiveComponent', () => {
  let component: CustomattributedirectiveComponent;
  let fixture: ComponentFixture<CustomattributedirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomattributedirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomattributedirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
