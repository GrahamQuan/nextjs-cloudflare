import { db } from '@/db/db';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const res = await db.message.findUnique({ where: { id } });
  return NextResponse.json(res);
}
