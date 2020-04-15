import React from 'react';
import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => (

<div className='preview-collection'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div class='preview'>
    {items.map((item)=>(
        <div key={item.id}>{item.name}</div>
    ))}
    </div>    
  </div>

);

export default PreviewCollection;