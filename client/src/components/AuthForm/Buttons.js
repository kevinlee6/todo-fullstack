import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { hideModal } from "../../redux/actions";
import { COMMANDS } from "../../constants";
import { urlFriendly } from "../../helper";
import { Form, Button } from "antd";
import styled from "styled-components";

const { SIGN_IN } = COMMANDS;

const WideButton = styled(Button)`
  width: 100%;
`;

const FormItem = styled(Form.Item)`
  text-align: center;
`;

const Buttons = ({ command, visible, hideModal }) => {
  const [first, second] =
    command === SIGN_IN ? ["Sign In", "Register"] : ["Register", "Sign In"];
  const closeModal = visible ? hideModal : null;
  return (
    <FormItem>
      <WideButton
        htmlType="submit"
        type="primary"
        form={(visible ? "modal_" : "") + "auth_form"}
      >
        {first}
      </WideButton>
      <p>
        or{" "}
        <Link onClick={closeModal} to={`/${urlFriendly(second)}`}>
          {second}
        </Link>
      </p>
    </FormItem>
  );
};

const mapStateToProps = state => {
  const { modal } = state;
  const { visible } = modal;
  return { visible };
};

export default connect(
  mapStateToProps,
  { hideModal }
)(Buttons);
