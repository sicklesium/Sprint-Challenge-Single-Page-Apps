import React, { useState } from "react";


function SearchForm(props) {

  const [result, setResult] = useState();

  const handleChanges = event => {
    setResult(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();


    const filter = props.character.filter(character => {
      return character.name.toLowerCase().indexOf(result) !== -1 || character.status.toLowerCase().indexOf(result) !== -1 || character.species.toLowerCase().indexOf(result) !== -1 || character.gender.toLowerCase().indexOf(result) !== -1;
    });

    props.searching(filter)
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type='text'
          name='character'
          id='character'
          placeholder='Hit Enter to Search...'
        />
      </form>
    </section>
  );
}

export default SearchForm;