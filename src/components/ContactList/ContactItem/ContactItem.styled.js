import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;

  button {
    height: 35px;
    border: none;
    border-radius: 6px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  button:is(:hover, :focus) {
    background-color: #ff8585;
  }
`;