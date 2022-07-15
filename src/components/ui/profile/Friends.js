import React from "react";
import { FriendsContainer } from "./ProfileStyled";

import useGetCard from "hooks/useGetCard";

const Friends = ({ friends }) => {
  return (
    <FriendsContainer className="flex_justify_center p_block_25px">
      {useGetCard(friends?.list)}
    </FriendsContainer>
  );
};

export default Friends;
