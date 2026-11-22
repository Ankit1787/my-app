import React from 'react'

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};
const BlogsPage = async ({ params }: Props) => {
    const {slug} =  await params;   
  return (
    <div>BlogsPage {slug.join(' / ')}</div>
  )
}

export default BlogsPage