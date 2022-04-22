import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltToggleComponent } from './alt-toggle.component';

describe('AltToggleComponent', () => {
  let component: AltToggleComponent;
  let fixture: ComponentFixture<AltToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
