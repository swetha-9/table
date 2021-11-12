import { bloglistTypes, bloglistAction } from "../action/bloglist.action";
import {bloglist } from '../blogstate';

export interface blogliststate {
    list: bloglist[],
    loading: boolean,
    error: Error
  }
  
  export const initialState: blogliststate = {
    list: [],
    loading: false,
    error: undefined
  };
  
  export function bloglistReducer(state: blogliststate = initialState, action: bloglistAction) {
    switch (action.type) {
      case bloglistTypes.LOAD_BLOG_LIST:
        return {
          ...state,
          loading: true
        }
      case bloglistTypes.LOAD_BLOG_LIST_SUCCESS:
        return {
          ...state,
          list: action.payload,
          loading: false
        }
      
      case bloglistTypes.LOAD_BLOG_LIST_FAILURE: 
        return {
          ...state,
          error: action.payload,
          loading: false
        }
        default:
      return state;
    }
}