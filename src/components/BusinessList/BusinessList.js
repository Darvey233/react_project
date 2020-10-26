import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Businesss /> 
                <Businesss />
                <Businesss />
                <Businesss />
                <Businesss />
                <Businesss />
            </div>
        )
    }
}

export default BusinessList