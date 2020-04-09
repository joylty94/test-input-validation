import React,{useCallback, useState} from  'react';
import { validation } from '../rules/validation';

const TextArea = ({ rules, cols, rows, value, setValue, placeholder, disabled, maxlength }) => {
    const [ruleError, setRuleError] = useState('');
    const onChangeValue = useCallback((e) => {
        if (rules) {
            setRuleError('');
            [...rules].forEach((r, i) => {
                console.log('r', r)
                if (r in validation) {
                    if (!(validation[r][0]).test(e.target.value)) {
                        setRuleError(validation[r][1])
                    } else {
                        // 글자 막을 경우
                    }
                }
            })
        }
        setValue(e.target.value)
    }, [])

    return(
        <>
            <textarea cols={cols && cols} rows={rows && rows} onChange={onChangeValue} placeholder={placeholder && placeholder} disabled={disabled} maxlength={maxlength && maxlength} />
            <div>{ruleError}</div>
        </>
    )
}

export default TextArea;