import React from "react";
import { UserProfileContainer } from "./UserProfileStyled";

const UserProfile = ({ user }) => {
  const { imageUrl, name, prefix, lastName, title } = user || {};

  const infoColumns = [
    { text: "Email:", key: "email" },
    { text: "Ip Address:", key: "ip" },
    { text: "Job Area:", key: "jobArea" },
    { text: "Job Type:", key: "jobType" },
  ];

  const addressColumns = [
    { text: "City:", key: "city" },
    { text: "Country:", key: "country" },
    { text: "State:", key: "state" },
    { text: "Street Address:", key: "streetAddress" },
    { text: "ZIP:", key: "zipCode" },
  ];

  return (
    <UserProfileContainer>
      <div className="header_image_block">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="header_info_block">
        <fieldset>
          <legend>Info</legend>

          <div className="info">
            <div className="titles">
              <div className="fullName">
                <strong>
                  <span>{prefix}</span>
                  <span>{name}</span>
                  <span>{lastName}</span>
                </strong>
              </div>
              <div className="job">
                <i>{title}</i>
              </div>
            </div>
            <div className="conf_info">
              {infoColumns?.map((column) => (
                <div className="conf_single_info" key={column.text}>
                  <u>{column.text}</u>
                  <span>{user && user[column.key]}</span>
                </div>
              ))}
            </div>
          </div>
        </fieldset>
      </div>
      <div className="header_address_block">
        <fieldset>
          <legend>Address</legend>
          <div className="company">
            <strong>
              <span>{user?.company?.name}</span>
              <span>{user?.company?.suffix}</span>
            </strong>
          </div>
          <div className="conf_info">
            {addressColumns?.map((column) => (
              <div className="conf_single_info" key={column.text}>
                <u>{column.text}</u>
                <span>{user && user?.address[column.key]}</span>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </UserProfileContainer>
  );
};

export default UserProfile;
