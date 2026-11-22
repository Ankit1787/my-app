import React from 'react'

type Props = {
    params: Promise<{
        slug: string[];
    }>
};
const page = async ({ params }: Props) => {
    const { slug } = await params;
    if (!slug || slug.length === 0) {
        return <div>page</div>
    }
  return (
    <div>page {slug.join(' / ')}</div>
  )
}

export default page