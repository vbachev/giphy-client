import React from 'react'
import renderer from 'react-test-renderer'
import Logo from './Logo'

test('it renders a logo', () => {
  const component = renderer.create(<Logo />)
  expect(component.toJSON()).toMatchSnapshot()
})
