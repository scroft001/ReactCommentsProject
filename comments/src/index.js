import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { faker } from '@faker-js/faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => { 
    return( 
        <div className='ui container comments'> 
            <CommentDetail 
                author='Steven' 
                timeAgo='Today at 4:08PM' 
                commentText='Hi there' 
                avatarImage={faker.image.avatar()}
            />
            <CommentDetail 
                author='Emma' 
                timeAgo='Today at 3:08PM'
                commentText='bye there' 
                avatarImage={faker.image.avatar()}
            />
            <CommentDetail 
                author='Adam' 
                timeAgo='Today at 1:08PM' 
                commentText='Chicken' 
                avatarImage={faker.image.avatar()}
            />
            <ApprovalCard />
        </div> 
    ); 
}; 

ReactDOM.render(<App />, document.querySelector('#root'))