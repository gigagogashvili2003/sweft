import React from "react";
import { FriendsContainer } from "./ProfileStyled";
import { useNavigate } from "react-router-dom";
import { getUserCard } from "utils/helper";

const Friends = ({ friends }) => {
  const navigate = useNavigate();

  return (
    <FriendsContainer className="flex_justify_center">
      {getUserCard(friends?.list, navigate)}
    </FriendsContainer>
  );
};

export default Friends;
