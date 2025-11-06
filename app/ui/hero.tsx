import Image from "next-export-optimize-images/image";

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center w-screen">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
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
