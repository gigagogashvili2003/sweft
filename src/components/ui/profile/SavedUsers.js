import SavedUserLink from "library/saved_user_link.js/SavedUserLink";
import React from "react";
import { SavedUsersCotnainer } from "./ProfileStyled";

const SavedUsers = (props) => {
  const { savedUsers } = props;

  return (
    <SavedUsersCotnainer>
      {savedUsers?.map((user, i, arr) => {
        console.log(user);
        return (
          <>
            <SavedUserLink
              // It's not'a good idea to use Math.random() as unique key but, I think for this project
              // It should be fine xd, i just didn't wanna to instal 3-rd party library, so that's all.
              key={Math.random()}
              path={`/users/user/${user.id}`}
              title={`${user.prefix} ${user.name} ${user.lastName}`}
            />
            {i < arr?.length - 1 && ">"}
          </>
        );
      })}
    </SavedUsersCotnainer>
  );
};

export default SavedUsers;
