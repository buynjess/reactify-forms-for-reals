import React from 'react'
import ReactDOM from 'react-dom'
import TabsControlled from './tabs'
import PaperBar from './paper'
import LoginForm from './login'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const AppWrapper = () => (
        <div>
            <PaperBar/>
            <TabsControlled/>
            <LoginForm/>

        </div>
)

ReactDOM.render ( <AppWrapper/>, document.getElementById('root') )