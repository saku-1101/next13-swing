import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { LoginForm } from '@/components/atoms/LoginForm';
import { Database } from '../../../supabase/types';
import { Session } from '@supabase/auth-helpers-nextjs';

export default async function Login() {
  return <LoginForm />;
}
