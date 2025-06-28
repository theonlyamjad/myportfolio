'use client';

export default function BackgroundVideo() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <video autoPlay loop muted className="w-full h-full object-cover object-center">
        <source src="/bgvid.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 backdrop-blur-md"></div>
    </div>
  );
}
