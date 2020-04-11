import Container from "./Container";
import { connect } from "react-redux";
import { getPost, getUserPosts, selectPost } from "ReactShared";
import { createStructuredSelector } from "reselect";

// Redux Connecter
const mapStateToProps = createStructuredSelector({ postinfo: selectPost });

const mapDispatchToProps = dispatch => ({
  getPost: postId => dispatch(getPost(postId)),
  getUserPosts: () => dispatch(getUserPosts())
});
export default connect(mapStateToProps, mapDispatchToProps)(Container);
