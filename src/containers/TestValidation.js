import React, { useState } from 'react';
import TextArea from '../components/TextArea'
import TextInput from '../components/TextInput'

const TestValidation = () => {
    const [inputValue, setInputValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    return (
        <>
            <TextInput value={inputValue} setValue={setInputValue} placeholder='test input' disabled={false} cols={20} rows={10} maxlength={20} rules={['rule01', 'rule02']}/>
            <TextArea value={textareaValue} setValue={setTextareaValue} placeholder='test textarea' disabled={false} maxlength={500} rules={['rule01', 'rule02']}/>
        </>
    )
}

export default TestValidation;