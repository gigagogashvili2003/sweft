import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 278px;
  width: 100%;
  cursor: pointer;

  border: 1px solid black;
  .image {
    img {
      width: 100%;
    }
  }
  .titles_content {
    padding: 8px;

    .fullName {
      strong {
        display: flex;
        align-items: center;
        column-gap: 5px;
        font-size: 16px;
        line-height: 28px;
      }
    }
  }
`;
