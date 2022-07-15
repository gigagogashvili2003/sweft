import UserCard from "library/user_card/UserCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "store/UserSlice";
// custom hook which returns usecard component.
// I did it cause I need same component more than once.

const useGetCard = (data) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToProfile = (user) => {
    const { prefix, name, lastName, id } = user;

    navigate(`/users/user/${id}`, { replace: false });
    dispatch(userActions.userSave({ prefix, name, lastName, id }));
    window.scrollTo({ top: 0, left: 0 });
  };

  return data?.map((user) => (
    <UserCard
      onClickHandler={navigateToProfile.bind(null, user)}
      key={Math.random()}
      user_image={`${user.imageUrl}?v=${user.id}`}
      prefix={user.prefix}
      name={user.name}
      lastName={user.lastName}
      user_title={user.title}
    />
  ));
};

export default useGetCard;
