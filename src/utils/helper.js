import UserCard from "library/user_card/UserCard";

// helper function which returns usecard component.
// I did it cause I need same component more than once.

export const getUserCard = (data, navigate, saveUserHandler) => {
  const navigateToProfile = (user) => {
    navigate(`/users/user/${user.id}`, { replace: false });

    // Lifting up single user data
    saveUserHandler(user);
  };

  return data?.map((user) => (
    <UserCard
      onClickHandler={navigateToProfile.bind(null, user)}
      key={user.id}
      user_image={`${user.imageUrl}?v=${user.id}`}
      prefix={user.prefix}
      name={user.name}
      lastName={user.lastName}
      user_title={user.title}
    />
  ));
};
