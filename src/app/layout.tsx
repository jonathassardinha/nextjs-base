import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/components/ThemeProvider";
import { ThemeSwitcher } from "@/lib/components/ThemeSwitcher/ThemeSwitcher";

const fontSans = Inter({
	subsets: [ "latin" ],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Nextjs base",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"flex min-h-screen flex-col bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<nav className="flex justify-end border-b border-border p-4 md:px-8">
						<ThemeSwitcher />
					</nav>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
