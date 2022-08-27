import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { faker } from '@faker-js/faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => { 
    return( 
        <div className='ui container comments'> 

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
                
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author='Steven' 
                    timeAgo='Today at 4:08PM' 
                    commentText='Hi there' 
                    avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author='Emma' 
                    timeAgo='Today at 3:08PM'
                    commentText='bye there' 
                    avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
            
            
            <ApprovalCard>
                <CommentDetail 
                    author='Adam' 
                    timeAgo='Today at 1:08PM' 
                    commentText='Chicken' 
                    avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
        </div> 
    ); 
}; 

ReactDOM.render(<App />, document.querySelector('#root'))