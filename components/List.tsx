import { NEXT_PUBLIC_API_URL } from '@/lib/env';
import { Message } from '@prisma/client';
import Link from 'next/link';

export const revalidate = 3600;

export default async function List() {
  const res = (await (
    await fetch(`${NEXT_PUBLIC_API_URL}/api/messages`)
  ).json()) as Message[];

  return (
    <div>
      <h2>DataList: (click below item will go to detail page)</h2>
      <ul>
        {res.map((item) => (
          <li key={item.id} className='hover:text-teal-500'>
            <Link href={`/detail/${item.id}`}>{item.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
