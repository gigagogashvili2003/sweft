import React from "react";
import { FriendsContainer } from "./ProfileStyled";
import { useNavigate } from "react-router-dom";
import { getUserCard } from "utils/helper";

import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { userActions } from "store/UserSlice";

const Friends = ({ friends }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveUserHandler = (user) => {
    const { prefix, name, lastName, id } = user;
    dispatch(userActions.userSave({ prefix, name, lastName, id }));
  };

  return (
    <FriendsContainer className="flex_justify_center p_block_25px">
      {getUserCard(friends?.list, navigate, saveUserHandler)}
    </FriendsContainer>
  );
};

export default Friends;
