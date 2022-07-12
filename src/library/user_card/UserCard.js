import React from "react";
import { CardContainer } from "./UserCardStyled";

// Reusable user_card library component.

const UserCard = (props) => {
  const { user_image, prefix, name, lastName, user_title, onClickHandler } =
    props;

  return (
    <CardContainer onClick={onClickHandler}>
      <div className="image">
        <img src={user_image} alt={name} />
      </div>
      <div className="titles_content">
        <div className="fullName">
          <strong className="flex_align_center">
            <span>{prefix}</span>
            <span>{name}</span>
            <span>{lastName}</span>
          </strong>
        </div>
        <div className="title">
          <p>{user_title}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default UserCard;
