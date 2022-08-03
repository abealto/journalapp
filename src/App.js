import './App.css';
import React, { useEffect, useState } from 'react';
import AllJournals from './Components/AllJournals';
import API from './UTILS/API';
import './App.css';
import OneJournal from './Components/OneJournal';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [allJournals, setallJournals] = useState([]);
  const [newJournal, setNewJournal] = useState({
    title: '',
    body: '',
  });
  useEffect(() => {
    getAllJournals();
  }, []);

  const getAllJournals = () => {
    API.getAll().then((res) => {
      //console.log(res.data);

      setallJournals(res.data);
    });
  };
  const handleTitleChange = (e) => {
    const { value } = e.target;

    //using spreader to leave body alone and only affect
    //the title. Spreader lays out the key value pairs and
    //tells which one to affect
    setNewJournal({ ...newJournal, title: value });
  };

  const handleBodyChange = (e) => {
    // const value = e.target.value. Whatever the user is typing
    // in the title input box is the value we're assigning
    // to the value veriable.
    // a cleaner way of doing this is written below
    const { value } = e.target;

    //using spreader to leave title alone and only affect
    //the body. Spreader lays out the key value pairs and
    //tells which one to affect
    setNewJournal({ ...newJournal, body: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.createJournal(newJournal).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Routes>
        <Route
          path='/'
          exact
          element={
            <AllJournals
              journalData={allJournals}
              handleTitleChange={handleTitleChange}
              handleBodyChange={handleBodyChange}
              handleSubmit={handleSubmit}
            />
          }
        />

        <Route path='/one-journal/:id' element={<OneJournal />} />
      </Routes>
    </div>
  );
}

export default App;
