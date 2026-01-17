// src/components/layout/header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, LogIn, UserPlus, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-3">
            <Logo className="h-8 w-8" />
            <span className="hidden font-bold text-xl sm:inline-block font-headline text-gradient">
              CollabForge
            </span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary relative group",
                  pathname === link.href ? "text-primary" : "text-foreground/70"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-card/95 backdrop-blur">
            <Link
              href="/"
              className="mb-6 flex items-center space-x-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Logo className="h-8 w-8" />
              <span className="font-bold text-xl font-headline text-gradient">CollabForge</span>
            </Link>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "transition-colors hover:text-primary text-lg",
                    pathname === link.href ? "text-primary" : "text-foreground/70"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/40 space-y-3">
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Link>
                </Button>
                <Button asChild className="w-full gradient-bg">
                  <Link href="/register">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="flex items-center space-x-3 md:hidden">
          <Logo className="h-8 w-8" />
          <span className="font-bold text-lg font-headline text-gradient">
            CollabForge
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>
            <Button size="sm" asChild className="gradient-bg font-semibold">
              <Link href="/register">
                <Zap className="mr-2 h-4 w-4" />
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
