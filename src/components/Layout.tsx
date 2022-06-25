import React, { FC, ReactNode } from 'react'

interface Props {
   children?: ReactNode
}

const Layout:FC<Props> = ({ children }) => {
   return (
      <div className='fixed inset-0 bg-main flex flex-col overflow-y-auto'>
         {children}
      </div>
   )
}

export default Layout