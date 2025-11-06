import Image from "next-export-optimize-images/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1>Daniel Galán</h1>
          <p>Some content</p>
        </div>
        <div className="hidden md:block max-w-lg">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={1024}
            height={1536}
          />
        </div>
      </div>
    </section>
  );
}
