import React, { useEffect } from "react";
import useGetRequest from "hooks/useGetRequest";
import { MainContainer, UsersContainer } from "./MainStyled";
import { USERS_BASE_URL } from "config/globals";

import { useNavigate } from "react-router-dom";
import { getUserCard } from "utils/helper";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { userActions } from "store/UserSlice";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    sendRequest: getUsersData,
    isLoading: usersIsLoading,
    error: usersError,
    data: usersData,
  } = useGetRequest();

  useEffect(() => {
    getUsersData(`${USERS_BASE_URL}1/100`);
  }, []);

  const saveUserHandler = (user) => {
    const { prefix, name, lastName } = user;
    dispatch(userActions.userSave({ prefix, name, lastName }));
  };

  if (usersError) {
    return <p>{usersError.message || "Something Went Wrong!"} </p>;
  }

  if (usersIsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <MainContainer className="p_block_25px">
      <UsersContainer className="flex_justify_center">
        {getUserCard(usersData?.list, navigate, saveUserHandler)}
      </UsersContainer>
    </MainContainer>
  );
};

export default Main;
