import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCategorias, publicos } from '@/data/catalogo'
import { site } from '@/data/site'
import { RevealText } from '@/components/motion/reveal-text'
import { Reveal } from '@/components/motion/reveal'
import { ScrollProgress } from '@/components/motion/scroll-progress'
import { SimboloFundo } from '@/components/motion/simbolo-fundo'
import { LineReveal } from '@/components/motion/line-reveal'
import { PainelTrilha } from '@/components/site/painel-trilha'
import { MOTION } from '@/lib/motion'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <section className="hero-section container-site">
        <SimboloFundo />
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow glass">{site.inicio.eyebrow}</span>
          </Reveal>
          <RevealText as="h1" segmentos={site.inicio.titulo} modo="letters" className="display-title" aguardarAbertura />
          <RevealText
            as="p"
            segmentos={[{ texto: site.inicio.subtitulo }]}
            modo="words"
            className="reading-width"
            aguardarAbertura
          />
        </div>
      </section>

      <section className="pathways-section container-site" aria-label={site.ui.escolhaTrilha}>
        <SimboloFundo secundario />
        <div className="pathways-grid">
          {publicos.map((publico, index) => (
            <Reveal key={publico.slug} atraso={index * MOTION.stagger} aguardarAbertura>
              <PainelTrilha
                publico={publico}
                categorias={getCategorias(publico.slug).map((categoria) => categoria.titulo)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="process-section">
        <SimboloFundo secundario />
        <div className="container-site">
          <div className="process-heading">
            <RevealText as="h2" segmentos={[{ texto: site.inicio.comoFuncionaTitulo }]} modo="words" className="section-title" />
          </div>
          <LineReveal />
          <div className="process-grid">
            {site.inicio.passos.map((passo, index) => (
              <Reveal key={passo.numero} atraso={index * MOTION.stagger} className="process-step">
                <span>{passo.numero}</span>
                <h3>{passo.titulo}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview">
        <SimboloFundo secundario />
        <div className="container-site about-preview-grid">
          <div>
            <Reveal>
              <span className="eyebrow glass">{site.inicio.sobreEyebrow}</span>
            </Reveal>
            <RevealText as="h2" segmentos={site.inicio.sobreTitulo} modo="words" className="section-title" />
            <Reveal>
              <p>{site.inicio.sobreTexto}</p>
              <Link className="text-link" href="/sobre">
                {site.inicio.sobreLink}<ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Reveal className="about-seal">
            <Image
              src="/brand/logo-selo.png"
              alt={site.ui.altSelo}
              width={310}
              height={310}
              sizes="(max-width: 700px) 150px, 310px"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
