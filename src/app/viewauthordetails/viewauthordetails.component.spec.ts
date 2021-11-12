import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableViewComponent } from '../table-view/table-view.component';
import { ViewauthordetailsComponent } from './viewauthordetails.component';

describe('ViewauthordetailsComponent', () => {
  let component: ViewauthordetailsComponent;
  let fixture: ComponentFixture<ViewauthordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[ RouterTestingModule ],
      declarations: [ ViewauthordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewauthordetailsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(ViewauthordetailsComponent).toBeTruthy();
  });
});
