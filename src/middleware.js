import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    try {
        const token = request.cookies.get('access')
    
        if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
        }
      } catch (error) {
        return NextResponse.redirect(new URL('/', request.url))
    }
 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/funcionarios/:path*',
}