import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl; // Get the current pathname from the request URL
    return NextResponse.rewrite(new URL(`${pathname}/1`, request.url)); // Redirect to the same pathname with "/1" appended
}

export const config = {
    matcher: "/category/:alias",
};
