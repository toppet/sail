import "./LogoComponent.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

function LogoComponent() {
  return (
    <div className="logo">
      <div className="logo__icon-wrap">
        <FontAwesomeIcon icon={faFlag} className="logo__icon" />
      </div>
      <p className="logo__text">Segel<span>Team</span></p>
    </div>
  );
}

export default LogoComponent;