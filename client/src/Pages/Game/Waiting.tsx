import { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimeout } from '../../hooks';
import { GameContext } from './Context';

export function Waiting() {
  const navigate = useNavigate();
  const { getErrorPathAndSaveScore } = useContext(GameContext);

  useTimeout({ delay: Math.random() * 4000 + 1000, callback: () => navigate('/game') });

  const keyDownHandler = useCallback(async () => {
    const path = await getErrorPathAndSaveScore('tooEarly');
    navigate(path);
  }, [getErrorPathAndSaveScore, navigate]);

  useEffect(() => {
    document.addEventListener('keypress', keyDownHandler);
    return () => {
      document.removeEventListener('keypress', keyDownHandler);
    };
  }, [keyDownHandler]);
  return (
    <div>
      <h1>Get Ready...</h1>
    </div>
  );
}
