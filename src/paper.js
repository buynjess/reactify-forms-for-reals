// import React, { Component } from 'react'
// import Paper from 'material-ui/Paper'
//
//
// const style = {
//     height: 100,
//     width: '100%',
//     // margin: 20,
//     textAlign: 'center',
//     display: 'inline-block',
//     backgroundColor: 'SlateBlue',
//     color: 'White',
// };
//
// const PaperBar = () => (
//     <div>
//         <Paper style={style} zDepth={3} >
//             <h1>This is my awesome login page!</h1>
//         </Paper>
//     </div>
// );
//
// export default PaperBar;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

function SimpleAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
