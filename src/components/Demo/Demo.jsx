import PropTypes from "prop-types";
const DemoComponent = ({ children }) => children;

DemoComponent.defaultProps = {
  children: PropTypes.element.isRequired
};
export default DemoComponent;
