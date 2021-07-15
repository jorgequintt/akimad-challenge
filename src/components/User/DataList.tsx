import React from 'react';
import CenteredLoading from '../CenteredLoading';
import CenteredMessage from '../CenteredMessage';

// MaterialUI
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function DataList(props) {
    const { list, title, loading, error, emptyMsg } = props;

    const openInNewTab = (url) => {
        window?.open(url, '_blank')?.focus();
    };

    return (
        <div style={{ marginBottom: '30px' }}>
            <Typography variant="h6">{title}</Typography>
            <List style={{ overflowY: 'scroll', maxHeight: 200, border: '1px solid #CCC' }}>
                {loading ? (
                    <CenteredLoading />
                ) : error ? (
                    <CenteredMessage icon={ErrorOutlineIcon} message={error} color="#F33" />
                ) : list.length === 0 ? (
                    <CenteredMessage message={emptyMsg} color="#BBB" />
                ) : (
                    list.map((data, i) => (
                        <div key={data.name + i}>
                            <ListItem onClick={(e) => openInNewTab(data.url)} button={true}>
                                <ListItemText
                                    primary={data.name}
                                    secondary={data.description ? data.description : ''}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <ArrowForwardIosIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="middle" component="li" />
                        </div>
                    ))
                )}
            </List>
        </div>
    );
}
