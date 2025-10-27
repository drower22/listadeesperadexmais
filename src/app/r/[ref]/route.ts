import { NextRequest, NextResponse } from 'next/server'

function isAllowed(ref: string | undefined | null): boolean {
  if (!ref) return false
  const allow = process.env.AFFILIATE_ALLOWLIST || ''
  const list = allow.split(',').map((s) => s.trim()).filter(Boolean)
  return list.includes(ref)
}

export async function GET(req: NextRequest, { params }: { params: { ref: string } }) {
  const ref = params.ref
  const url = new URL(req.nextUrl)
  const destination = new URL('/', url.origin)

  const res = NextResponse.redirect(destination.toString(), 302)
  if (isAllowed(ref)) {
    destination.searchParams.set('ref', ref)
    res.headers.set('Location', destination.toString())
    res.cookies.set('affiliate_ref', ref, {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      secure: true,
      maxAge: 60 * 60 * 24 * 90,
    })
  }
  return res
}
