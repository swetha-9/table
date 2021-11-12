import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslateFakeLoader,TranslateLoader,TranslateModule,TranslateService } from '@ngx-translate/core';
import { TopNavigationComponent } from './top-navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[
        RouterTestingModule ,
       
      TranslateModule.forRoot({
                  loader: {
                    provide: TranslateLoader,
                    useClass: TranslateFakeLoader
                  }
                })],
      declarations: [ TopNavigationComponent ],
      providers: [TranslateService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Top Navigation component is working', () => {
    expect(component).toBeTruthy();
  });
  
});
