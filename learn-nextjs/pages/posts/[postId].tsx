import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
}

export default function PostDetailPage (props: PostDetailPageProps) {
    const router = useRouter();
    return (
    <div>
     <h2>Create Posts Detail Page</h2>
     <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
