import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'orange', 'blue', 'green', 'yellow', 'pink'];
    const randomNumber = colors[Math.floor(Math.random() * 5)]
    const className = randomNumber + '-text';
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;