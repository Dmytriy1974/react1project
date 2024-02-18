import Header from './Header';
import React from "react";
import { connect } from 'react-redux';
import { getAuthUserData } from "../../redax/auth-reduser";

class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}
const mapStateToProps = (state) => ({
  isLoggin: state.auth.isLoggin,
  login: state.auth.login,
})
export default connect(mapStateToProps, { getAuthUserData })(HeaderComponent)