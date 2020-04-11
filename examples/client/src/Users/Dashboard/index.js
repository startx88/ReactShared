import Container from "./Container";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllPosts, selectAllPost } from "ReactShared";

/**********
 * Connect redux
 **********************/
const mapStateToProps = createStructuredSelector({
  allposts: selectAllPost
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts())
});
export default connect(mapStateToProps, mapDispatchToProps)(Container);
