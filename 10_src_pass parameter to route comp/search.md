## pass parameter to route component 
### route link
1. params
```
<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
```
2. search
```
<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
```
${msgObj.id}/${msgObj.title}   ===>   ?id=${msgObj.id}&title=${msgObj.title}

# register route 
1. params
```
<Route path="/home/message/detail/:id/:title" component={Detail}/>
```
2. search
```
<Route path="/home/message/detail" component={Detail}/>
```
path="/home/message/detail/:id/:title"  ===>  path="/home/message/detail" 

        
## Detail
1. params
```
const {id,title} = this.props.match.params 		
```
2. search
```
const {search} = this.props.location
const {id,title} = qs.parse(search.slice(1))
```     
* receive search is "?id=01&title=message1" 
* we want change modo to {id:'id',title:'xx1'}
* urlcoded ===> obj      we can use qs library 
        ```
        import qs from 'querystring'
                let obj = {name:'tom', age:18} ==> name=tom&age=18 
                                         key=value&key=value this modo call urlencoded
                qs.stringify(obj);

                
                let str = 'carName=bmw&price=199'  ==> {carName=bmw,price=199}
                qs.parse(str);
        ```
