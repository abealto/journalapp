import React from 'react';
import CreateJournal from '../CreateJournals';

const AllJournals = ({
  journalData,
  handleSubmit,
  handleTitleChange,
  handleBodyChange,
}) => {
  //console.log(journalData);
  return (
    <div className='container header'>
      <CreateJournal
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleBodyChange={handleBodyChange}
      />
      {journalData.map((journal) => (
        <div key={journal.id} className='one-journal'>
          <h3>{journal.title}</h3>
          <a className='btn' href={'one-journal/${journal.id}'}>
            {''}
            View Journal{''}
          </a>
        </div>
      ))}
    </div>
  );
};

export default AllJournals;
