import { USER_BASE_URL } from "config/globals";
import useGetRequest from "hooks/useGetRequest";
import UserProfile from "library/user_profile/UserProfile";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Friends from "./Friends";
import { ProfileContainer } from "./ProfileStyled";

const Profile = () => {
  const {
    sendRequest: getUserData,
    isLoading: userIsLoading,
    error: userError,
    data: userData,
  } = useGetRequest();

  const {
    sendRequest: getFriendsData,
    isLoading: friendsLoading,
    error: friendsError,
    data: friendsData,
  } = useGetRequest();

  const { userId } = useParams();

  useEffect(() => {
    getUserData(`${USER_BASE_URL}${userId}`);
    getFriendsData(`${USER_BASE_URL}${userId}/friends/1/100`);
  }, [userId]);

  if (friendsError || userError) {
    return <p>Something Went Wrong!</p>;
  }

  if (userIsLoading || friendsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ProfileContainer>
      <UserProfile user={userData} />
      <Friends friends={friendsData} />
    </ProfileContainer>
  );
};

export default Profile;
