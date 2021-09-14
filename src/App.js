import React from 'react'
import { Row } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import AdminUi from './components/AdminUi'

function App() {
	return (
		<div className='admin-wrp'>
			<Row justify='center' align='middle'>
				<AdminUi />
			</Row>
		</div>
	)
}

export default App
