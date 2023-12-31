import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownlistComponent } from './dropdownlist.component';

describe('DropdownlistComponent', () => {
  let component: DropdownlistComponent;
  let fixture: ComponentFixture<DropdownlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownlistComponent]
    });
    fixture = TestBed.createComponent(DropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
