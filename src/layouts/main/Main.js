import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Shared/Header'

const Main = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Main