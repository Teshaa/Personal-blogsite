// Simple tests: do components render, and do props control what they show?
import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from './App'
import Header from './components/Header'
import Article from './components/Article'
import { blog } from './blog'

test('App shows the blog name from blog.js', () => {
  render(<App />)
  expect(screen.getByText(blog.name)).toBeTruthy()
})

test('Header shows the name prop', () => {
  render(<Header name="Test Blog" />)
  expect(screen.getByText('Test Blog')).toBeTruthy()
})

test('Article shows the title, date and preview props', () => {
  render(<Article title="My Title" date="5 May" preview="My preview" />)
  expect(screen.getByText('My Title')).toBeTruthy()
  expect(screen.getByText('5 May')).toBeTruthy()
  expect(screen.getByText('My preview')).toBeTruthy()
})