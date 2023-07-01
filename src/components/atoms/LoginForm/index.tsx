// import classnames from 'classnames';
import React, { useState } from 'react';

// import { Div } from './styles';

// export type LoginFormProps = {
//   name: string;
// };

export function LoginForm() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='bg-white shadow-md rounded w-1/3'>
          <div className='px-4 py-3 bg-blue-500'>
            <h3 className='text-lg font-semibold'>Login</h3>
          </div>
          <div className='modal-body p-4'>
            <form>
              <div className='mb-4'>
                <label htmlFor='user_name' className='block text-gray-700 text-sm font-bold mb-2'>
                  UserName:
                </label>
                <input
                  type='text'
                  id='user_name'
                  className='block w-full p-2 border-2 border-blue-500 rounded'
                  placeholder='Enter your username'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
                  Password:
                </label>
                <input
                  type='password'
                  id='password'
                  className='block w-full p-2 border-2 border-blue-500 rounded'
                  placeholder='Enter your password'
                />
              </div>
              <div className='flex justify-end'>
                <button
                  type='button'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => handleButtonClick()}
                >
                  Submit
                </button>
                {isButtonClicked && (
                  <div className='bg-green-300 text-white font-bold py-2 px-4 rounded'>🎉Looks good!</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
