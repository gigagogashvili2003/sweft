import { USER_BASE_URL } from "config/globals";
import useGetRequest from "hooks/useGetRequest";
import UserProfile from "library/user_profile/UserProfile";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Friends from "./Friends";
import { ProfileContainer } from "./ProfileStyled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SavedUsers from "./SavedUsers";
import Loader from "components/shared/Loader";
import useInfiniteScroll from "hooks/useInfiniteScroll";

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
    setData: setFriendsData,
  } = useGetRequest();

  const { userId } = useParams();
  const savedUsers = useSelector((state) => state.user.savedUsers);

  const setIsGettingData = useInfiniteScroll(
    getMoreFriendsData,
    friendsData?.pagination?.nextPage || 1
  )[1];

  function getMoreFriendsData() {
    getFriendsData(
      `${USER_BASE_URL}${userId}/friends/${
        friendsData?.pagination?.nextPage || 1
      }/20`,
      (res) => {
        setFriendsData({
          pagination: res.data.pagination,
          list: [...friendsData?.list, ...res.data.list],
        });
        setIsGettingData(false);
      }
    );
  }

  useEffect(() => {
    getUserData(`${USER_BASE_URL}${userId}`);
    getFriendsData(`${USER_BASE_URL}${userId}/friends/1/20`);
  }, [userId, getUserData, getFriendsData]);

  return (
    <ProfileContainer className="p_block_25px">
      <UserProfile user={userData} />
      {savedUsers.length > 0 && <SavedUsers savedUsers={savedUsers} />}
      <Friends friends={friendsData} />
      {(friendsLoading || userIsLoading || friendsData?.list.length === 0) && (
        <Loader />
      )}
    </ProfileContainer>
  );
};

export default Profile;
