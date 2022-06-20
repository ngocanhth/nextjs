import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostlPageProps {
  post: any
}

export default function PostDetailPage({post}: PostlPageProps) {
    const router = useRouter();
    if(!post) return null;

    return (
    <div>
     <h2>Create Posts Detail Page</h2>
     <p>Query: {JSON.stringify(router.query)}</p> *
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\n Get staticpath');

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  return {
    paths: data.data.map((post: any )=> ({params: {postId: post.id}})),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostlPageProps> = async (context: GetStaticPropsContext) => {
  console.log('\n Get static props', context.params?.postId);
  const posId = context.params?.postId;
  
  if(!posId) return {notFound: true};

   const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${posId}`);
    const data = await response.json();

//  console.log(data);
  // console.log("log phia server 1");



  return {
    props: {
      post: data,
    }
  }
}
