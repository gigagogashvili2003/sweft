import React, { useEffect } from "react";
import useGetRequest from "hooks/useGetRequest";
import { MainContainer, UsersContainer } from "./MainStyled";
import { USERL_BASE_URL } from "config/globals";
import UserCard from "library/user_card/UserCard";

const Main = () => {
  const {
    sendRequest: getUsersData,
    isLoading: usersIsLoading,
    error: usersError,
    data: usersData,
  } = useGetRequest();

  useEffect(() => {
    getUsersData(`${USERL_BASE_URL}1/20`);
  }, []);

  console.log(usersData);

  return (
    <MainContainer>
      <UsersContainer>
        {usersData?.list?.map((user) => (
          <UserCard
            key={user.id}
            user_image={`${user.imageUrl}/v=${user.id}`}
            prefix={user.prefix}
            name={user.name}
            lastName={user.lastName}
            user_title={user.title}
          />
        ))}
      </UsersContainer>
    </MainContainer>
  );
};

export default Main;
