import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'
import AppRouters from './routers/AppRouters'

const HelloBuildApp = () => {
    return (
        <Provider store={store}>

            <AppRouters />

        </Provider>
    )
}


export default HelloBuildApp