import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupportDialogComponent } from './create-support-dialog.component';

describe('CreateSupportDialogComponent', () => {
  let component: CreateSupportDialogComponent;
  let fixture: ComponentFixture<CreateSupportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSupportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSupportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
