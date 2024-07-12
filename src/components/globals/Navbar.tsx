"use client"

import * as React from "react"
import Link from "next/link"

const Navigation = () => {
    return (
        <nav className="flex space-x-4">
            <Link href="/" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                Posts
            </Link>
            <Link href="/categories" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                Categories
            </Link>
        </nav>
    )
}

export default Navigation;