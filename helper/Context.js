"use client"
import Header from '@/components/Header'
import React, { createContext } from 'react'
export const Mycontext = createContext()
const Context = ({children}) => {
    
    const username = "kenilgsmer"
  return (
    <div>
      <Mycontext.Provider value={username}>
         {children}
      </Mycontext.Provider>
    </div>
  )
}

export default Context
