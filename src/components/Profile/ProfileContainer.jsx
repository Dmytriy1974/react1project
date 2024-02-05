import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserProfile } from './../../redax/profile-reducer'

const ProfileContainer = (props) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profilePage.profile);

  useEffect(() => {
    let fetchUserId = userId ?? 2;
    props.getUserProfile(fetchUserId)
  }, [userId, dispatch]);
  const navigate = useNavigate();
  if (!props.isLoggin) {
    return navigate("/login")
  };

  return <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  isLoggin: state.auth.isLoggin
})

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
