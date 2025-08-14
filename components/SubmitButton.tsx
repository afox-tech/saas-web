"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending}>
            {pending ? (
                <>
                    <Loader2 className="size-4 animate-spin mr-2" />
                    Updating...
                </>
            ) : (
                "Submit"
            )}
        </Button>
    );
}
