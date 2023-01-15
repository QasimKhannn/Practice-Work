import React from 'react'
import ChildComp from './ChildComp'

const Child = () => {
  return (
    <>
        <ChildComp>
        <div>
            <p>Hello World</p>
            <p>New One</p>
            <p>Another One</p>
        </div>
        </ChildComp>
    </>
  )
}

export default Child