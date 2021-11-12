import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadBlogListAction, bloglistTypes, LoadBlogListSuccessAction,LoadBlogListFailureAction} from '../action/bloglist.action'
import { of } from 'rxjs';
import { BlogService } from 'src/app/service/blog.service';


@Injectable()
export class BlogEffects {
  
  @Effect() loadblog$ = this.actions$//Observable of action
    .pipe(
      ofType<LoadBlogListAction>(bloglistTypes.LOAD_BLOG_LIST),//filtering of action from the observable action.With return type
      mergeMap(
        () => this.blogservice.getBlogList()
          .pipe(
            map(data => {
              return new LoadBlogListSuccessAction(data)
            }),
            catchError(error => of(new LoadBlogListFailureAction(error)))
          )
      ),
  )
 
 
  constructor(
    private actions$: Actions,
    private blogservice: BlogService
  ) { }

}