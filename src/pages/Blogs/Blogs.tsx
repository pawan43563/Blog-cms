import React, { useEffect, useState } from 'react';
import Blog from '../../components/Blog/Blog'
import { apicall } from '../../Apicall/apicall';
import styles from './Blogs.module.scss';
import Loader from 'react-loader-spinner';

const Blogs:React.FC=()=>{

    const [blogs,setblog]=useState([])
    let [loading,setloading]=React.useState<boolean>(false);

    useEffect(()=>{
        fetchBlogs()
    },[])

    const fetchBlogs=async()=>{
        try{
            let response=await apicall()
            setblog(response)
            setloading(true)
        }catch(error){
            console.log(error);
        }
    }


    return (
        <div className={styles.blogCard}>
            {
                loading ? 
                blogs.map((blog)=>(
                    <Blog data={blog} key={blog["uid"]} />
                )):
                <Loader type="ThreeDots" color="white" height="100" width="100" />
            }
            
        </div>
    )

}

export default Blogs;