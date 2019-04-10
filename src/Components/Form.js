import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {

    
    state = {
        name:'',
        phone:'',
    }


    static propTypes = {
        addContact: PropTypes.func
    }

    onChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addContact({...this.state})
        this.setState({
            name:'',
            phone:''
        })
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit }>
                    <input name={'name'} id={'name'} value={this.state.name} onChange={this.onChange} placeholder={'Enter a name'} />
                    <br/>
                    <input name={'phone'} id={'phone'} value={this.state.phone} onChange={this.onChange} placeholder={'Enter a phone number'} />
                    <button>Add</button>
                </form> 
            </div>
        )
    }
}

export default Form