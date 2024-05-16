import { db } from '@/db/db';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await db.message.findMany();
  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { content } = body as { content: string };
  const res = await db.message.create({
    data: { content },
  });
  if (res) {
    return NextResponse.json(res);
  }
}
