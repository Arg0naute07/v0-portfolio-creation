export function Skills() {
  const skills = [
    { name: "Windows", percentage: 25 },
    { name: "Windows Serveur", percentage: 20 },
    { name: "N8N", percentage: 15 },
    { name: "DHCP", percentage: 10 },
    { name: "VLAN", percentage: 10 },
    { name: "VMware", percentage: 12 },
    { name: "Cisco", percentage: 8 },
  ]

  const totalPercentage = skills.reduce((sum, skill) => sum + skill.percentage, 0)
  let currentAngle = 0

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-balance text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Compétences Techniques
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Pie Chart */}
          <div className="flex items-center justify-center">
            <svg width="280" height="280" viewBox="0 0 280 280" className="drop-shadow-lg">
              <defs>
                <style>{`
                  .skill-segment { transition: opacity 0.3s; }
                  .skill-segment:hover { opacity: 0.8; }
                `}</style>
              </defs>

              {/* Background circle */}
              <circle
                cx="140"
                cy="140"
                r="110"
                fill="hsl(var(--background))"
                stroke="hsl(var(--border))"
                strokeWidth="2"
              />

              {/* Pie segments */}
              {skills.map((skill, index) => {
                const radius = 100
                const sliceAngle = (skill.percentage / 100) * 360
                const startAngle = currentAngle
                const endAngle = currentAngle + sliceAngle

                const colors = [
                  "hsl(0, 84%, 60%)", // Windows - Red
                  "hsl(207, 89%, 61%)", // Windows Server - Light Blue
                  "hsl(0, 84%, 60%)", // N8N - Red
                  "hsl(333, 100%, 73%)", // DHCP - Pink
                  "hsl(98, 50%, 60%)", // VLAN - Green
                  "hsl(0, 84%, 60%)", // VMware - Red
                  "hsl(207, 89%, 61%)", // Cisco - Light Blue
                ]

                const startRad = (startAngle * Math.PI) / 180
                const endRad = (endAngle * Math.PI) / 180

                const x1 = 140 + radius * Math.cos(startRad)
                const y1 = 140 + radius * Math.sin(startRad)
                const x2 = 140 + radius * Math.cos(endRad)
                const y2 = 140 + radius * Math.sin(endRad)

                const largeArcFlag = sliceAngle > 180 ? 1 : 0

                const pathData = [
                  `M 140 140`,
                  `L ${x1} ${y1}`,
                  `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                  `Z`,
                ].join(" ")

                currentAngle = endAngle

                return (
                  <path
                    key={skill.name}
                    d={pathData}
                    fill={colors[index]}
                    stroke="white"
                    strokeWidth="2"
                    className="skill-segment cursor-pointer"
                  />
                )
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            {skills.map((skill, index) => {
              const colors = [
                "bg-red-500",
                "bg-blue-400",
                "bg-red-500",
                "bg-pink-400",
                "bg-green-400",
                "bg-red-500",
                "bg-blue-400",
              ]
              return (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${colors[index]}`}></div>
                  <span className="text-card-foreground font-medium">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ces compétences techniques ont été acquises lors de ma formation en BTS SIO et développées pendant mes
            expériences de projets scolaires et mon stage professionnel chez Angel App.
          </p>
        </div>
      </div>
    </section>
  )
}
