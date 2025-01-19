import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  message: string
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const posts = await fetch(`https://example.com/cache/posts.json`)
  const postsText = await posts.text()

  res.status(200).json({ message: postsText })
}