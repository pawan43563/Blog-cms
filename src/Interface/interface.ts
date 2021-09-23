import { Moment } from "moment";


export interface blogInterface{
    uid:string,
    author:[
        {
            [key:string]:string;
        }
    ],
    blogimage:{
        [key:string]:string;
    },
    title:string,
    created_at:string,
    blogcontent:string,
    relatedlinks:[
        {
            linkinfo:{
                reflink:[
                    {
                        uid:string
                    }
                ],
                linktitle:string
            },
            
        }
        
    ]
}



export interface BlogProps{
    data:object
}
