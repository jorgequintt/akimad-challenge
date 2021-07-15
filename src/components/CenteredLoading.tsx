import React from 'react';

// MaterialUI
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CenteredLoading(props) {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                padding: '3em 0',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1em',
                }}
            >
                <CircularProgress size={60} />
            </div>
        </div>
    );
}
