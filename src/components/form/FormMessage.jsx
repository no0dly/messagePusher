import React from 'react';

import styled from 'styled-components';

const FormMessage = (props) => {

    return (
        <div class="field">
            <label class="label">{props.title}</label>
            <div class="control">
              <Textarea class="textarea" placeholder="Textarea"></Textarea>
            </div>
        </div>
    );
}

const Textarea = styled.textarea`
    width: 100%;
    resize: none;
    height: 100px;
    padding: 10px;
`;


export default FormMessage;
