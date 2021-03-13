import {React, useState} from "react";

const useInput = (value) => {
    const [input, setInput] = useState(value);

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    return [input, onChangeInput];
};

export default useInput;