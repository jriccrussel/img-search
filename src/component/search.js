import React, { Component } from 'react'

export class SearchBar extends Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.term)

        // onSubmit - prop from App.js nag hold sa onSearchSubmit 
        this.props.onSubmit(this.state.term)
    }

    // onInputClick = () => {
    //     console.log('input clicked')
    // }

    render() {
        // console.log(this.state.term)

        return (
            <div className='ui segment'>
                <form 
                    className='ui form'
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            // onClick={this.onInputClick}
                            onChange={this.onInputChange}
                        />    
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar