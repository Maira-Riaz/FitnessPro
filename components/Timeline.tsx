export default function Timeline() {
    const milestones = [
      { year: 2010, event: "FitnessPro founded" },
      { year: 2013, event: "Opened our first dedicated training facility" },
      { year: 2016, event: "Launched online coaching programs" },
      { year: 2019, event: "Expanded to multiple locations" },
      { year: 2022, event: "Introduced advanced performance testing" },
    ]
  
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-lg font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-primary pl-8 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <p className="text-lg text-gray-300">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  