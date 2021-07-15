import React from 'react';

// MaterialUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function NavBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="h5">Github User Search</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
