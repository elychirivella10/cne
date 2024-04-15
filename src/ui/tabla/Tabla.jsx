import React from 'react'

import { Table } from 'antd'

const TableComp = ({columns, data, pagination}) =>{
    return(
        <div className="box">
            <Table
                columns={columns}
                dataSource={data}
                rowKey={'id'}
                pagination={pagination}
            />
        </div>  
    )
}
export default TableComp


