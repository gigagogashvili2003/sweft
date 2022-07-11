import React from "react";
import { CardContainer } from "./UserCardStyled";

// Reusable user_card library component.

const UserCard = (props) => {
  const { user_image, prefix, name, lastName, user_title } = props;

  return (
    <CardContainer>
      <div className="image">
        <img src={user_image} alt={name} />
      </div>
      <div className="titles_content">
        <div className="fullName">
          <h3>
            <span>{prefix}</span>
            <span>{name}</span>
            <span>{lastName}</span>
          </h3>
        </div>
        <div className="title">
          <p>{user_title}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default UserCard;
