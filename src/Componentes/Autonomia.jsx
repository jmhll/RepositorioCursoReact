import react, {Component} from 'react';
import PropTypes from 'prop-types'
class Autonomia extends Component{
    render() {
        return 
        { 
        <ul>
            <li>Auntonomia:{this.props.km} </li> 
        </ul>
        }
    }
}

Autonomia.PropTypes={ km: PropTypes.number.isRequired}

export default Autonomia;