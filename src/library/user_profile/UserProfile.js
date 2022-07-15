import React from "react";
import { UserProfileContainer } from "./UserProfileStyled";

const UserProfile = ({ user }) => {
  const { imageUrl, name, prefix, lastName, title, id } = user || {};

  // Array of objects which holds exact title, and key.
  // It's cause to dont repeat similar code a lot.
  const infoColumns = [
    { text: "Email:", key: "email" },
    { text: "Ip Address:", key: "ip" },
    { text: "Job Area:", key: "jobArea" },
    { text: "Job Type:", key: "jobType" },
  ];

  // Same as above.
  const addressColumns = [
    { text: "City:", key: "city" },
    { text: "Country:", key: "country" },
    { text: "State:", key: "state" },
    { text: "Street Address:", key: "streetAddress" },
    { text: "ZIP:", key: "zipCode" },
  ];

  return (
    <UserProfileContainer className="flex_center">
      <div className="header_image_block">
        <img src={`${imageUrl}?v=${id}`} alt="" />
      </div>
      <div className="header_info_block p_10px">
        <fieldset>
          <legend>Info</legend>

          <div className="info">
            <div className="titles">
              <div className="fullName">
                <strong className="flex_align_center">
                  <span>{prefix}</span>
                  <span>{name}</span>
                  <span>{lastName}</span>
                </strong>
              </div>
              <div className="job">
                <i>{title}</i>
              </div>
            </div>
            <div className="conf_info flex_column">
              {infoColumns?.map((column) => (
                <div
                  className="conf_single_info flex_align_center"
                  key={column.text}
                >
                  <u>{column.text}</u>
                  <span>{user && user[column.key]}</span>
                </div>
              ))}
            </div>
          </div>
        </fieldset>
      </div>
      <div className="header_address_block p_10px">
        <fieldset>
          <legend>Address</legend>
          <div className="company">
            <strong className="flex_align_center ">
              <span>{user?.company?.name}</span>
              <span>{user?.company?.suffix}</span>
            </strong>
          </div>
          <div className="conf_info flex_column">
            {addressColumns?.map((column) => (
              <div
                className="conf_single_info flex_align_center"
                key={column.text}
              >
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
