import PropTypes from "prop-types"; // Importar PropTypes desde la biblioteca 'prop-types'
import "font-awesome/css/font-awesome.min.css";
import "../styles/GlobalStyles.css";

function TogglePassword({ passwordShown, togglePassword }) {
  return (
    <button type="button" className="password-toggle" onClick={togglePassword}>
      <i className={`fa ${passwordShown ? "fa-eye" : "fa-eye-slash"}`} />
    </button>
  );
}

TogglePassword.propTypes = {
  passwordShown: PropTypes.bool.isRequired,
  togglePassword: PropTypes.func.isRequired,
};

export default TogglePassword;
