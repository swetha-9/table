import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule} from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { BlogEffects } from './store/effect/bloglist.effect';
import {bloglistReducer}from "src/app/store/reducer/bloglist.reducer";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { TableViewComponent } from './table-view/table-view.component';
import { HomeComponent } from './home/home.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ViewauthordetailsComponent } from './viewauthordetails/viewauthordetails.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

export  const HttpLoaderFactory =(http:HttpClient)=>{
  return new TranslateHttpLoader(http);
}
 @NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    TableViewComponent,
    HomeComponent,
    DialogboxComponent,
    ViewauthordetailsComponent,
  ],
  exports: [
    MatSortModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule ,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot({
      bloglist: bloglistReducer
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, 
    }),
    EffectsModule.forRoot([BlogEffects]),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory ,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
