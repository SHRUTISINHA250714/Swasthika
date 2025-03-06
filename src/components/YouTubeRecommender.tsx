"use client";

import { useState } from "react";

interface VideoData {
    title: string;
    description: string;
    url: string;
    likes: number;
    thumbnail: string;
}

export default function YouTubeRecommender() {
    const [query, setQuery] = useState<string>("");
    const [videos, setVideo] = useState<VideoData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchVideo = async () => {
        if (!query) return;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/youtube?query=${query}`);
            const data = await response.json();
            console.log(data.videos);
            // const newData: VideoData = {
            //     title: data[0].title,
            //     description: data[0].description,
            //     url: data[0].url,
            //     likes: data[0].likes,
            //     thumbnail: data[0].thumbnail,

            // }

            if (response.ok) {
                setVideo(data.videos);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError(`Failed to load video: ${err}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Find the Best Rehab Video</h2>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter rehab exercise (e.g., hand flexibility)"
                className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={fetchVideo}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:bg-gray-400"
                disabled={loading}
            >
                {loading ? "Loading..." : "Search"}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {videos && videos.map( (video, index)=> (
                <div key={index} className="mt-6 bg-gray-100 p-4 rounded-lg">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-auto rounded-md" />
                    <h3 className="text-lg font-bold mt-2">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                    <p className="text-sm text-gray-500">👍 {video.likes} likes</p>
                    <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 text-blue-500 underline"
                    >
                        Watch on YouTube
                    </a>
                </div>
            ))}
        </div>
    );
}
