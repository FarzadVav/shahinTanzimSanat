import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  const router = useRoutes(routes)

  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  )
}