import React from 'react'

const Create = (props) => {
    console.log(props);
 // return props.children;
 return <div className='w-1/2 bg-red-200'>{props.children}</div>
}

export default Create