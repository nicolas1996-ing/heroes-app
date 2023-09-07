/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuhtContext } from "../auth";

export const PublicRoute = ({ children }) => {
  const { authState } = useContext(AuhtContext);
  return authState.logged ? <Navigate to="/marvel" /> : children;
};
