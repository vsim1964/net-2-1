import React from 'react';
import PropTypes from 'prop-types';

export const Toolbar = (props) =>  {
  const {filters, onClick} = props;
  return (
      <nav>
        <ul>
          {filters.map((filter) => (
              <li key={filter}>
                <a className="toolbar"  href="/" onClick={onClick}>{filter}</a>
              </li>
          ))}
        </ul>
      </nav>
  )
}

