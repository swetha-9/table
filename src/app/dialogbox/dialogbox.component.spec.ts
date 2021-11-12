import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox.component';

describe('DialogboxComponent', () => {
    const mockDialogRef = {
    close: jasmine.createSpy('close')}
  let component: DialogboxComponent;
  let fixture: ComponentFixture<DialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ DialogboxComponent ],
      providers: [ {
        provide: MatDialogRef,
        useValue: mockDialogRef
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Dialog component is working', () => {
    expect(component).toBeTruthy();
  });
  it('Dialogbox have accept function', () => {
    expect(component.accept).toBeTruthy();
   });
});
