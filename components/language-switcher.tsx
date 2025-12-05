"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-transparent">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${
            language === "en" ? "bg-primary/20 text-primary" : "text-foreground hover:text-primary"
          }`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("bn")}
          className={`cursor-pointer ${
            language === "bn" ? "bg-primary/20 text-primary" : "text-foreground hover:text-primary"
          }`}
        >
          বাংলা (Bangla)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
