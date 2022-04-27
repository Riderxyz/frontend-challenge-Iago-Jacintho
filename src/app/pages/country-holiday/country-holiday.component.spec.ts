import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHolidayComponent } from './country-holiday.component';

describe('CountryHolidayComponent', () => {
  let component: CountryHolidayComponent;
  let fixture: ComponentFixture<CountryHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
