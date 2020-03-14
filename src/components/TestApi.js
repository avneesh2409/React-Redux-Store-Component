import React, { useEffect, useRef } from 'react'
// import { useSelector } from 'react-redux'
export const TestApi = (props) => {
    // const data = useSelector(state => state.userReducer.data)
    const input1 = useRef('');
    const input2 = useRef('');
    const submit = useRef('');
    useEffect(() => {
        input1.current.focus();
    }, [])
    const input1KeyDown = (e) => {
        //console.log(e.keyCode);
        if (e.keyCode === 13) {
            input2.current.focus();
        }

    }
    const input2KeyDown = (e) => {
        if (e.keyCode === 13) {
            submit.current.focus();
        }

    }
    const submitKeyDown = (e) => {
console.log("form submitted")
       input1.current.value = ''
       input2.current.value = ''
input1.current.focus();
    }
    return (
        <div className='jumbtron'>
            <p><input type='text' onKeyDown={input1KeyDown} ref={input1} placeholder='enter text' /></p>
            <p><input type='text' ref={input2} onKeyDown={input2KeyDown} placeholder='enter text' /></p>
            <button ref={submit} onKeyDown={submitKeyDown} >submit</button>
        </div>
    )
}
