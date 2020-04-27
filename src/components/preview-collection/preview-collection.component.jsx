import React from 'react';
import CollectionItem from "../collection-item/collection-item.component.jsx";
import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => (

<div className='preview-collection'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
    {items
    .map(({id,...otherItemProps})=>(
        <CollectionItem key={id} {...otherItemProps}/>
    ))}
    </div>    
  </div>

);

export default PreviewCollection;