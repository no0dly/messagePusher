import React from 'react';

import styled from 'styled-components';

const FormMessage = (props) => {

    return (
        <Textarea className="field">
            <label className="label">{props.title}</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
        </Textarea>
    );
}

const Textarea = styled.div`
    .textarea {
        resize: none;
    }
`;


export default FormMessage;
