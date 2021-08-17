import React from 'react'

const FocusInput = () => {
    const inputRef = React.useRef();

    const handleClick = () => {
        inputRef.current.focus(inputRef);
    };
    return (
        <div>
            <h1>Focus</h1>
            <input type="text" ref={inputRef} placeholder="Enter Text" />
            <button onClick={handleClick}>Click</button>   
        </div>
    )
}

export default FocusInput
