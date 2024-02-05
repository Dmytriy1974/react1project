import { connect } from 'react-redux';
import { addPostActionCreator, updatePostChangeActionCreator } from '../../../redax/profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPosts: () => { dispatch(addPostActionCreator()) },
    updatePostChange: (text) => {
      let action = updatePostChangeActionCreator(text)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer