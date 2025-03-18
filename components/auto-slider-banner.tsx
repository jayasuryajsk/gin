"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Add type declaration for the YouTube iframe API
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export function AutoSliderBanner() {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script tag for YouTube iframe API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    let player: any;

    // This function will be called by the YouTube API when it's ready
    window.onYouTubeIframeAPIReady = () => {
      if (!playerRef.current) return;

      player = new window.YT.Player('player-container', {
        videoId: 'Mdf3Pe9uXLE',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          rel: 0,
          showinfo: 0
        },
        events: {
          'onReady': (event: any) => {
            event.target.playVideo();
            event.target.mute();
          },
          'onStateChange': (event: any) => {
            // When video ends (state=0), restart it
            if (event.data === 0) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          }
        }
      });
    };

    return () => {
      // Clean up
      if (player) {
        player.destroy();
      }
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 youtube-container">
        <div id="player-container" ref={playerRef} className="absolute inset-0"></div>
      </div>
      
      {/* Fallback for JavaScript disabled browsers */}
      <noscript>
        <div className="absolute inset-0 overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/Mdf3Pe9uXLE?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=Mdf3Pe9uXLE" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%'
            }}
          ></iframe>
        </div>
      </noscript>
      
      {/* Blue overlay to match bottle color */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white text-center mb-2 sm:mb-4 font-serif">
            <span className="block">Blue Wing</span>
            <span className="gradient-text">Australian Gin</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 text-center mb-6 sm:mb-8">
            Where tradition meets innovation in the heart of Australia
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link href="/products/native-citrus-gin">
              <Button size="lg" className="bg-[#00c8d6] hover:bg-[#00c8d6]/90 text-white border-none py-2 px-4 text-sm sm:text-base">
                SHOP NOW
              </Button>
            </Link>
            <Link href="/recipes">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 py-2 px-4 text-sm sm:text-base">
                EXPLORE RECIPES
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

