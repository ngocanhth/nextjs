// import { Header } from '@/components/common/header';

import { useRouter } from 'next/router'
import  React from 'react'
// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('@/components/common/header') as any, {ssr: false});

import dynamic from 'next/dynamic'

 const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export default function AboutPage () {

  const router = useRouter();
  console.log('About query router', router.query);

  return (
    <div>
      <h1>About Page 1</h1>
      <Header />
    </div>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
