import React from 'react'

export default function Debugger({state, setState, inputs}) {
  return (
    <div className='vportal_debugger'>

        <p>Debugea con vportal</p>

        <div className='inputs'>
            {inputs ? inputs.map((input, index) => (
                <div key={index} className='group'>
                    <label htmlFor={input.name}>{input.name}</label>

                    <input
                        type={input.type}
                        name={input.name}
                        value={input.value}
                        min={input.min}
                        max={input.max}
                        onChange={(e) => input.onChange(e)}
                        style={{
                            width: '50%',
                            margin: '0 10px',
                        }}
                    />
                </div>
            )) : <p>Necesitas mandar inputs!</p>}
        </div>
        
        <style jsx>{`
            .vportal_debugger {
                position: fixed;
                top: 0;
                right: 0;
                width: 30%;
                background-color: rgba(0,0,0,0.9);
                color: white;
                z-index: 1000;
                padding: 10px;
                overflow-y: auto;
            }

            .vportal_debugger p {
                font-size: 1rem;
                margin: 0;
                text-align: center;
            }

            .vportal_debugger .inputs {
                margin-top: 10px;
            }

            .vportal_debugger .inputs .group {
                margin-bottom: 10px;
                display: flex;
            }
        `}</style>
    </div>
  )
}
