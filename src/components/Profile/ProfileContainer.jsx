import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
import { UserProfileData, setUserProfile } from '../../redax/profile-reduser';
import { useParams } from 'react-router-dom';

const ProfileContainer = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profilePage.profile);

  useEffect(() => {
    let fetchUserId = userId ?? 2;
    UserProfileData (fetchUserId).then ((response) => {
      dispatch(setUserProfile(response.data));
    });
  }, [userId, dispatch]);

  return <Profile profile={profile} />;
};

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {UserProfileData})(ProfileContainer);
