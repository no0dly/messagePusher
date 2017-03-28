import React from 'react';

import styled from 'styled-components';

const CustomersItem = (props) => {

    return (
        <tr>
            <td>
                <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
            </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>3</td>
            <td><a href="#">Exclude</a></td>
        </tr>
    );
}

export default CustomersItem;
