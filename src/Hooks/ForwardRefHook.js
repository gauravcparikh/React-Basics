import React,{forwardRef} from 'react'
function ForwardRefHook(props,ref)
{
    return(
        <div>
            <input ref={ref} type="text" />
        </div>
    )
}

export default forwardRef(ForwardRefHook);