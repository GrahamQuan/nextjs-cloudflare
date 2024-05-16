import { NEXT_PUBLIC_API_URL } from '@/lib/env';
import { Message } from '@prisma/client';

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = (await (
    await fetch(`${NEXT_PUBLIC_API_URL}/api/messages/${id}`)
  ).json()) as Message;

  return (
    <div>
      <h1>detail page (dynamic page)</h1>
      <p>content: {res.content}</p>
    </div>
  );
}
