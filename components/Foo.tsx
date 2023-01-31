import React, { FunctionComponent } from 'react'

type IFoo = {
  bar?: any
}

const Foo: FunctionComponent<IFoo> = ({ bar }) => {
  return <h1>The cake is a lie!</h1>
}

export default Foo
