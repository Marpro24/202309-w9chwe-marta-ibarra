import styled from "styled-components";

const UserCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: solid;
  border-radius: 30px;
  border-color: #fff;
  background-color: #e99441;

  .user-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .user__name {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .user__image {
    object-fit: cover;
    width: 200px;
    height: auto;
  }

  .user__world {
    padding-bottom: 25px;
  }
`;

export default UserCardStyled;
