import React from 'react'
import renderer from 'react-test-renderer'
import SearchForm from './SearchForm'

test('it renders the search form', () => {
  const component = renderer.create(
    <SearchForm onSearch={() => {}} />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
