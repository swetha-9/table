import { createFeatureSelector, createSelector } from '@ngrx/store';
import{blogliststate} from '../reducer/bloglist.reducer';
export const getbloglistState = createFeatureSelector<blogliststate>('bloglist');
export const getbloglists = createSelector(
    getbloglistState,
    (state: blogliststate) => state.list
  );
  export const getbloglistsLoading = createSelector(
    getbloglistState,
    (state: blogliststate) => state.loading
  );
  export const getbloglistsLoadingerror = createSelector(
    getbloglistState,
    (state: blogliststate) => state.error
  );