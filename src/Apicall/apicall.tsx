import Contentstack from 'contentstack';



const Stack=Contentstack.Stack(process.env.REACT_APP_API_KEY as string,process.env.REACT_APP_DELIVERY_TOKEN as string,process.env.REACT_APP_ENVIRONMENT_NAME as string)
export const apicall=()=>{
    const Query = Stack
        .ContentType('blogdata')
        .Query()
        .includeReference(['author'])

    return Query 
        .toJSON()
        .find()
        .then(function success(result) {            
            return result[0]
        }, function error(err) {
            return err
        });
       
    
}



export const apicallsingle=(uid:string)=>{
    return Stack
        .ContentType('blogdata')
        .Entry(uid)
        .includeReference(['author'])
        .toJSON()
        .fetch()
        .then(function (result){
            return result
        },function(error){
            return error
        })

}

export const apicallfooter=()=>{
    let arr:Array<object>=[]
    const Query = Stack
        .ContentType('blogfooter')
        .Query()

    return Query 
        .toJSON()
        .find()
        .then(function success(result) {   
            let {footer,copyright}=result[0][0]                  
            arr.push({footer,copyright})   
            return arr[0]
        }, function error(err) {
            return err
        });
}