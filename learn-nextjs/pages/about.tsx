import { useRouter } from 'next/router'
import  React from 'react'

export default function AboutPage () {

  const router = useRouter();
  console.log('About query router', router.query);

  return (
    <div>
      <h1>About Page 1</h1>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
