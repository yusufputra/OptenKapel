import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Button, Paper, AppBar, MenuItem, Input,TextField, Tabs, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const style = {
    frm: {
        paddingBottom:10,
        borderRadius:18,
        width:'30%',
    },
    cont: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        height: '100vh',
    },
    textfield: {
        margin: 15,
        width:'90%'
    },
}

export default class Formisi extends Component {
    state = {
        prodi: '',
        open: false,
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <Grid container style={style.cont}>
                <Paper style={style.frm}>
                        <Grid Item container style={{height:'100%',width:'100%'}}>
                            <form container style={{height:'100%',width:'100%'}}>
                                <TextField
                                    style={style.textfield}
                                    required
                                    label="Nama Lengkap"
                                    margin="dense"
                                    variant="outlined"
                                />
                                <br />
                                <TextField
                                    style={style.textfield}
                                    required
                                    label="NIM"
                                    margin="dense"
                                    variant="outlined"
                                />
                                <br />
                                <TextField
                                    style={style.textfield}
                                    required
                                    label="Prodi"
                                    margin="dense"
                                    variant="outlined"
                                />
                                <br />
                                <TextField
                                    style={style.textfield}
                                    required
                                    label="ID Line"
                                    margin="dense"
                                    variant="outlined"
                                />
                                <br />
                                <TextField
                                    style={style.textfield}
                                    label="Motivasi"
                                    multiline
                                    rowsMax="3"
                                    rows="2"
                                    margin="normal"
                                    variant="outlined"
                                    helperText="Motivasi anda mengikuti kepanitiaan ini"
                                />
                                <br />
                                <div style={{textAlign:'center'}}>
                                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                                        Send
                                    
                                    </Button>
                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"Konfirmasi"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Apa anda yakin sudah mengisi dengan benar?
                                    </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleClose} color="primary">
                                                Sudah
                                    </Button>
                                            <Button onClick={this.handleClose} color="secondary" autoFocus>
                                                Belum
                                    </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </form>
                        </Grid>
                </Paper>
            </Grid>
        )
    }
}
