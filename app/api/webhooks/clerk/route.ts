import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req);

        // Do something with payload
        // For this guide, log payload to console
        const { id } = evt.data;
        const eventType = evt.type;
        console.log(
            `Received webhook with ID ${id} and event type of ${eventType}`
        );
        console.log("Webhook payload:", evt.data);

        if (evt.type === "user.created") {
            const { id, email_addresses, first_name, last_name } = evt.data;
            try {
                const user = await prisma.user.create({
                    data: {
                        id,
                        email: email_addresses[0].email_address,
                        name: `${first_name} ${last_name}`,
                    },
                });
                console.log("User created:", user);
            } catch (error) {
                console.error("Error creating user:", error);
                return new Response("Error creating user", { status: 400 });
            }
        }

        return new Response("Webhook received", { status: 200 });
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return new Response("Error verifying webhook", { status: 400 });
    }
}
