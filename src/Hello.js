import React from 'react';
import Card from './components/UI/Card';

const Hello = (props) => {
    console.log('Hello Component!');
    console.log(props);
    return (
        <Card>
            <div>
                Hello React
                {props.children}
            </div>
        </Card>
    );
};

export default Hello;