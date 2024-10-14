import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    return (<Button size={"icon"} variant={"outline"} onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
        }} className="bg-transparent">
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
      <span className="sr-only">Toggle theme</span>
    </Button>);
}
