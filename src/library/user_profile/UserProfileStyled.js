import styled from "styled-components";

export const UserProfileContainer = styled.div`
  width: 100%;

  fieldset,
  legend {
    margin: 0;
    padding: 0;
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
    padding: 10px;

    fieldset {
      padding: 10px;

      .info {
        .titles {
          margin-bottom: 25px;

          .fullName {
            strong {
              font-size: 16px;
              line-height: 25px;
              column-gap: 5px;
            }
          }
        }
      }
    }
  }

  .header_address_block {
    max-width: 350px;
    width: 100%;
    padding: 10px;

    fieldset {
      padding: 10px;

      .company {
        strong {
          font-size: 16px;
          line-height: 25px;
          column-gap: 7px;
        }
      }
    }
  }

  .conf_info {
    row-gap: 7px;
    .conf_single_info {
      column-gap: 5px;
    }
  }
`;
