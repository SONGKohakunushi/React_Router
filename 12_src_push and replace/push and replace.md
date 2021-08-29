## push and replace
#### How route works: It is an operation on the browser's history.
* .push is a stack-pressing operation, .replace is a replacement of the current stack
* The default route jump is in .push mode, which leaves a history record for each route jump
        
#### replace modo    replace ={true}   exact match
<Link replace={true} to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

#### Message          
#### If all route links are enabled in replace mode   Click again and no trace will be left 
<Link replace to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>