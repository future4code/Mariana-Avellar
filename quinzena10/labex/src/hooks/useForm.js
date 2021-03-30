import React, {useState} from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeInput = (event) => {
        const newValue = event.target.value
        const inputName = event.target.name

        setForm({...form, [inputName]: newValue})
    }

    return [form, onChangeInput]
}
