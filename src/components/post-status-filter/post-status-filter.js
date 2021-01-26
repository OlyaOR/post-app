import React, {Component} from 'react';
// import { Button } from 'reactstrap'; // используем стили для книпки из bootstrap

// const PostStatus = () => {
//     return (
//         <div className="btn-group">
//             <Button color='info'>Все</Button>
//             <button type="button" className='btn btn-outline-secondary'>Понравилось</button>
//         </div>
//     )
// }
// export default PostStatus;

export default class PostStatus extends Component {
    constructor(props) {
       super(props);
       this.buttons = [
           {name: 'all', label: 'Все'},
           {name: 'like', label: 'Понравилось'}
       ];
    }
   render() {

       const buttons = this.buttons.map(({name, label}) => {
           const {filter, onFilterSelect} = this.props;
           const active = filter === name;
           const clazz = active ? 'btn-info' : 'btn-outline-secondary'
           return (
               <button type='button'
                    className={`btn ${clazz}`}
                   key={name}
                   onClick={() => onFilterSelect(name)}>
                   {label}</button>
           )
       });

       return (
           <div className="btn-group">
               {buttons}
           </div>
       )
   }
}