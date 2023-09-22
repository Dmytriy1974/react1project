import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updatePostChangeActionCreator } from '../../../redax/profile-reduser';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state=props.store.getState()
  return (
    <MyPosts addPosts={() => { props.store.dispatch(addPostActionCreator()) }}
      updadePostChange={() => { props.store.dispatch(updatePostChangeActionCreator(text)) }}
      postsData={state.profilePage.postsData}  
      newPostText={state.profilePage.newPostText} /> )}
export default MyPostsContainer