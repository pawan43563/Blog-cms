import React, { useEffect, useState } from 'react';
import { useRouteMatch,Link } from 'react-router-dom';
import {apicallsingle} from '../../Apicall/apicall';
import styles from './Blogdetails.module.scss'
import moment from 'moment'
import {blogInterface} from '../../Interface/interface'
import Loader from 'react-loader-spinner'

interface MatchParams{
    id:string
}


const Blogdetails:React.FC=()=>{

    let [blogdetails,setblogdetails]=useState<Partial<blogInterface>>({})
    let [loading,setloading]=React.useState<boolean>(false);

    let match=useRouteMatch<MatchParams>()
    let {params }=match;
    useEffect( ()=>{
        const fetchBlog=async(id:string)=>{
            try{
                const data=await apicallsingle(id)
                setblogdetails(data)  
                setloading(true)
            }catch(error){
                console.log(error);
            }  
        }
        fetchBlog(params.id)
    },[params.id])

    
    
    var momentDate=moment(blogdetails.created_at)
    momentDate=momentDate.format("YYYY-MM-DD") as any;
    
    return (
        <>
            {loading ? 
            <div className={styles.BlogDetails} >
                <div className={styles.mainSection}>
                    <h1>{blogdetails.title}</h1>
                    <h3 className="fa fa-user"> 
                        <span>{blogdetails.author?blogdetails.author[0].title:"None"}</span>
                    </h3>
                    <h3 className="fa fa-clock"> 
                        <span>{momentDate}</span>
                    </h3>
                    <img src={blogdetails.blogimage?blogdetails.blogimage.url:""} alt="Blog " />
                    <p>{blogdetails.blogcontent}</p>
                </div>
                <div className={styles.RelatedLinks}>
                    <h3>Related Links</h3>
                {blogdetails.relatedlinks?
                            blogdetails.relatedlinks.map((e,index)=>(
                                <Link to={`/blogs/${e.linkinfo.reflink[0].uid}`} key={index}>
                                    {e.linkinfo.linktitle}
                                </Link>                                   
                            ))           
                            :
                            <h5>None</h5>
                        }
                    
                </div>
            </div>
            :
            <Loader type="ThreeDots" color="black" height="100" width="100" />
            }
        </>
        
    )
}

export default Blogdetails;