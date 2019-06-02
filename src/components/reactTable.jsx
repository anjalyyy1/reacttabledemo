import React, { Component } from 'react';
// import react table
import "react-table/react-table.css";
import ReactTable from "react-table";

import PaginationComponent from './PaginationComponent';
/* 
onFilteredChange={(filtered, column) => {...}} // Called when a user enters a value into a filter input field or the value passed to the onFiltersChange handler by the Filter option.

resolveData={data => data.map(row => row)} // if on re-render we want the data to be changed


*/

const handleClick = (a) => {
  console.log('hurrah', a);
}

let dataItem =  {
  id: '12345',
  name: 'Raja',
  state: 'CA',
  status: 'Ready for sales',
  email: 'email@uhc.com',
  updated: '2 days ago'
};
const data = [];

for(let i=0; i< 20; i++) {
  if(i%2 ===0 ){
    data.push({
      id: '23456',
      name: 'Rohan',
      state: 'DR',
      status: 'In Progress',
      email: 'anjalig2prdxn.com',
      updated: '3 days ago'
    })
  }
  else {
    data.push(dataItem);
  }
}
// console.log(data);
const columns = [
  {
    Header: 'Policy No',
    filterAll: true,
    accessor: 'id',
    sortable: true,
    resizable: true,
    minWidth: 200,
    style: {},
    headerClassName: 'header',
    getHeaderProps : (state, rowInfo, column, instance)=>({}),
    className:'cell-style',
    Footer: "Anything here - just for forcing the TfootComponent to render",
    filterMethod: (filter, row) => {
      return row[filter.id].includes(filter.value);
    }
  },
  {
    Header: 'Customer',
    accessor: 'name',
    filterAll: true,
    sortable: true,
    resizable: true,
    minWidth: 200,
    style: {},
    headerClassName: 'c-name',
    getHeaderProps : (state, rowInfo, column, instance)=>({}),
    className:'cell-style',
    filterMethod: (filter, row) => {
      return row[filter.id].includes(filter.value);
    }
  },
  {
    Header: 'State',
    accessor: 'state',
    filterAll: true,
    sortable: true,
    resizable: true,
    minWidth: 200,
    style: {},
    headerClassName: 'c-state',
    getHeaderProps : (state, rowInfo, column, instance)=>({}),
    className:'cell-style',
    filterMethod: (filter, row) => {
      return row[filter.id].includes(filter.value);
    }
  },
  {
    Header: 'Status',
    accessor: 'status',
    sortable: true,
    filterAll: true,
    resizable: true,
    minWidth: 200,
    style: {
      'borderRight': 'transparent'
    },
    headerClassName: 'c-status',
    className:'cell-style',
    filterMethod: (filter, row) => {
      return row[filter.id].includes(filter.value);
    },
    getHeaderProps : (state, rowInfo, column, instance)=>({}),
    Cell: row => <button onClick={(e) => handleClick(e)} style={{ 
      backgroundColor: row.value === 'Ready for sales' ? 'green': 'yellow' 
  }}>{row.value}</button>
  },
  {
    Header: 'User',
    accessor: 'email',
    sortable: true,
    filterAll: true,
    resizable: true,
    minWidth: 200,
    style: {},
    headerClassName: 'c-state',
    getHeaderProps : (state, rowInfo, column, instance)=>({}),
    className:'cell-style',
    filterMethod: (filter, row) => {
      return row[filter.id].includes(filter.value);
    }
  },
  {
    Header: 'Updated',
    accessor: 'updated',
    sortable: true,
    resizable: true,
    filterAll: true,
    minWidth: 200,
    style: {},
    headerClassName: 'c-state',
    getHeaderProps : (state, rowInfo, column, instance)=>({}),
    className:'cell-style',
    filterMethod: (filter, row) => {
      return row[filter.id].includes(filter.value);
    }
  }, 
  {
    Header: '1-2 of 126',
    accessor: 'page',
    columns: [
      { 
        Header: 'edit',
        accessor: 'edit',
      }, 
      {
        Header: 'options',
        accessor: 'options'
      }
    ]
  }
]
class Table extends Component {
  state = {  
    filterAll: '',
    data: data,
    filtered:[]
  }

  handleComponent = () => {
    let data = this.state.data;
    console.log(data[10]);
    return data[11];
  }

  onFilteredChange = (filtered, column) => {
    console.log('on filtered change',filtered, column);

  if (filtered.length > 1 && this.state.filterAll.length) {
    console.log('jjj')
      // NOTE: this removes any FILTER ALL filter
      const filterAll = '';
      this.setState({ filtered: filtered.filter(filterAll) })
    }
    else{
      console.log('from else');
      this.setState({ filtered });
    }
      
  }


  filterAll(e) {
    console.log('hhh');
    const { value } = e.target;
    const filterAll = value;
    const filtered = [{ id: 'all', value: filterAll }];
    // NOTE: this completely clears any COLUMN filters
    this.setState({ filterAll, filtered }, ()=> {console.log(this.state)});
  }

  render() {  
    // let data = {...this.state.data};  
    return ( 
      <div>
      <input type="text" value={this.state.filterAll} onChange={(e) => this.filterAll(e)}/>
        <ReactTable 
          data={data}
          columns={columns}
          showPaginationTop= {true}
          showPaginationBottom = {false}
          defaultPageSize={5}
          minRows={2}
          style={{
            padding: 42
          }}
          resizable={true}
          // Footer={'jsj'}
          TfootComponent={
            ({ children, className, ...rest }) =>
              <div className={className} {...rest} style={{ backgroundColor: "#F00", color: "#FFF" }}>
                {`Showing 20 0f ${this.state.data.length}`}
              </div>
          }
          onExpandedChange={(newExpanded, index, event) => {console.log(newExpanded, index, event)}}
          // SubComponent={row => {
          //   let test = this.handleComponent();
          //   console.log(test, data);
          //   return ( 
          //     <div>
          //      <ReactTable 
          //      TrGroupComponent={() => {
          //        <tr>
          //          <td>dd</td>
          //          <td>kd</td>
          //          <td>kfnknk</td>
          //        </tr>
          //      }}
          //         // data={[{...test}]}
          //         // columns={columns}
          //         // showPaginationBottom={false}
          //         // showPaginationTop={false}
          //      />
          //     </div>
          //   )
          // }}
        //  PaginationComponent={PaginationComponent}
          filterable={true}
          defaultFilterMethod= {(filter, data, column) => {
            console.log('i m the default')
            // filter is an object, with id="accessor " and value is filter ka value
            // console.log(filter, data, column);
            const id = filter.pivotId || filter.id
            return data[id] !== undefined ? String(data[id]).startsWith(filter.value) : true
          }}
          // defaultFilterMethod={(filter, row) =>
          //   String(row[filter.id]) === filter.value}
          filtered={this.state.filtered}
          onFilteredChange={this.onFilteredChange}
        />
      </div> 
    );
  }
}
 
export default Table;