import Container from "./Container";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { userSelector } from "ReactShared";

// mapStateToProps
const mapStateToProps = createStructuredSelector({
  userinfo: userSelector
});
export default connect(mapStateToProps)(Container);
