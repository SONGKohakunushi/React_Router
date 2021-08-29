## pass parameter to route component
**state parameter is different from state of component, is a state unique to the route component**

1. params
<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> 

2. search
<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> 

3. state参数 
<Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>


### register route
1. params
<Route path="/home/message/detail/:id/:title" component={Detail}/>

2. search
<Route path="/home/message/detail" component={Detail}/> 

3. state
<Route path="/home/message/detail" component={Detail}/>
        

### receive parameter
1. params
		const {id,title} = this.props.match.params 

2. search
		const {search} = this.props.location
		const {id,title} = qs.parse(search.slice(1))

3. state
		const {id,title} = this.props.location.state || {}  

		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		}) || {}
