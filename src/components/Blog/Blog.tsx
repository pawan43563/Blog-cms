import React from 'react'
import styles from './Blog.module.scss'
import { Link } from 'react-router-dom'
import { BlogProps ,blogInterface} from '../../Interface/interface';

const linkStyle = {
    textDecoration: "none",
    border:'2px solid white',
    padding:'8px',
    borderRadius:'20px',
    color:'white',
};

const Blog:React.FC<BlogProps>=({data}:any)=>{
    let  {uid,author,blogimage,title}:blogInterface=data;
    
    return (
        <div className={styles.blogCard} >
            <img src={blogimage["url"]} alt="Blog "></img>
            <div className={styles.blogCardBody}>
                <h2>{title}</h2>
                <h3 className="fa fa-user"> 
                    <span>{author[0]?author[0].title:"None"}</span>
                </h3>
                <Link to={`/blogs/${uid}`}  style={linkStyle}>
                    Read more
                </Link>
            </div>

        </div>
    )

}

export default Blog;