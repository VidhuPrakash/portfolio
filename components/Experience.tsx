import { Calendar, MapPin } from 'lucide-react'
import { experiences } from '@/lib/data'
import ClientAnimationWrapper from './ClientAnimationWrapper'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-vintage-section">
      <div className="max-w-4xl mx-auto">
        <ClientAnimationWrapper>
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-vintage-text mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-vintage-accent mx-auto" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="bg-vintage-card border border-vintage-border p-8 hover:border-vintage-accent transition-all duration-300 hover:scale-[1.02] fade-in hover-lift glow-effect"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-vintage-text font-mono mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-vintage-accent font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 text-vintage-muted mt-2 md:mt-0">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-vintage-muted mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-vintage-accent uppercase tracking-wide font-mono">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-vintage-accent mr-2">•</span>
                        <span className="text-vintage-muted text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ClientAnimationWrapper>
      </div>
    </section>
  )
}
