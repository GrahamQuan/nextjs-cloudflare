import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='h-[56px] border-b'>
      <div className='max-w-6xl h-full flex items-center gap-5 mx-auto'>
        <Link href='/' className='hover:text-teal-500'>
          Home
        </Link>
        <Link href='/about' className='hover:text-teal-500'>
          About
        </Link>
      </div>
    </nav>
  );
}
