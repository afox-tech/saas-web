import Image from "next/image";
import thumbnail1 from "@/app/assets/1.png";
import thumbnail2 from "@/app/assets/2.png";
import thumbnail3 from "@/app/assets/3.png";
import { Pencil, Layout, Eye } from "lucide-react";
import AnimationContainer from "../global/animation-container";

const StepsArray = [
    {
        icon: Pencil,
        step: "Step 1",
        description: "Upload your thumbnail and details",
        image: thumbnail1,
    },
    {
        icon: Layout,
        step: "Step 2",
        description: "Choose your layout",
        image: thumbnail2,
    },
    {
        icon: Eye,
        step: "Step 3",
        description: "Preview your thumbnail",
        image: thumbnail3,
    },
];

export function Steps() {
    return (
        <AnimationContainer className="md:mx-48 mt-20 relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
            <div className="absolute left-1/3 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
            <div className="absolute right-1/3 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />

            <AnimationContainer delay={0.2} className="grid md:grid-cols-3">
                {/* Step 1 */}
                {StepsArray.map((step, index) => (
                    <div className="relative group p-8 transition-all duration-300 bg-background/30 hover:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl">
                        <div className="mb-6 inline-flex items-center gap-3 p-4 rounded-2xl border border-primary/10">
                            <div className="p-2 bg-primary/10 rounded-xl">
                                <Pencil className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-medium text-primary tracking-wider">
                                {step.step}
                            </h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-8">
                            {step.description}
                        </p>
                        <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-white/5">
                            <Image
                                src={step.image}
                                alt={step.description}
                                fill
                                className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </AnimationContainer>
        </AnimationContainer>
    );
}
