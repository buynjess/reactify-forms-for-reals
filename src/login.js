// import React from 'react'
// import TextField from 'material-ui/TextField'
//
// const LoginForm = () => (
//     <div>
//
//         <TextField
//             hintText="Hint Text"
//             floatingLabelText="User Name"
//             floatingLabelFixed={true}
//         /><br/>
//         <TextField
//             hintText="Password Field"
//             floatingLabelText="Password"
//             type="password"
//         /><br/>
//     </div>
// );
//
// export default LoginForm;


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class TextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };


    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">




                <TextField
                    id="password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />



                <TextField
                    id="with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                />

            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);