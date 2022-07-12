import UserCard from "library/user_card/UserCard";

export const getUserCard = (data, navigate) => {
  const navigateToProfile = (user, e) => {
    navigate(`/users/user/${user.id}`, { replace: false });
  };

  return data?.map((user) => (
    <UserCard
      onClickHandler={navigateToProfile.bind(null, user)}
      key={user.id}
      user_image={`${user.imageUrl}/v=${user.id}`}
      prefix={user.prefix}
      name={user.name}
      lastName={user.lastName}
      user_title={user.title}
    />
  ));
};
