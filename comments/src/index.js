import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { faker } from '@faker-js/faker'
import CommentDetail from './CommentDetail';

const App = () => { 
    return( 
        <div className='ui container comments'> 
            <CommentDetail author='Steven'/>
            <CommentDetail author='Emma'/>
            <CommentDetail author='Adam' />
        </div> 
    ); 
}; 

ReactDOM.render(<App />, document.querySelector('#root'))