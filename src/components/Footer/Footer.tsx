import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss'
import { apicallfooter } from '../../Apicall/apicall';

interface FooterInterface{
    footer:[
        {
            social_links:{
                icon:string,
                link:{
                    title:string,
                    href:string
                }
            }
        }
    ],        
    copyright:{
        copyright:string
    }
}

const Footer:React.FC=()=>{

    const [footerdata,setfooterdata]=useState<Partial<FooterInterface>>({})

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async ()=>{
        try{
            let data=await apicallfooter()
            setfooterdata(data)
            
        }catch(error){
            console.log(error);
        }
    }


    const redirect=(url:any)=>{
        window.location.assign(url)
    }

    return(
        <div className={styles.footer}>
            {
                footerdata?
                <>
                <div className={styles.socialLinks}>
                    {
                        footerdata.footer?.map((e,i)=>(
                            <i className={e.social_links.icon} key={i} onClick={()=>{redirect(e.social_links.link.href)}}></i>
                                                        
                        ))
                        
                    }
                </div>
                <div className={styles.copyright}>
                        <p>{footerdata.copyright?.copyright}</p>
                </div>
                </>
                  :
                <h1>None</h1>
            }
            
        </div>
    )
}

export default Footer;