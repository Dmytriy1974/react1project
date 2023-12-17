import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Profile from './Profile';
import { setUserProfile } from '../../redax/profile-reduser';
import { useParams } from 'react-router-dom';

const ProfileContainer = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profilePage.profile);

  useEffect(() => {
    let fetchUserId = userId ?? 2;

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + fetchUserId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  }, [userId, dispatch]);

  return <Profile profile={profile} />;
};

export default connect()(ProfileContainer);
