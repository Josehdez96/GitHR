import { combineReducers } from 'redux';
import reposDataReducer from './reposDataReducer';
import candidateFormReducer from './candidateFormReducer';

export default combineReducers({ reposDataReducer, candidateFormReducer });
