
export function RiverHeader() {
  return (
    <header className="relative h-[420px] overflow-hidden bg-[#10231e] text-white">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/river.mp4" type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-gradient-to-r from-[#103B66]/75 via-[#103B66]/45 to-[#8A9BAA]/25" />

      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-16">
        <h1 className="text-4xl font-bold tracking-[0.2em]">
          KIGWA SPRING LIMITED
        </h1>

        <div className="mt-5 space-y-2 text-sm text-white/95">
          <p>P.O. BOX 2375-00900, KIAMBU, KENYA, E.A.</p>
          <p>Tel: +254 101 628 200</p>
          <p>Email: pmkinuthia3@yahoo.com</p>
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/90">
          Official Correspondence
        </p>
      </div>
    </header>
  );
}
