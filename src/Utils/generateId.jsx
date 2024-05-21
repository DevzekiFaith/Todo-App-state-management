import React from 'react'

let currentId = 0;

const Idgenerator = () => {
  return currentId++;
};

export default Idgenerator;