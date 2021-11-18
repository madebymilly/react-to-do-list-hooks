import { useState } from "react";

function useToggleState(initVal = true) {

  const [value, setValue] = useState(initVal);

  const toggle = () => {
    setValue(!value);
  } 

  return [value, toggle];

}

export default useToggleState;