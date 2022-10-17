import React, {useState} from 'react';
import {Toolbar} from './Toolbar';
import {ProjectList} from './ProjectList';
import list from './Data/list';

function Portfolio() {
  const [selected, setSelected] = useState('All');

  const handler = (e) => {
    e.preventDefault();
    let value = e.target.textContent;
    setSelected((prevValue) => value)
  };

  const newList = list.filter((item) => {return item.category === selected})
  return (
      <>
        <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            onClick={handler}/>
        {selected === 'All' ? <ProjectList projects={list}/> : <ProjectList projects={newList}/>}
      </>
  );
}

export default Portfolio;
