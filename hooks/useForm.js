import { useEffect, useState } from "react";
export default function useForm(initital = {}) {
  const [inputs, setInputs] = useState(initital);
  function handleChange(e) {
    let { name, value, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "checkbox") {
      value = !JSON.parse(value);
    }

    if (type === "file") {
      [value] = e.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  function updateInputs(values) {
    setInputs({
      ...inputs,
      ...values,
    });
  }
  function clearForm(customBlankState) {
    let blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ""]));
    blankState = {
      ...blankState,
      ...customBlankState,
    };
    updateInputs(blankState);
  }
  return {
    inputs,
    handleChange,
    updateInputs,
    clearForm,
  };
}
