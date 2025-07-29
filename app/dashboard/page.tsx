import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const subscription = await prisma.subscription.findUnique({
        where: {
            userId,
        },
        select: { status: true },
    });

    if (subscription?.status === "active") {
        return (
            <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md">
                <p className="text-lg mb-6">
                    You are not subscribed to our service
                </p>
                <Link href="/pricing">
                    <Button>Subscribe Now</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6">Subscribed to the app</p>
        </div>
    );
}
