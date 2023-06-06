import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #e9f4f8;
  height: 100vh;
`;

export const GameDirectory = styled.h1`
  display: flex;
  justify-content: center;
`;

export const GameListContainer = styled.div``;

export const GameList = styled.ul`
  display: flex;
  /* 목표한 크기를 넘어갈시 아래로 넘어가게끔 */
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const GameItem = styled.li`
  width: 19.9%;
  list-style: none;
  /* margin: 20px; */
`;
