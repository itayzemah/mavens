import { SignPosition } from '../../Pages/Game';
import * as S from './style';

export function Sign({ value, gamePosition }: { value: SignPosition; gamePosition: SignPosition | null }) {
  return <S.SignContainer style={{ visibility: value === gamePosition ? 'visible' : 'hidden' }}>{value}</S.SignContainer>;
}
