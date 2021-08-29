## Pass params parameters to the route component
* If you click on the link under Message Message001 Message002 Message003 the content will appear
* Message this tab, inside the display area appears another navigation area, and display area
* Displayed is the Message details information so named Detail

### Message
        //Want the Message list to be dynamically generated
        state = {
            messageArr:[
                {id:'01', title:'message001'},
                {id:'02', title:'message002'},
                {id:'03', title:'message003'}
            ]
        }
        const {messageArr} = this.state

		return (
			<div>
				<ul>
					{   
						messageArr.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									{/* pass params parameter to route component
                                        use ``  path /${msgObj.id}/${msgObj.title}*/}
									<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* receive params parameter */}
				<Route path="/home/message/detail/:id/:title" component={Detail}/>
			</div>
        
### Detail
        console.log(this.props);   // F12 - parameter - match
		const {id,title} = this.props.match.params

    	//the id is used to find the corresponding content
        //find() get a Obj
        const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		})

  1. params
	* route link：<Link to='/demo/test/tom/18'}>详情</Link>
	* register route：<Route path="/demo/test/:name/:age" component={Test}/>
	* receive parameters：this.props.match.params