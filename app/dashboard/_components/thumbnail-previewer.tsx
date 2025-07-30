"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Laptop, Tablet, Smartphone } from "lucide-react";
import { useTheme } from "next-themes";

const placeholderImage = "/placeholder.svg?height=720&width=1280";

const randomVideos = [
    { title: "", channel: "", views: "", age: "", thumbnail: "" },
];

interface ThumbnailPreviewer {
    channelNameSaved: string;
}

export default function ThumbnailPreviewer({
    channelNameSaved,
}: ThumbnailPreviewer) {
    const [title, setTitle] = useState("");
    const [channelName, setChannelName] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [videos, setVideos] = useState([...randomVideos]);
    const [layout, setLayout] = useState("desktop");

    useEffect(() => {
        setVideos([
            {
                title,
                channel: channelName,
                views: "0",
                age: "Just Now",
                thumbnail: thumbnailUrl || placeholderImage,
            },
            ...randomVideos,
        ]);
    }, [title, channelName, thumbnailUrl]);

    const randomizeOrder = () => {
        setVideos((prevVideos) =>
            [...prevVideos].sort(() => Math.random() - 0.5)
        );
    };

    const getGridClass = () => {
        switch (layout) {
            case "desktop":
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
            case "tablet":
                return "grid-cols-1 sm:grid-cols-2 max-w-[1100px] mx-auto";
            case "mobile":
                return "grid-cols-1 max-w-[340px] mx-auto";
            default:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
        }
    };

    return (
        <div className="relative w-full h-full bg-background text-foreground">
            {/* Input and Preview section */}
            <div className="grid md:grid-cols-2 gap-6 border-b border-white/20 pb-12">
                <div className="space-y-4">
                    <h3>Input</h3>
                    <Input
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                    setThumbnailUrl(reader.result as string);
                                };
                                reader.readAsDataURL(file);
                            }
                        }}
                    />
                    <Input
                        placeholder={channelNameSaved || "Channel Name"}
                        value={channelName || channelNameSaved}
                        onChange={(e) => setChannelName(e.target.value)}
                    />
                </div>
                <div>
                    <h3 className="text-lg font-medium leading-6 mb-4">
                        Thumbnail Preview
                    </h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden w-[60%]">
                        <img
                            src={thumbnailUrl || placeholderImage}
                            alt="Thumbnail"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* Product - Thumbnail Previewer section */}

            {/* Randomize Order and Layout Selection */}
            <div className="mb-6 flex items-center space-x-4 max-w-[1280px] mx-auto">
                <Button onClick={randomizeOrder}>Randomize Order</Button>
                <div className="flex items-center space-x-2 rounded-full p-1 shadow-sm">
                    <Button
                        variant={layout === "desktop" ? "default" : "ghost"}
                        size="icon"
                        onClick={() => setLayout("desktop")}
                        aria-label="Desktop layout"
                    >
                        <Laptop className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={layout === "tablet" ? "default" : "ghost"}
                        size="icon"
                        onClick={() => setLayout("tablet")}
                        aria-label="Tablet layout"
                    >
                        <Tablet className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={layout === "mobile" ? "default" : "ghost"}
                        size="icon"
                        onClick={() => setLayout("mobile")}
                        aria-label="Mobile layout"
                    >
                        <Smartphone className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Video Cards for Thumbnail Previewer */}
            <div
                className={`grid ${getGridClass()} gap-6 ${
                    layout === "mobile" ? "w-full" : ""
                }`}
            >
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden shadow-lg rounded-lg ${
                            layout === "mobile"
                                ? "max-w-[340px] mx-auto w-full"
                                : ""
                        }`}
                    >
                        <div className="relative pb-[55%]">
                            <img
                                src={video.thumbnail || placeholderImage}
                                alt={video.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-start space-x-3">
                                <div>
                                    <img
                                        src={
                                            video.thumbnail || placeholderImage
                                        }
                                        alt="channel avatar"
                                        className="w-9 h-9 rounded-full"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium truncate font-heading text-[#F1F1F1]">
                                        {video.title}
                                    </p>
                                    <p className="text-sm text-[#A1A1AA]">
                                        {video.channel || channelNameSaved}
                                    </p>
                                    <p className="text-sm text-[#A1A1AA]">
                                        {video.views || "0"} views - {video.age}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
