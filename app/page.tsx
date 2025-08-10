import { Hero } from "@/components/landing-page/Hero";
import { Steps } from "@/components/landing-page/Steps";
import { Demo } from "@/components/landing-page/Demo";

export default function Home() {
    return (
        <main className="relative">
            <div
                className="absolute -top-0 left-0 right-0 h-[calc(100vh-80px)] dark:bg-[linear-gradient(to_right, #4a5568_1px, transparent_1px),linear-gradient(to_bottom,#4a5568_1px, transparent_1px)]
            bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            >
                <div className="relative z-10 mx-auto flex flex-col">
                    <Hero />
                    <Steps />
                    <Demo />
                </div>
            </div>
        </main>
    );
}
