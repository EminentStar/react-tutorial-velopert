import React from 'react';
import update from 'react-addons-update';

import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';
import ContactCreator from './ContactCreator';


class App extends React.Component {
    render(){
        return (
            <div>
                <Contacts/>
            </div>
        );
    }
}


export default App;