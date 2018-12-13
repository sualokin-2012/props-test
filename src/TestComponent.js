import React, {Component} from 'react';

class TestComponent extends Component 
{
    render () {
        const { val1, val2, val3 } = this.props.s; // From line 14 in App.js
        
        return (
            <div>
                <div>
                    {this.props.p1}
                </div>
                <div>
                    {this.props.p2}
                </div>
                <div>
                    {this.props.p3}
                </div>

                <div>{val1}, {val2}, {val3}</div> { /* From line 6 in this component.*/ }
            </div>
        )
    }
}

export default TestComponent;