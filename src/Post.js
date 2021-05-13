import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core'


function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
           <div className= "post__header">
               <Avatar />
               <div className="post_info">
                   <h2> {name}</h2>
                   <p>{description}</p>
               </div>
           </div>
           <div className="post__body">
               <p> Message Goes Here</p>
           </div> 
        </div>
    )
}

export default Post
 