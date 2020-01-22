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
                    imageUrl:'',
                    id:1,
                },{
                    title: 'Mens',
                    imageUrl:'',
                    id:2,
               },{
                    title: 'Mens',
                    imageUrl:'',
                    id:3,
                },{
                    title: 'Mens',
                    imageUrl:'',
                    id:4,
                },{
                    title: 'Mens',
                    imageUrl:'',
                    id:5,
                }               
             ]            
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl,id})=>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} />
                ))}
            </div>
        )
    }


}
export default Directory;