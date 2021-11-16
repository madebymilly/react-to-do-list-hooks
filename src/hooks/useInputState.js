import { useState } from "react";

function useInputState(initVal = false) {

  const [value, setValue] = useState(initVal);

  const update = (e) => {
    setValue(e.target.value);
  }

  const reset = () => {
    setValue('');
  }

  return [value, update, reset];
}

export default useInputState;