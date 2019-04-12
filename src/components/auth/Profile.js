import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';

const Profile = props => {
  const { profile, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (profile) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Username: {profile.username}</span>
            <span className="card-title">Email: {auth.email}</span>
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Reset Password</button>
            {/* <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div> */}
          </div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {profile.username}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  const id = ownProps.match.params.id;
  const profiles = state.firestore.data.users;
  const profile = profiles ? profiles[id] : null;
  return {
    profile: profile,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'users' }])
)(Profile);
