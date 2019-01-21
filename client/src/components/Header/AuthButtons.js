import React from "react";
import { Button } from "antd";

const ButtonGroup = Button.Group;

const AuthButtons = () => {
  return (
    <ButtonGroup className="AuthButtons">
      <Button>Log In</Button>
      <Button>Register</Button>
    </ButtonGroup>
  );
};

export default AuthButtons;
