import styled from "styled-components";

export const UserProfileContainer = styled.div`
  width: 100%;

  & fieldset,
  & legend {
    margin: 0;
    padding: 0;
  }

  & fieldset {
    padding: 10px;
  }

  .header_image_block {
    max-width: 266px;
    img {
      width: 100%;
    }
  }

  .header_info_block {
    max-width: 650px;
    width: 100%;

    fieldset {
      .info {
        .titles {
          margin-bottom: 25px;
        }
      }
    }
  }

  .header_address_block {
    max-width: 350px;
    width: 100%;
  }

  & strong {
    font-size: 16px;
    line-height: 25px;
    column-gap: 7px;
  }

  .conf_info {
    row-gap: 7px;
    .conf_single_info {
      column-gap: 5px;
    }
  }
`;
