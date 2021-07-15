import React from 'react';

// MaterialUI
import Typography from '@material-ui/core/Typography';

export default function CenteredMessage(props) {
    const { color, message, icon: Icon } = props;
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                padding: '1.5em 0',
                alignItems: 'center',
                color,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1em',
                    color,
                }}
            >
                {Icon && <Icon style={{ fontSize: 80 }} />}
                <Typography variant="h5">{message}</Typography>
            </div>
        </div>
    );
}
