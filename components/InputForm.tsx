'use client';

import { NEXT_PUBLIC_API_URL } from '@/lib/env';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useRef, useState } from 'react';

export default function InputForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<any>();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setIsLoading(true);
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: formData.get('input') }),
    });
    setIsLoading(false);
    formRef.current.reset();
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <input
        type='text'
        name='input'
        placeholder='input here'
        className='border'
      />
      <button
        type='submit'
        disabled={isLoading}
        className='text-teal-500 border border-teal-500 px-1'
      >
        {isLoading ? 'loading' : 'submit'}
      </button>
    </form>
  );
}
