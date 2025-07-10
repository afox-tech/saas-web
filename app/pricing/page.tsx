import { Button } from "@/components/ui/button";

const isSubscribed = false;

export default async function Pricing() {
    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                Subscription Plan
            </h1>
            <div className="space-y-4 rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight mb-4">
                    Full Access
                </h2>
                <p className="leading-7">Access to all features</p>
                <p className="text-2xl font-bold">$9.99/month</p>
                {isSubscribed ? (
                    <form>
                        <Button type="submit">Manage Subscription</Button>
                    </form>
                ) : (
                    <form>
                        <Button type="submit">Subscribe</Button>
                    </form>
                )}
            </div>
        </div>
    );
}
