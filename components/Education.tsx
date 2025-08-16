import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'
import { education } from '@/lib/data'
import ClientAnimationWrapper from './ClientAnimationWrapper'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-vintage-section">
      <div className="max-w-4xl mx-auto">
        <ClientAnimationWrapper>
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-vintage-text mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-vintage-accent mx-auto" />
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-vintage-card border border-vintage-border p-8 hover:border-vintage-accent transition-all duration-300 hover:scale-[1.02] fade-in hover-lift glow-effect"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-start space-x-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-vintage-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-vintage-text font-mono mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-vintage-accent font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-vintage-muted mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span className="font-mono text-sm">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-vintage-muted mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-vintage-accent uppercase tracking-wide font-mono">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-vintage-accent mr-2 mt-1">•</span>
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
