import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getUserProfile } from './../../redax/profile-reducer'
import { withNavigate } from '../../hoc/withAuthRedirectComponent';
import { compose } from 'redux';

const ProfileContainer = (props) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  // const profile = useSelector((state) => state.profilePage.profile);
  useEffect(() => {
    let fetchUserId = userId ?? 2;
    props.getUserProfile(fetchUserId);
    }, [userId, dispatch]);
  return <Profile profile={props.profile} />;
};



const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default compose (
  connect(mapStateToProps, { getUserProfile }),
  withNavigate
) (ProfileContainer)

