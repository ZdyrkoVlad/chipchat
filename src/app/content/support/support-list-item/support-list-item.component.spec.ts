import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportListItemComponent } from './support-list-item.component';

describe('SupportListItemComponent', () => {
  let component: SupportListItemComponent;
  let fixture: ComponentFixture<SupportListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
