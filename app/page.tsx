import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-background text-foreground">
            <main className="container mx-auto px-4 pt-12 text-center">
                <h1 className="text-4xl font-bold md:text-6xl mb-4">
                    Micro SaaS Application
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    Description of our micro SaaS application.
                </p>
                <div className="flex space-x-4 justify-center">
                    <Link href="/dashboard">
                        <Button>Get Started</Button>
                    </Link>
                    <Link href="/pricing">
                        <Button variant="outline">View Pricing</Button>
                    </Link>
                </div>
                <img src="" alt="" className="w-full h-auto mt-8" />
            </main>
        </div>
    );
}
