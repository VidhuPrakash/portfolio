import { Code, Coffee, Lightbulb } from 'lucide-react'
import ClientAnimationWrapper from './ClientAnimationWrapper'
import { personalInfo } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ClientAnimationWrapper>
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-vintage-text mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-vintage-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <p className="text-lg text-vintage-muted leading-relaxed hover:text-vintage-text transition-colors">
                {personalInfo.aboutOne}
              </p>
              <p className="text-lg text-vintage-muted leading-relaxed hover:text-vintage-text transition-colors">
                {personalInfo.aboutTwo}
              </p>

              <div className="flex space-x-4 pt-4">
                <span className="text-2xl interactive-scale cursor-pointer hover:rotate-on-hover">
                  💻
                </span>
                <span className="text-2xl interactive-scale cursor-pointer pulse-on-hover">
                  ☕
                </span>
                <span className="text-2xl interactive-scale cursor-pointer animate-float">
                  🚀
                </span>
                <span className="text-2xl interactive-scale cursor-pointer hover:rotate-on-hover">
                  ⚡
                </span>
              </div>
            </div>

            <div className="space-y-6 fade-in">
              <div className="flex items-start space-x-4 p-4 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-all duration-300 hover-lift interactive-scale glow-effect">
                <Code className="w-8 h-8 text-vintage-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-vintage-text font-mono mb-2">
                    Clean Code
                  </h3>
                  <p className="text-vintage-muted">
                    Writing maintainable, scalable, and efficient code
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-all duration-300 hover-lift interactive-scale glow-effect">
                <Lightbulb className="w-8 h-8 text-vintage-accent mt-1 pulse-on-hover" />
                <div>
                  <h3 className="font-semibold text-vintage-text font-mono mb-2">
                    Innovation
                  </h3>
                  <p className="text-vintage-muted">
                    Always exploring new technologies and methodologies
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-all duration-300 hover-lift interactive-scale glow-effect">
                <Coffee className="w-8 h-8 text-vintage-accent mt-1 rotate-on-hover" />
                <div>
                  <h3 className="font-semibold text-vintage-text font-mono mb-2">
                    Collaboration
                  </h3>
                  <p className="text-vintage-muted">
                    Working effectively with teams to deliver great products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ClientAnimationWrapper>
      </div>
    </section>
  );
}
