import React from 'react'

const KeyboardDesign = ({ pressedKey }) => {



    return (
        <>
            <div className='keyboard-outer'>
                <div className="keyboard" >
                    {/* <div className="keyboard-row margin-bottom-row">
                    <div className={`keyboard-key margin-right ${pressedKey === 'Escape' ? 'active' : ''}`}>Esc</div>
                    <div className={`keyboard-key ${pressedKey === 'F1' ? 'active' : ''}`}>F1</div>
                    <div className={`keyboard-key ${pressedKey === 'F2' ? 'active' : ''}`}>F2</div>
                    <div className={`keyboard-key ${pressedKey === 'F3' ? 'active' : ''}`}>F3</div>
                    <div className={`keyboard-key ${pressedKey === 'F4' ? 'active' : ''}`}>F4</div>
                    <div className={`keyboard-key ${pressedKey === 'F5' ? 'active' : ''}`}>F5</div>
                    <div className={`keyboard-key ${pressedKey === 'F6' ? 'active' : ''}`}>F6</div>
                    <div className={`keyboard-key ${pressedKey === 'F7' ? 'active' : ''}`}>F7</div>
                    <div className={`keyboard-key ${pressedKey === 'F8' ? 'active' : ''}`}>F8</div>
                    <div className={`keyboard-key ${pressedKey === 'F9' ? 'active' : ''}`}>F9</div>
                    <div className={`keyboard-key ${pressedKey === 'F10' ? 'active' : ''}`}>F10</div>
                    <div className={`keyboard-key ${pressedKey === 'F11' ? 'active' : ''}`}>F11</div>
                    <div className={`keyboard-key ${pressedKey === 'F12' ? 'active' : ''}`}>F12</div>
                    <div className={`keyboard-key margin-left ${pressedKey === 'PrintScreen' ? 'active' : ''}`}>Print Screen</div>
                    <div className={`keyboard-key ${pressedKey === 'ScrollLock' ? 'active' : ''}`}>Scroll Lock</div>
                    <div className={`keyboard-key ${pressedKey === 'Pause' ? 'active' : ''}`}>Pause Break</div>
                </div> */}

                    <div className="keyboard-row">
                        <div className={`keyboard-key ${pressedKey === 'Backquote' ? 'active' : ''}`}>~</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit1' ? 'active' : ''}`}>1</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit2' ? 'active' : ''}`}>2</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit3' ? 'active' : ''}`}>3</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit4' ? 'active' : ''}`}>4</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit5' ? 'active' : ''}`}>5</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit6' ? 'active' : ''}`}>6</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit7' ? 'active' : ''}`}>7</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit8' ? 'active' : ''}`}>8</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit9' ? 'active' : ''}`}>9</div>
                        <div className={`keyboard-key ${pressedKey === 'Digit0' ? 'active' : ''}`}>0</div>
                        <div className={`keyboard-key ${pressedKey === 'Minus' ? 'active' : ''}`}>-</div>
                        <div className={`keyboard-key ${pressedKey === 'Equal' ? 'active' : ''}`}>+</div>
                        <div className={`keyboard-key ${pressedKey === 'Backspace' ? 'active' : ''}`}>Back</div>
                        {/* 
                    <div className={`keyboard-key margin-left ${pressedKey === 'Insert' ? 'active' : ''}`}>Insert</div>
                    <div className={`keyboard-key ${pressedKey === 'Home' ? 'active' : ''}`}>Home</div>
                    <div className={`keyboard-key ${pressedKey === 'PageUp' ? 'active' : ''}`}>Pg Up</div>

                    <div className={`keyboard-key margin-left ${pressedKey === 'NumLock' ? 'active' : ''}`}>Num Lock</div>
                    <div className={`keyboard-key ${pressedKey === 'NumpadDivide' ? 'active' : ''}`}>/</div>
                    <div className={`keyboard-key ${pressedKey === 'NumpadMultiply' ? 'active' : ''}`}>*</div>
                    <div className={`keyboard-key ${pressedKey === 'NumpadSubtract' ? 'active' : ''}`}>-</div> */}
                    </div>

                    <div className="keyboard-row">
                        <div className={`keyboard-key ${pressedKey === 'Tab' ? 'active' : ''}`}>Tab</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyQ' ? 'active' : ''}`}>Q</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyW' ? 'active' : ''}`}>W</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyE' ? 'active' : ''}`}>E</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyR' ? 'active' : ''}`}>R</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyT' ? 'active' : ''}`}>T</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyY' ? 'active' : ''}`}>Y</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyU' ? 'active' : ''}`}>U</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyI' ? 'active' : ''}`}>I</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyO' ? 'active' : ''}`}>O</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyP' ? 'active' : ''}`}>P</div>
                        <div className={`keyboard-key ${pressedKey === 'BracketLeft' ? 'active' : ''}`}>[</div>
                        <div className={`keyboard-key ${pressedKey === 'BracketRight' ? 'active' : ''}`}>]</div>
                        <div className={`keyboard-key ${pressedKey === 'Backslash' ? 'active' : ''}`}>\</div>
                        {/* 
                    <div className={`keyboard-key margin-left ${pressedKey === 'Delete' ? 'active' : ''}`}>Delete</div>
                    <div className={`keyboard-key ${pressedKey === 'End' ? 'active' : ''}`}>End</div>
                    <div className={`keyboard-key ${pressedKey === 'PageDown' ? 'active' : ''}`}>Pg Dn</div>

                    <div className={`keyboard-key margin-left ${pressedKey === 'Numpad7' ? 'active' : ''}`}>7</div>
                    <div className={`keyboard-key ${pressedKey === 'Numpad8' ? 'active' : ''}`}>8</div>
                    <div className={`keyboard-key ${pressedKey === 'Numpad9' ? 'active' : ''}`}>9</div>
                    <div className={`keyboard-key ${pressedKey === 'NumpadAdd' ? 'active' : ''}`}>+</div> */}
                    </div>

                    <div className="keyboard-row">
                        <div className={`keyboard-key ${pressedKey === 'CapsLock' ? 'active' : ''}`}>Caps</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyA' ? 'active' : ''}`}>A</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyS' ? 'active' : ''}`}>S</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyD' ? 'active' : ''}`}>D</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyF' ? 'active' : ''}`}>F</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyG' ? 'active' : ''}`}>G</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyH' ? 'active' : ''}`}>H</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyJ' ? 'active' : ''}`}>J</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyK' ? 'active' : ''}`}>K</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyL' ? 'active' : ''}`}>L</div>
                        <div className={`keyboard-key ${pressedKey === 'Semicolon' ? 'active' : ''}`}>;</div>
                        <div className={`keyboard-key ${pressedKey === 'Quote' ? 'active' : ''}`}>{"'"}</div>
                        <div className={`keyboard-key margin-right double-width ${pressedKey === 'Enter' ? 'active' : ''}`}>Enter</div>
                        {/* <div className="keyboard-key margin-left no-bg"></div>
                    <div className="keyboard-key no-bg"></div>

                    <div className={`keyboard-key margin-left ${pressedKey === 'Numpad4' ? 'active' : ''}`}>4</div>
                    <div className={`keyboard-key ${pressedKey === 'Numpad5' ? 'active' : ''}`}>5</div>
                    <div className={`keyboard-key ${pressedKey === 'Numpad6' ? 'active' : ''}`}>6</div>
                    <div className={`keyboard-key ${pressedKey === 'NumpadAdd' ? 'active' : ''}`}></div> */}
                    </div>



                    <div className="keyboard-row">
                        <div className={`keyboard-key double-width ${pressedKey === 'ShiftLeft' ? 'active' : ''}`}>Shift</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyZ' ? 'active' : ''}`}>Z</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyX' ? 'active' : ''}`}>X</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyC' ? 'active' : ''}`}>C</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyV' ? 'active' : ''}`}>V</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyB' ? 'active' : ''}`}>B</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyN' ? 'active' : ''}`}>N</div>
                        <div className={`keyboard-key ${pressedKey === 'KeyM' ? 'active' : ''}`}>M</div>
                        <div className={`keyboard-key ${pressedKey === 'Comma' ? 'active' : ''}`}>,</div>
                        <div className={`keyboard-key ${pressedKey === 'Period' ? 'active' : ''}`}>.</div>
                        <div className={`keyboard-key ${pressedKey === 'Slash' ? 'active' : ''}`}>/</div>
                        <div className={`keyboard-key margin-right double-width ${pressedKey === 'ShiftRight' ? 'active' : ''} `}>Shift</div>
                        {/* <div className={`keyboard-key margin-left ${pressedKey === 'ArrowUp' ? 'active' : ''}`}>Up</div>
                    <div className="keyboard-key no-bg"></div>

                    <div className={`keyboard-key margin-left ${pressedKey === 'Numpad1' ? 'active' : ''}`}>1</div>
                    <div className={`keyboard-key ${pressedKey === 'Numpad2' ? 'active' : ''}`}>2</div>
                    <div className={`keyboard-key ${pressedKey === 'Numpad3' ? 'active' : ''}`}>3</div>
                    <div className={`keyboard-key ${pressedKey === 'NumpadEnter' ? 'active' : ''}`}>Enter</div> */}
                    </div>

                    <div className="keyboard-row">
                        <div className={`keyboard-key larger-keys ${pressedKey === 'ControlLeft' ? 'active' : ''}`}>Ctrl</div>
                        <div className={`keyboard-key larger-keys ${pressedKey === 'MetaLeft' ? 'active' : ''}`}>Win</div>
                        <div className={`keyboard-key larger-keys ${pressedKey === 'AltLeft' ? 'active' : ''}`}>Alt</div>
                        <div className={`keyboard-key spacebar ${pressedKey === 'Space' ? 'active' : ''}`}>Space</div>
                        <div className={`keyboard-key larger-keys ${pressedKey === 'AltRight' ? 'active' : ''}`}>Alt</div>
                        <div className={`keyboard-key larger-keys ${pressedKey === 'MetaRight' ? 'active' : ''}`}>Win</div>
                        <div className={`keyboard-key larger-keys ${pressedKey === 'ContextMenu' ? 'active' : ''}`}>Menu</div>
                        <div className={`keyboard-key larger-keys ${pressedKey === 'ControlRight' ? 'active' : ''}`}>Ctrl</div>
                        {/* <div className={`keyboard-key margin-left ${pressedKey === 'ArrowLeft' ? 'active' : ''}`}>Left</div>
                    <div className={`keyboard-key ${pressedKey === 'ArrowDown' ? 'active' : ''}`}>Down</div>
                    <div className={`keyboard-key ${pressedKey === 'ArrowRight' ? 'active' : ''}`}>Right</div>

                    <div className={`keyboard-key margin-left double-width ${pressedKey === 'Numpad0' ? 'active' : ''}`}>0</div>
                    <div className={`keyboard-key ${pressedKey === 'NumpadDecimal' ? 'active' : ''}`}>.</div>
                    <div className={`keyboard-key ${pressedKey === 'NumpadEnter' ? 'active' : ''}`}></div> */}
                    </div>


                </div>
            </div>

        </>
    )
}

export default KeyboardDesign
