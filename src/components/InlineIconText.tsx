import React from 'react';

export default function InlineIconText(props) {
    const { icon: Icon, text } = props;
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            <Icon fontSize="small" />
            {text}
        </div>
    );
}
