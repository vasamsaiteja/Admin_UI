import React from 'react'
import './index.css'

// import libraries from antd
import { Input, Space } from 'antd'
import { Row, Col } from 'antd'

const { Search } = Input

function UserSearch(props) {
	return (
		<Row>
			<Col span={24}>
				<Space direction='vertical'>
					<Search
						placeholder='input search text'
						onSearch={props.onSearchChange}
						style={{ width: ' 100%' }}
						enterButton
					/>
				</Space>
			</Col>
		</Row>
	)
}

export default UserSearch
