"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Themes } from "@/lib/utils/theme";
import { Skeleton } from "../Skeleton";

export function ThemeSwitcher() {
	const [ mounted, setMounted ] = useState(false);
	const { theme, setTheme } = useTheme();

	const isLightTheme = theme === Themes.Light;

	const onClick = () => {
		setTheme(isLightTheme ? Themes.Dark : Themes.Light);
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Skeleton className="h-[24px] w-[24px] rounded-full" />;
	}

	return <button onClick={onClick}>{isLightTheme ? <Sun /> : <Moon />}</button>;
}
