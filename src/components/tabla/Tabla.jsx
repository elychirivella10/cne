import { Table } from 'antd'

const TableComp = ({columns,pagination, data, setDataFiltrada, rowSelection}) =>{
    
    return(
        <div className="box">
            <Table
                rowSelection={rowSelection?{
        
                    type: "checkbox",
                    ...rowSelection,
                    
                }:null}
                columns={columns}
                dataSource={data}
                size="small"
                rowKey={'id'}
/*                 onChange={
                    (pagination, filters, sorter, extra) => {
                        setDataFiltrada?setDataFiltrada(extra.currentDataSource):null
                        
                    } 
               } */ 
                pagination={pagination}
            />
        </div>  
    )
}
export default TableComp


