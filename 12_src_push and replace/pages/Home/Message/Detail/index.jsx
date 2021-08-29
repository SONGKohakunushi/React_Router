import React, { Component } from 'react'


const DetailData = [
	{id:'01',content:'hello，China'},
	{id:'02',content:'hello，university'},
	{id:'03',content:'hello，myself'}
]
export default class Detail extends Component {
	render() {
		console.log(this.props);

		const {id,title} = this.props.location.state || {}

		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		}) || {}
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{findResult.content}</li>
			</ul>
		)
	}
}
