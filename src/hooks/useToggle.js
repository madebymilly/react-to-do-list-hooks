import { useState } from "react";

function useToggle(initVal = true) {

  const [value, setValue] = useState(initVal);

  const toggle = () => {
    setValue(!value);
  } 

  return [value, toggle];

}

export default useToggle;