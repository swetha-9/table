import { Action } from '@ngrx/store';
import {bloglist} from '../blogstate';
export enum bloglistTypes {
    LOAD_BLOG_LIST = '[BLOGLIST] Load Blog List',
    LOAD_BLOG_LIST_SUCCESS = '[BLOGLIST] Load Blog List Success',
    LOAD_BLOG_LIST_FAILURE = '[BLOGLIST] Load Blog List Failure',
}
export class LoadBlogListAction implements Action {
    readonly type = bloglistTypes.LOAD_BLOG_LIST
  }
  export class LoadBlogListSuccessAction implements Action {
    readonly type = bloglistTypes.LOAD_BLOG_LIST_SUCCESS
  
    constructor(public payload: Array<bloglist>) {}
  
  }
  export class LoadBlogListFailureAction implements Action {
    readonly type = bloglistTypes.LOAD_BLOG_LIST_FAILURE
    
    constructor(public payload: Error) {}
  }
  export type bloglistAction = LoadBlogListAction|LoadBlogListSuccessAction|LoadBlogListFailureAction 