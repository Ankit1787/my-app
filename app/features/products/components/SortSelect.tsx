"use client"
import { usePathname, useSearchParams ,useRouter} from 'next/navigation';
import React from 'react'

const SortSelect = () => {
    const router = useRouter();
    const searchParams =useSearchParams();
    const pathname= usePathname();

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', sort);
    router.push(`${pathname}?${params.toString()}`);
  }
  return (
    <div>SortSelect
        <select onChange={(e) => handleSortChange(e.target.value)} defaultValue={searchParams.get('sort') || ''}>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
        </select>
    </div>
  )
}

export default SortSelect