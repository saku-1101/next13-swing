// import classnames from 'classnames';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { updatePetState, updateUserState } from '@/redux/slices';
import { User } from '@/redux/slices/userSlice';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

// mock data
const user: User = {
  name: 'Sakura A',
  uuid: '1',
  password: 'sakuranopassword',
};

const sentence = 'I want to have cats!';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const handleCreateUser = (formData: FormData) => {
    'use server';
    console.log(formData);
    dispatch(updatePetState(sentence));
    dispatch(updateUserState(user));
    // redirect(`/home/${userid}`)
    redirect('/home');
  };
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='bg-white shadow-md rounded w-1/3'>
          <div className='px-4 py-3 bg-blue-500'>
            <h3 className='text-lg font-semibold'>Login</h3>
          </div>
          <div className='modal-body p-4'>
            <form action={handleCreateUser}>
              <div className='mb-4'>
                <label htmlFor='user_name' className='block text-gray-700 text-sm font-bold mb-2'>
                  UserName:
                </label>
                <input
                  type='text'
                  required
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
                  required
                  id='password'
                  className='block w-full p-2 border-2 border-blue-500 rounded'
                  placeholder='Enter your password'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='pet' className='block text-gray-700 text-sm font-bold mb-2'>
                  Pet Preference:
                </label>
                <input
                  type='text'
                  id='pet'
                  className='block w-full p-2 border-2 border-blue-500 rounded'
                  placeholder='I want to have cats!'
                />
              </div>
              <div className='flex justify-end'>
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
