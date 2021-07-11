import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import ConnectedApp from './app';


const Reduxapp = () => {
    return(
        <Provider store={store}>
            <ConnectedApp />
         </Provider>
    )
}


ReactDom.render(<Reduxapp />, document.getElementById('root'))