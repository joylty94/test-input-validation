import React, { useState, useCallback } from 'react';
import { validation } from '../rules/validation';

const TextInput = ({ rules, placeholder, disabled, value, setValue, maxlength}) => {
    const [ruleError, setRuleError] = useState('');

    const onChangeValue = useCallback((e) => {
        if(rules){
            setRuleError('');
            [...rules].forEach((r, i) => {
                console.log('r', r)
                if (r in validation){
                    if(!(validation[r][0]).test(e.target.value)){
                        setRuleError(validation[r][1])
                    }else{
                        // 글자 막을 경우
                    }
                }
            })
        }
        setValue(e.target.value)
    }, [])

    return(
        <>
            <input value={value} onChange={onChangeValue} placeholder={placeholder && placeholder} disabled={disabled && disabled} maxlength={maxlength && maxlength}/>
            <div>{ruleError}</div>
        </>
    )
}

export default TextInput;