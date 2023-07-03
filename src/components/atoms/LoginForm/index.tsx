// import classnames from 'classnames';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { updatePetState, updateUserState } from '@/redux/slices';
import { User } from '@/redux/slices/userSlice';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { supabase } from '../../../../supabase';
import { AuthError } from '@supabase/supabase-js';

// mock data
const user: User = {
  name: 'Sakura A',
  uuid: '1',
  password: 'sakuranopassword',
};

export function LoginForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [sentence, setSentence] = useState('');
  const dispatch = useAppDispatch();

  const handleAuth = async (e: any) => {
    // 'use server';
    e.preventDefault();
    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (error) throw error;
        console.log(data);
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              username: username,
            },
          },
        });
        if (error) throw error;
        console.log(data);
      }
    } catch (error: AuthError | unknown) {
      if (error instanceof AuthError) {
        alert(error.message);
      }
    }
    // console.log(formData);
    // dispatch(updatePetState(sentence));
    // dispatch(updateUserState(user));
    // // redirect(`/home/${userid}`)
    // redirect('/home');
    // setIsLogin(true);
  };
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='bg-white shadow-md rounded w-1/3'>
          <div className='px-4 py-3 bg-blue-500'>
            <h3 className='text-lg font-semibold'>{isLogin ? 'Login' : 'Register'}</h3>
          </div>
          {isLogin ? (
            <p>
              If you wish to Register &gt;&gt;{' '}
              <span onClick={() => setIsLogin(false)}>Switch to Registration mode</span>
            </p>
          ) : (
            <p>
              If you wish to Login &gt;&gt; <span onClick={() => setIsLogin(true)}>Switch to Login mode</span>
            </p>
          )}
          <div className='modal-body p-4'>
            <form onSubmit={handleAuth}>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
                  Email:
                </label>
                <input
                  type='text'
                  value={email}
                  required
                  id='email'
                  className='block w-full p-2 border-2 border-blue-500 rounded'
                  placeholder='Enter your email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {isLogin ? (
                <> </>
              ) : (
                <div className='mb-4'>
                  <label htmlFor='username' className='block text-gray-700 text-sm font-bold mb-2'>
                    Username:
                  </label>
                  <input
                    type='text'
                    value={username}
                    required
                    id='username'
                    className='block w-full p-2 border-2 border-blue-500 rounded'
                    placeholder='Uesrname...'
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              )}
              <div className='mb-4'>
                <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
                  Password:
                </label>
                <input
                  type='password'
                  value={password}
                  required
                  id='password'
                  className='block w-full p-2 border-2 border-blue-500 rounded'
                  placeholder='Enter your password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='pet' className='block text-gray-700 text-sm font-bold mb-2'>
                  Today&apos;s Pet Preference:
                </label>
                <input
                  type='text'
                  id='pet'
                  value={sentence}
                  className='block w-full p-2 border-2 border-blue-500 rounded'
                  placeholder='I want to have cats!'
                  onChange={(e) => setSentence(e.target.value)}
                />
              </div>
              <div className='flex justify-end'>
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  {isLogin ? 'Login' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
