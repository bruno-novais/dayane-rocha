import { AvisoSaude } from '@/components/site/aviso-saude'
import { Reveal } from '@/components/motion/reveal'

export function HealthSection() {
  return (
    <section className="container-site health-section">
      <Reveal>
        <AvisoSaude completo />
      </Reveal>
    </section>
  )
}
