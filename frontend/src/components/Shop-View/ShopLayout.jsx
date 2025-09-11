import React from 'react'
import ShopHeader from './ShopHeader'
import { Outlet } from 'react-router-dom'

function ShopLayout() {
  return (
    <div>
        <ShopHeader/>
        <div className="flex flex-col bg-white overflow-hidden">
            <Outlet/>
        </div>
    </div>
  )
}

export default ShopLayout