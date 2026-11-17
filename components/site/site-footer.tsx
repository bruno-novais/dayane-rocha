import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { site } from '@/data/site'
import { RevealText } from '@/components/motion/reveal-text'
import { AvisoSaude } from '@/components/site/aviso-saude'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-rule" />
      <RevealText
        as="p"
        modo="letters"
        className="footer-giant"
        decorativo
        segmentos={[{ texto: site.nome }]}
      />
      <div className="container-site footer-inner">
        <Link className="footer-brand" href="/" aria-label={site.ui.voltarInicio}>
          <Image src="/brand/logo-lockup.svg" alt={site.nome} width={170} height={56} unoptimized />
        </Link>
        <nav className="footer-links" aria-label={site.ui.navegacaoRodape}>
          {site.navegacao.map((item) => (
            <Link href={item.href} key={item.href}>{item.rotulo}</Link>
          ))}
          {site.instagram && (
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label={site.ui.linkInstagram}>
              Instagram <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
          {site.whatsapp && (
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={site.ui.linkWhatsApp}>
              WhatsApp <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
        </nav>
        <div className="footer-meta">
          <div className="footer-legal">
            <p>© {year} {site.nome}. {site.ui.anoDireitos}</p>
            {site.crefito && <p>{site.crefito}</p>}
          </div>
          <AvisoSaude />
        </div>
      </div>
    </footer>
  )
}
