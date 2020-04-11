import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { userSelector } from "ReactShared";

const useAccess = props => {
  const auth = useSelector(
    createStructuredSelector({
      user: userSelector
    })
  );

  return auth;
};
export default useAccess;
