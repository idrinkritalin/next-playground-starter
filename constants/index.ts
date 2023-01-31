const DEV = process.env.NODE_ENV !== 'production'

export const SERVER = DEV
  ? 'http://localhost:3000'
  : `https://${process.env.VERCEL_URL}`
