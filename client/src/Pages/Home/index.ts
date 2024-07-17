export { Home } from './Home';

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement;
}
export interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
