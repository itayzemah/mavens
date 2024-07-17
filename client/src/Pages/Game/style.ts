import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

export const Board = styled.div`
  flex: 0 0 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  flex: 0 0 20%;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  color: red;
  display: flex;
`;

export const ScoreTitle = styled.h4``;

export const GameOverTitle = styled.h1``;
