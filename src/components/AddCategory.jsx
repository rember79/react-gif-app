import { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [ inputValue, setInputValue ] = useState("");
  
  const onInputChage = ({ target }) => {
    setInputValue( target.value );
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(inputValue)
    if(inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories])
    setInputValue('')
  };
  
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChage }
      />
    </form>
  );
};

export default AddCategory;
