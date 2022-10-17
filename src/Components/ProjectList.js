import React from 'react';

export const ProjectList = (props) => {
const {projects} = props;

  return (
      <div className="list">
        {projects.map((item, index) => (
                <img key={index} src={item.img} alt="Images"/>
        ))}
      </div>
  )
}
