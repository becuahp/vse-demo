import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDetailsComponent } from './information-details.component';

describe('InformationDetailsComponent', () => {
  let component: InformationDetailsComponent;
  let fixture: ComponentFixture<InformationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
