import React, { useContext } from 'react';
import Nav from './Nav';
import Context, { Mycontext } from '@/helper/Context';
export const Header = (props) => {
const user = useContext(Mycontext)
  return (
    <div className='bg-orange-400 p-5'> 
      {user}
    </div>
  );
};
export default Header;
