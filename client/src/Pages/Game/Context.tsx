import { createContext, PropsWithChildren, useState } from 'react';
import { ErrorOption } from '.';
import { recordScore } from '../../api/game/game';

interface GameContextProps {
  score: number;
  handleSuccess: () => void;
  getErrorPathAndSaveScore: (error: ErrorOption) => Promise<string>;
}

const initialScore = 0;

export const GameContext = createContext<GameContextProps>({
  score: initialScore,
  handleSuccess: () => {},
  getErrorPathAndSaveScore: async () => '/error',
});

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [score, setScore] = useState<number>(initialScore);

  async function getErrorPathAndSaveScore(error: ErrorOption) {
    setScore(0);
    await recordScore({ score });

    return `/error?error-type=${error}`;
  }

  const handleSuccess = () => {
    setScore((current) => current + 1);
  };

  return <GameContext.Provider value={{ score, handleSuccess, getErrorPathAndSaveScore }}>{children}</GameContext.Provider>;
};
