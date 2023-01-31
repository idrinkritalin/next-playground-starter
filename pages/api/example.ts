import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{
    foo: string
  }>
) {
  res.status(200).json({
    foo: 'hello',
  })
}
