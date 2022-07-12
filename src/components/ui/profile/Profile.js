import { USER_BASE_URL } from "config/globals";
import useGetRequest from "hooks/useGetRequest";
import UserProfile from "library/user_profile/UserProfile";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Friends from "./Friends";
import { ProfileContainer } from "./ProfileStyled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SavedUsers from "./SavedUsers";

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
  const savedUsers = useSelector((state) => state.user.savedUsers);

  useEffect(() => {
    getUserData(`${USER_BASE_URL}${userId}`);
    getFriendsData(`${USER_BASE_URL}${userId}/friends/1/100`);
  }, [userId]);

  if (friendsError || userError) {
    return <p>Something Went Wrong!</p>;
  }

  return (
    <ProfileContainer className="p_block_25px">
      <UserProfile user={userData} />
      {savedUsers.length > 0 && <SavedUsers savedUsers={savedUsers} />}
      <Friends friends={friendsData} />
    </ProfileContainer>
  );
};

export default Profile;
