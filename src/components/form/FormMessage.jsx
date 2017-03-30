import React from 'react';

import styled from 'styled-components';

const FormMessage = (props) => {
    const { title, text, id } = props;
    return (
        <Textarea className="field">
            <label className="label">{title}</label>
            <div className="control">
                <textarea name={id} className="textarea" defaultValue={text} placeholder="Enter your message"/>
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
