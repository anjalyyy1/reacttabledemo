import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
let data = [
    {
        name: 'Adarsh',
        age: '20'
    },
    {
        name: 'ajnali',
        age: '22'
    },
    {
        name: 'Kajol',
        age: '25'
    },
    {
        name: 'Shilpa',
        age: '26'
    },
    {
        name: 'Sonam',
        age: '27'
    },
    {
        name: 'test',
        age: '20'
    }
];

let columns = [
    {
			Header: 'Name',
			accessor: 'name',
			filterMethod: (filter, rows) => {
				let testRow = rows.filter((row) => {
					console.log(row.name, row.age, filter.value);
					let rowname = row.name;
					let rowage =row.age;
					if(rowname.startsWith(filter.value) || rowage.startsWith(filter.value)) {
						return row;
					}
				})
				// const result = matchSorter(rows, filter.value, {
				// 	keys: [
				// 		"name",
				// 		"age"
				// 	], threshold: matchSorter.rankings.WORD_STARTS_WITH
				// });
				// console.log('result after filtering is', result);
				// return result;
				return testRow;
			},
			filterAll: true,
    },
    {
			Header: 'Age',
			accessor: 'age',
		},
		{
			// NOTE - this is a "filter all" DUMMY column
			// you can't HIDE it because then it wont FILTER
			// but it has a size of ZERO with no RESIZE and the
			// FILTER component is NULL (it adds a little to the front)
			// You culd possibly move it to the end
			Header: "All",
			id: 'all',
			width: 0,
			resizable: false,
			sortable: false,
			show: false,
			// filterMethod: (filter, rows) => {
			// 	let testRow = rows.filter((row) => {
			// 		console.log(row.name, row.age, filter.value);
			// 		let rowname = row.name;
			// 		let rowage =row.age;
			// 		if(rowname.startsWith(filter.value) || rowage.startsWith(filter.value)) {
			// 			return row;
			// 		}
			// 	})
			// 	// const result = matchSorter(rows, filter.value, {
			// 	// 	keys: [
			// 	// 		"name",
			// 	// 		"age"
			// 	// 	], threshold: matchSorter.rankings.WORD_STARTS_WITH
			// 	// });
			// 	// console.log('result after filtering is', result);
			// 	// return result;
			// 	return testRow;
			// },
			// filterAll: true,
		},
];


class FilterTable extends Component {
    state = {  
				data: data,
				filtered: [],
				filterAll:''
		}
		
		onFilteredChange = (filtered, col) => {
			console.log(filtered, col);
		}

		filterAll = (e) => {
			console.log('hey called');
			const { value } = e.target;
			const filterAll = value;
			// const filtered = [{ id: 'name', value: filterAll }];
			const filtered = [{ id: 'name', value: filterAll }];
			// NOTE: this completely clears any COLUMN filters
			this.setState({ filtered }, () => console.log(this.state.filtered));
		}
    render() { 
        return (
        <div>
					<input type="text" onChange={this.filterAll}/>
					<ReactTable
							data={this.state.data}
							columns={columns}
							// filterable
							filtered={this.state.filtered}
							onFilteredChange={this.onFilteredChange}
					/>
        </div>    
        );
    }
}
 
export default FilterTable;