import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

// import {GetStaticProps} from 'next';

export interface PostListpageProps {
  posts: any[],
}

export default function PostListpage ({posts}: PostListpageProps) {
  return (
    <div>
      <h1>Post List</h1>
      {console.log('Log phia client', posts)}
      <ul>
        {
          posts.map((post) => 
            <li key = {post.id}>
              <Link href={`/posts/${post.id}`}>
               {post.title}
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListpageProps> = async (context: GetStaticPropsContext) => {
  //getStaticProps ow server side va run khi build-time
  // console.log("log phia server");
   const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();

//  console.log(data);
  console.log("log phia server 1");
  return {
    props: {
      posts: data.data.map((x: any )=> ({id: x.id, title: x.title})),
    }
  }
}
