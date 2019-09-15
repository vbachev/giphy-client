import React from 'react'
import renderer from 'react-test-renderer'
import Gallery from './Gallery'

const mockImages = [
  { id: 'foo', url: 'https://foo.com', title: 'foo' },
  { id: 'bar', url: 'https://bar.com', title: 'bar' }
]

test('it renders a gallery', () => {
  const component = renderer.create(
    <Gallery images={mockImages} keyword='foo' totalImages={23} layout='grid' onLayoutChange={() => {}} />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
