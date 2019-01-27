import React from "react";
import AuthForm from "../components/AuthForm";
import { COMMANDS } from "../constants";

const { REGISTER } = COMMANDS;

export default () => <AuthForm command={REGISTER} />;
