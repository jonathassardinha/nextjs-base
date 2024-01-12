import type { NextRequest } from "next/server";
// TODO - First run the `dev` script to generate this type and uncomment the import below
// import type { Database } from "@/lib/utils/database.types";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	// Create a Supabase client configured to use cookies
	// TODO - After generating the type and importing it uncomment the type coertion below
	const supabase = createMiddlewareClient/*<Database>*/({ req, res });

	// Refresh session if expired - required for Server Components
	await supabase.auth.getSession();

	return res;
}

// Ensure the middleware is only called for relevant paths.
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!_next/static|_next/image|favicon.ico).*)",
	],
};
