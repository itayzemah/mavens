export { Game } from './Game';

export enum SignPosition {
  Left = 'L',
  Right = 'R',
}

export const keyToSignPositionMap: Record<string, SignPosition> = {
  a: SignPosition.Left,
  l: SignPosition.Right,
};

export const ErrorType = {
  tooEarly: 'Too Early',
  tooLate: 'Too Late',
  wrongKey: 'Wrong Key',
};
export type ErrorOption = keyof typeof ErrorType;
