import React from 'react'
import renderer from 'react-test-renderer'
import Image from './Image'

test('it renders an image', () => {
  const component = renderer.create(
    <Image url='https://google.com' title='Google Inc' width='100' height='60' />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
