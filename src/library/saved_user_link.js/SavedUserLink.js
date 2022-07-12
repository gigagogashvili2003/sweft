import React from "react";
import { LinkStyled } from "./SavedLinkStyled";

const SavedUserLink = (props) => {
  const { path, title } = props;

  return <LinkStyled to={path}>{title}</LinkStyled>;
};

export default SavedUserLink;
