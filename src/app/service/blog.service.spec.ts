import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from './blog.service';
import { bloglist } from '../store/blogstate';
import { of } from 'rxjs/internal/observable/of';

describe('BlogService', () => {
  let service: BlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [BlogService]
    });
    service = TestBed.get(BlogService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('Service has been working', () => {
    expect(service).toBeTruthy();
  });
  
  it('getBlogList function is returning the value', () => {
     
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
   service.getBlogList().subscribe((res)=>{
    expect(res).toBe(mockResponse);
   });
  const req = httpMock.expectOne('http://localhost:3000/blogs');
  expect(req.request.method).toBe('GET');
  // req.flush(mockResponse);
   });
   it('delete function has been called',function(){
       
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
   const spy=spyOn(service,'deleteItem').and.returnValue(of(mockResponse))
    service.deleteItem(1);
    expect(spy).toHaveBeenCalled();
   });
});
