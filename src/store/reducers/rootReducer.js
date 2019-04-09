import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
// Syncs firestore date with redux state
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
