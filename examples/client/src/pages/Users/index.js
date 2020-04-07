import Container from "./Container";
import { connect } from "react-redux";
import { getUsers, getUser } from "ReactShared";

// implement redux

const mapStateToProps = state => ({
  loading: state.user.loading,
  users: state.user.users,
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getUser: id => dispatch(getUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
