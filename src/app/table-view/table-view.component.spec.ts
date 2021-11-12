import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableViewComponent } from './table-view.component';
import {Store,StoreModule} from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BlogService } from 'src/app/service/blog.service';
import { bloglist } from '../store/blogstate';
import { observable,of } from 'rxjs';
import {getMockStore,MockReducerManager,MockState,MockStore,provideMockStore} from '@ngrx/store/testing';
import {initialState,blogliststate} from 'src/app/store/reducer/bloglist.reducer';
import { getbloglists} from 'src/app/store/selector/bloglist.selector';
import { MockAction} from '../mockStore/mockaction';
class StoreMock { 
  select =  jasmine.createSpy().and.returnValue(of(getbloglists)); 
  dispatch = jasmine.createSpy();
}
describe('TableViewComponent', () => {

  let component: TableViewComponent;
  let fixture: ComponentFixture<TableViewComponent>;
  let service: BlogService;
  let store: Store<blogliststate>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),

      ],
      declarations: [TableViewComponent],
      providers: [TranslateService, BlogService,
        {
          provide:Store,
          useClass:StoreMock
        },
        provideMockStore({
          initialState,
          selectors: [
            { selector:getbloglists, value:   [ {
              id:'1',
              author:'swetha',
              title:'BlogList',
              description:'xxxx'
            },
            {
              id:'2',
              author:'Ramesh',
              title:'BlogList',
              description:'xxxx'
            }
          ]
        },
          ],
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(BlogService);
    fixture = TestBed.createComponent(TableViewComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    component.array=[
      {
        id:'1',
        author:'swetha',
        title:'BlogList',
        description:'xxxx'
      },
      {
        id:'2',
        author:'Ramesh',
        title:'BlogList',
        description:'xxxx'
      }
    ];
    component.bloglist$
    fixture.detectChanges();
  });

  it('Iterator is a function', () => {
   var start=0; var end=1
  
    component.array.slice(start, end)
   expect(component.iterator).toBeTruthy();
  })
  it('Update Item function has been called',() =>{
    const mockResponse: bloglist[] =
    [ {
       id:'1',
       author:'swetha',
       title:'BlogList',
       description:'xxxx'
     },
     {
       id:'2',
       author:'Ramesh',
       title:'BlogList',
       description:'xxxx'
     }
   ]

    spyOn(service, 'updateItem').and.returnValue(of(mockResponse)) 
    component.bloglist$.subscribe((blog: bloglist[]) => {
    expect(blog).toEqual(mockResponse);
  });
  }); 
  it('Element defined or not', () => {
    const preElement: HTMLElement = fixture.nativeElement.querySelector('container');
    expect(preElement).toBeDefined();
  });
  describe('no bloglist is available in the store', () => {
    beforeEach(() => {
      const data=[{
        id:'1',
        author:'swetha',
        title:'BlogList',
        description:'xxxx'
      }]
      store.dispatch(new MockAction(data));
      fixture.detectChanges()
    });
    it("Action Dispatch the value",()=>
    {
      expect(MockAction).toBeTruthy(component.bloglist$);
    });

  });
});
