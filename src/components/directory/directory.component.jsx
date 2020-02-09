import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{

    constructor(props){
        super(props);
        this.state={
           sections: [
               {
                    title: 'Mens',
                    imageUrl:'https://cdn.shopify.com/s/files/1/2244/7843/products/DRAB_MAJESTY-Modern_Mirror-LS-F_2000x.jpg?v=1565000145',
                    id:1,
                    
                },{
                    title: 'Hats',
                    imageUrl:'https://cdn.shopify.com/s/files/1/2244/7843/products/DRAB_MAJESTY-Modern_Mirror-LS-F_2000x.jpg?v=1565000145',
                    id:2,
                    linkUrl :'hats',
               },{
                    title: 'Mens',
                    imageUrl:'https://cdn.shopify.com/s/files/1/2244/7843/products/DRAB_MAJESTY-Modern_Mirror-LS-F_2000x.jpg?v=1565000145',
                    id:3,
                },{
                    title: 'Mens',
                    imageUrl:'https://cdn.shopify.com/s/files/1/2244/7843/products/DRAB_MAJESTY-Modern_Mirror-LS-F_2000x.jpg?v=1565000145',
                    id:4,
                    size:'large',                    
                },{
                    title: 'Mens',
                    imageUrl:'https://cdn.shopify.com/s/files/1/2244/7843/products/DRAB_MAJESTY-Modern_Mirror-LS-F_2000x.jpg?v=1565000145',
                    id:5,
                    size:'large',
                }               
             ]            
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id,...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }


}
export default Directory;