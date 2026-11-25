import "server-only"

const BASE_URL = process.env.BASE_URL || "https://dummyjson.com/"

export async function fetchAPI(path: string, options?: RequestInit) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  })
  

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.statusText}`)
  }

  return res.json()
}   