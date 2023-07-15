import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('미들웨어 실행중!');

    // 전달된 req에 nextUrl의 pathname이 /products/1004로 시작하는 경우
    if (request.nextUrl.pathname.startsWith('/products/1004')) {
        console.log('미들웨어 경로 redirect!');
        return NextResponse.redirect(new URL('/products', request.nextUrl));
    }
}

// 모든 경로에 실행되지 않게 설정
export const config = {
    matcher: '/products/:path*'
};
