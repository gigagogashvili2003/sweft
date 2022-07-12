import React, { useEffect } from "react";
import useGetRequest from "hooks/useGetRequest";
import { MainContainer, UsersContainer } from "./MainStyled";
import { USERS_BASE_URL } from "config/globals";
import UserCard from "library/user_card/UserCard";
import { useNavigate } from "react-router-dom";
import { getUserCard } from "utils/helper";

const Main = () => {
  const navigate = useNavigate();

  const {
    sendRequest: getUsersData,
    isLoading: usersIsLoading,
    error: usersError,
    data: usersData,
  } = useGetRequest();

  useEffect(() => {
    getUsersData(`${USERS_BASE_URL}1/100`);
  }, []);

  return (
    <MainContainer>
      <UsersContainer>{getUserCard(usersData?.list, navigate)}</UsersContainer>
    </MainContainer>
  );
};

export default Main;
