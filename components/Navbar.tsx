"use client";
import Link from "next/link";

export const Navbar = () => {
    const isSigned = true;

    return (
        <nav className="bg-background border-b">
            <div className="max-w-7xl mx-auto flex justify-between h-16">
                <Link href="/" className="p-2 text-3xl font-medium">
                    SaaS
                </Link>
                {isSigned ? (
                    <>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/settings">Settings</Link>
                        <Link href="/logout">Logout</Link>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
};
