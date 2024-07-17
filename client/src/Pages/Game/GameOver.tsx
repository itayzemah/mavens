import { useNavigate } from 'react-router-dom';
import { ErrorOption, ErrorType } from '.';
import { useTimeout } from '../../hooks';
import * as S from './style';

export function GameOver() {
  const error = new URLSearchParams(window.location.search).get('error-type') || 'tooEarly';

  const navigate = useNavigate();

  useTimeout({ delay: 3000, callback: () => navigate('/lobby') });

  return (
    <>
      <S.GameOverTitle>Game Over</S.GameOverTitle>
      <S.LabelWrapper>{ErrorType[error as ErrorOption]}</S.LabelWrapper>
    </>
  );
}
