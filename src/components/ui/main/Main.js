import React, { useEffect } from "react";
import useGetRequest from "hooks/useGetRequest";
import { MainContainer, UsersContainer } from "./MainStyled";
import { USERS_BASE_URL } from "config/globals";

import useGetCard from "hooks/useGetCard";
import Loader from "components/shared/Loader";
import useInfiniteScroll from "hooks/useInfiniteScroll";

const Main = () => {
  const {
    sendRequest: getUsersData,
    isLoading: usersIsLoading,
    error: usersError,
    data: usersData,
    setData: setUsersData,
  } = useGetRequest();

  // Custom useinfinitescroll component, it calls getMoreData if im in the bottom of the page,
  // and also if next page exists. so if i'm on the 200'th page, api returns next page as null,
  // and it just stops the process, cause there is no more page left.
  const setIsGettingData = useInfiniteScroll(
    getMoreData,
    usersData?.pagination.nextPage || 1
  )[1];

  // This function happens when im on the bbottom of the screen
  function getMoreData() {
    getUsersData(
      `${USERS_BASE_URL}${usersData?.pagination.nextPage || 1}/20`,
      (res) => {
        setUsersData({
          pagination: res.data.pagination,
          list: [...usersData?.list, ...res.data.list],
        });
        setIsGettingData(false);
      }
    );
  }

  // only happens once.
  useEffect(() => {
    getUsersData(`${USERS_BASE_URL}1/20`);
  }, []);

  return (
    <MainContainer className="p_block_25px">
      <UsersContainer className="flex_justify_center">
        {useGetCard(usersData?.list)}
      </UsersContainer>
      {usersIsLoading && <Loader />}
    </MainContainer>
  );
};

export default Main;
