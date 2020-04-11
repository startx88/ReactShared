import Container from "./Container";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserProfile, getAllProfiles } from "ReactShared";

/**
 * Connect with redux
 */

const mapStateToProps = createStructuredSelector({
  allProfile: selectUserProfile
});

const mapDispatchToProps = dispatch => ({
  getAllProfiles: () => dispatch(getAllProfiles())
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
