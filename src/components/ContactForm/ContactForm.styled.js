import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    input {
      height: 30px;
      border-radius: 6px;
      font-size: 18px;
    }
  }

  button {
    height: 35px;
    margin-block: 20px;
    border-radius: 6px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    transition: background-color 0.25s ease;

    &:hover,
    &:focus {
      background-color: #4cba50;
    }
  }
`;
