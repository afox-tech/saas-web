import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-06-30.basil",
    typescript: true,
});

export const getStripeSession = async ({
    priceId,
    domainUrl,
    customerId,
}: {
    priceId: string;
    domainUrl: string;
    customerId: string;
}) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        billing_address_collection: "auto",
        customer: customerId,
        customer_update: {
            name: "auto",
            address: "auto",
        },
        success_url: `${domainUrl}/payment/success`,
        cancel_url: `${domainUrl}/payment/cancelled`,
    });

    return session.url as string;
};

export async function createCustomerPortal(
    customerId: string
): Promise<string> {
    const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
    });

    return portalSession.url as string;
}
