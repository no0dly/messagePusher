import React from 'react';

// import styled from 'styled-components';

const ExclusionItem = (props) => {
    const { username } = props;
    const onClickHandler = props.onClick;
    return (
        <tr>
            <td>{username}</td>
            <td><a onClick={onClickHandler} href="#">Remove</a></td>
        </tr>
    );
}

export default ExclusionItem;
