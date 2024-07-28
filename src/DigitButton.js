import { ACTIONS } from "./App";
export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.TYPE_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
