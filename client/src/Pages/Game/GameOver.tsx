import { useNavigate } from 'react-router-dom';
import { ErrorType } from '.';
import { useTimeout } from '../../hooks';
import * as S from './style';

export function GameOver() {
  const error = new URLSearchParams(window.location.search).get('error-type') || 'TooEarly';
  const navigate = useNavigate();

  useTimeout({ delay: 3000, callback: () => navigate('/lobby') });

  return (
    <div>
      <h1>Game Over</h1>
      <S.LabelWrapper>{ErrorType[error]}</S.LabelWrapper>
    </div>
  );
}
