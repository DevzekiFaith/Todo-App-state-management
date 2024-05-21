import React from 'react';
import AddTask from '../components/AddTask';
import ListTask from '../components/ListTask';

const Home = () => {
  return (
    <div>
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default Home;
