import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setUserProfile } from '../../redax/profile-reduser';
import {withRouter} from 'react-router-dom'

class ProfileContainer extends  React.Component  {

  componentDidMount() {
let userId=this.props.match.params.userId
if (!userId) {
  userId=2
}
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        this.props.setUserProfile(response.data);
    })
}

  render () {
   return (
    <Profile {...this.props} profile={this.props.profile}/>
   )
  }
  }
  const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        
    }
}

let WithUrlDataContainerComponent = withRouter (ProfileContainer)


export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)