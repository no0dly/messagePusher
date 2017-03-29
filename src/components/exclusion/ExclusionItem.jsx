import React from 'react';

// import styled from 'styled-components';

const ExclusionItem = (props) => {
    const { username, onClick } = props;
    return (
        <tr>
            <td>{username}</td>
            <td><a onClick={onClick} href="#">Remove</a></td>
        </tr>
    );
}

export default ExclusionItem;
