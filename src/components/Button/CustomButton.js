import { Button } from '@material-ui/core';

import './CustomButton.css';

function CustomButton(props) {
  return (
    <Button
      className="custom_button"
      endIcon={
        props.icon ? <div className="button_icon_container">{props.icon}</div> : null
      }
    ><span className="button_text">{props.text}</span></Button>
  );
}

export default CustomButton;