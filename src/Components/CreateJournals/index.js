import React from 'react';

const CreateJournal = ({
  handleSubmit,
  handleTitleChange,
  handleBodyChange,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='title'>Title of Journal</label>
        <br />
        <input name='title' onChange={handleTitleChange}></input>
        <br />
        <lable htmlFor='body'>Body of Journal</lable>
        <br />
        <textarea
          rows='20'
          cols='50'
          name='body'
          onChange={handleBodyChange}
        ></textarea>
        <br />
        <button className='btn' type='submit'>
          Add Journal
        </button>
      </form>
    </div>
  );
};

export default CreateJournal;
