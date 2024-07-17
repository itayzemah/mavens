import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorOption, keyToSignPositionMap, SignPosition } from '.';
import { Sign } from '../../Component/Sign';
import { GameContext } from './Context';
import * as S from './style';

type GameProps = {
  timeoutInMS: number;
};

export function Game({ timeoutInMS }: GameProps) {
  const navigate = useNavigate();
  const { score, handleSuccess, getErrorPathAndSaveScore } = useContext(GameContext);
  const [isGameOver, setIsGameOver] = useState(false);
  const [signPosition, setSignPosition] = useState<SignPosition>(SignPosition.Left);

  const handleError = useCallback(
    async (error: ErrorOption) => {
      setIsGameOver(true);

      const path = await getErrorPathAndSaveScore(error);
      navigate(path);
    },
    [navigate, getErrorPathAndSaveScore]
  );

  const selectSideRandomly = useCallback(() => {
    setSignPosition(Math.random() > 0.5 ? SignPosition.Left : SignPosition.Right);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => handleError('tooLate'), timeoutInMS);
    selectSideRandomly();
    return () => {
      clearTimeout(id);
    };
  }, [selectSideRandomly, handleError, timeoutInMS]);

  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      if (!isGameOver && keyToSignPositionMap[event.key] === signPosition) {
        handleSuccess();
        navigate('/lobby');
      } else if (!isGameOver) {
        handleError('wrongKey');
      }
    },
    [signPosition, isGameOver, handleSuccess, navigate, handleError]
  );

  useEffect(() => {
    document.addEventListener('keypress', keyDownHandler);
    return () => {
      document.removeEventListener('keypress', keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <S.GameContainer>
      <S.ScoreTitle>SCORE: {score}</S.ScoreTitle>
      <S.Board>
        <Sign value={SignPosition.Left} gamePosition={signPosition} />
        <Sign value={SignPosition.Right} gamePosition={signPosition} />
      </S.Board>
    </S.GameContainer>
  );
}
