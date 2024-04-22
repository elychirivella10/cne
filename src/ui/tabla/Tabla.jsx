
import React from 'react'

import { Table } from 'antd'

import { creates } from "@/lib/peticiones/funcionariosList";

const TableComp = async ({columns,pagination}) =>{
    const data = await creates()
    console.log(data)
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


