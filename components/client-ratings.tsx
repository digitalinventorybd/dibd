"use client"

export function ClientRatings() {
  const platforms = ["Trustpilot", "DesignRush", "Clutch", "Google", "Sortlist", "GoodFirms", "Facebook Reviews"]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 animate-fade-in-up text-balance">
          Explore Client Ratings Showcase
        </h2>

        <div className="relative">
          {/* Decorative leaf left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 opacity-20">
            <svg viewBox="0 0 100 100" className="text-gray-700">
              <path d="M20 80 Q30 50 20 20 Q40 30 50 20 Q40 50 50 80 Q30 70 20 80" fill="currentColor" />
            </svg>
          </div>

          {/* Decorative leaf right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 opacity-20">
            <svg viewBox="0 0 100 100" className="text-gray-700">
              <path d="M80 80 Q70 50 80 20 Q60 30 50 20 Q60 50 50 80 Q70 70 80 80" fill="currentColor" />
            </svg>
          </div>

          {/* Rating platforms */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 py-8">
            {platforms.map((platform, index) => (
              <div
                key={platform}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base font-medium">
                  {platform}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
