import { useAppDispatch } from '@/redux/hooks/hooks';
import { updatePetState } from '@/redux/slices';
import React, { useState } from 'react';
import { supabase } from '../../../../supabase';
import { AuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [sentence, setSentence] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();

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
    dispatch(updatePetState(sentence));
    router.refresh();
  };
  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='bg-white shadow-md rounded md:w-1/3 w-3/4'>
          <div className='px-4 py-3 rounded bg-accent'>
            <h3 className='text-lg text-white font-semibold'>{isLogin ? 'Login' : 'Register'}</h3>
          </div>
          <div className='modal-body p-4'>
            {isLogin ? (
              <p className='text-sm text-zinc-500'>
                If you wish to Register &gt;&gt;{' '}
                <span className='text-accent' onClick={() => setIsLogin(false)}>
                  Switch to Registration mode
                </span>
              </p>
            ) : (
              <p className='text-sm text-zinc-500'>
                If you wish to Login &gt;&gt;{' '}
                <span className='text-accent' onClick={() => setIsLogin(true)}>
                  Switch to Login mode
                </span>
              </p>
            )}
            <form onSubmit={handleAuth}>
              <div className='mt-4 mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
                  Email:
                </label>
                <input
                  type='text'
                  value={email}
                  required
                  id='email'
                  className='block w-full p-2 border-2 border-blue-500 rounded'
                  placeholder='Email...'
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
                  placeholder='Passoword...'
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
                  placeholder='E.g, I want to have cats!'
                  onChange={(e) => setSentence(e.target.value)}
                />
              </div>
              <div className='flex justify-end'>
                <button type='submit' className='bg-accent hover:bg-tahiti text-white font-bold py-2 px-4 rounded'>
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
