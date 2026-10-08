'use client'

import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Check,
  HeartPulse,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UserRound,
} from 'lucide-react'

type Screen = 'home' | 'categorias' | 'cursos'
type Profile = 'paciente' | 'fisioterapeuta'

const categories = {
  paciente: ['Dor nas Costas', 'Alongamento Preventivo', 'Tendinite e LER', 'Fortalecimento Geral'],
  fisioterapeuta: ['Raciocínio Clínico Avançado', 'Avaliação Neurofuncional', 'Cursos Práticos', 'Fichas Clínicas'],
}

const products = {
  paciente: [
    { title: '10 Minutos de Alongamento Matinal', description: 'Comece o dia com mais leveza e mobilidade, reduzindo as tensões acumuladas.', tag: 'Vídeo-Aulas', tone: 'from-[#563028] via-[#251818] to-[#111]' },
    { title: 'Protocolo Destravar a Coluna', description: 'Um guia simples e seguro para aliviar desconfortos e recuperar seus movimentos.', tag: 'Material Digital', tone: 'from-[#3b3d2c] via-[#1c1d17] to-[#111]' },
    { title: 'Fortalecimento sem Dor', description: 'Aprenda a construir força com exercícios acessíveis para a sua rotina.', tag: 'Vídeo-Aulas', tone: 'from-[#243b3a] via-[#162120] to-[#111]' },
  ],
  fisioterapeuta: [
    { title: 'Raciocínio Clínico na Prática', description: 'Aprimore suas decisões clínicas com um método claro e aplicável.', tag: 'Curso Completo', tone: 'from-[#40302b] via-[#201918] to-[#111]' },
    { title: 'Avaliação Neurofuncional', description: 'Domine os principais testes para uma avaliação mais precisa e segura.', tag: 'Vídeo-Aulas', tone: 'from-[#29353c] via-[#171e22] to-[#111]' },
    { title: 'Fichas Clínicas Inteligentes', description: 'Organize seus atendimentos e ganhe tempo com materiais prontos.', tag: 'Material Digital', tone: 'from-[#383329] via-[#1e1c16] to-[#111]' },
  ],
}

function Logo() {
  return <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e25c3d] text-white"><HeartPulse size={19} strokeWidth={2.4} /></div><div><p className="text-[15px] font-semibold leading-none tracking-tight text-white">Dayane Rocha</p><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#a3a3a3]">Fisioterapia especializada</p></div></div>
}

function Header({ onBack }: { onBack: () => void }) {
  return <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#0b0b0b]/80 px-5 py-4 backdrop-blur-md sm:px-8"><div className="mx-auto flex max-w-6xl items-center justify-between"><Logo /><button onClick={onBack} className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[#d1d1d1] transition-all duration-300 hover:border-[#e25c3d]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e25c3d]" aria-label="Voltar"><ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" /> Voltar</button></div></header>
}

function Home({ choose }: { choose: (profile: Profile) => void }) {
  return <main className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:py-16"><section className="max-w-xl"><Logo /><p className="mt-16 text-xs font-medium uppercase tracking-[0.3em] text-[#e25c3d] sm:mt-24">Seu próximo movimento começa aqui</p><h1 className="mt-5 text-6xl font-bold leading-[0.92] tracking-[-0.06em] text-white sm:text-8xl">Você<br /><span className="text-[#e25c3d]">é...</span></h1><p className="mt-8 max-w-md text-lg leading-relaxed text-[#a3a3a3]">Escolha o perfil que melhor te representa para iniciar sua jornada de evolução e cuidado.</p><div className="mt-10 flex items-center gap-3 text-xs text-[#737373]"><Sparkles size={16} className="text-[#e25c3d]" /> Um espaço pensado para o seu desenvolvimento</div></section><section aria-label="Escolha seu perfil" className="grid gap-4 sm:grid-cols-2"><button onClick={() => choose('fisioterapeuta')} className="group min-h-[300px] rounded-[2rem] border border-[#262626] bg-[#161616] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#e25c3d]/60 hover:bg-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e25c3d]"><div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e25c3d]/70 text-[#e25c3d] transition-all duration-300 group-hover:bg-[#e25c3d] group-hover:text-white"><Brain size={27} /></div><p className="mt-20 text-xl font-semibold text-white">Fisioterapeuta</p><p className="mt-3 text-sm leading-relaxed text-[#929292]">Sou profissional ou estudante e quero expandir meu conhecimento técnico.</p><ArrowRight className="mt-7 text-[#e25c3d] transition-transform duration-300 group-hover:translate-x-1" size={20} /></button><button onClick={() => choose('paciente')} className="group min-h-[300px] rounded-[2rem] border border-[#262626] bg-[#161616] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#e25c3d]/60 hover:bg-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e25c3d]"><div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e25c3d]/70 text-[#e25c3d] transition-all duration-300 group-hover:bg-[#e25c3d] group-hover:text-white"><UserRound size={27} /></div><p className="mt-20 text-xl font-semibold text-white">Paciente</p><p className="mt-3 text-sm leading-relaxed text-[#929292]">Quero entender melhor meu tratamento, aliviar dores e melhorar minha mobilidade.</p><ArrowRight className="mt-7 text-[#e25c3d] transition-transform duration-300 group-hover:translate-x-1" size={20} /></button><div className="col-span-full mt-5 flex items-center justify-center gap-2 text-xs text-[#696969]"><ShieldCheck size={15} className="text-[#e25c3d]" /> Seus dados estão protegidos e sua jornada é totalmente personalizada.</div></section></main>
}

function Categories({ profile, goBack, select }: { profile: Profile; goBack: () => void; select: () => void }) {
  const items = categories[profile]
  return <div className="min-h-screen"><Header onBack={goBack} /><main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20"><p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e25c3d]">Personalizado para você</p><h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl">Selecione uma Categoria de Interesse</h1><p className="mt-5 max-w-xl text-base leading-relaxed text-[#8d8d8d]">Encontre conteúdos selecionados para acompanhar seu momento e transformar conhecimento em movimento.</p><div className="mt-12 grid gap-4 md:grid-cols-2">{items.map((item, index) => <button key={item} onClick={select} className="group flex min-h-36 items-end justify-between rounded-3xl border border-[#262626] bg-[#161616] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#e25c3d]/60 hover:bg-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e25c3d]"><div><span className="text-xs text-[#e25c3d]">0{index + 1}</span><h2 className="mt-5 text-xl font-semibold text-white">{item}</h2></div><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#a3a3a3] transition-all duration-300 group-hover:border-[#e25c3d] group-hover:bg-[#e25c3d] group-hover:text-white"><ArrowRight size={17} /></span></button>)}</div></main></div>
}

function Courses({ profile, goBack }: { profile: Profile; goBack: () => void }) {
  return <div className="min-h-screen"><Header onBack={goBack} /><main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e25c3d]">Conhecimento que acompanha você</p><h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl">Treinamentos e Guias Práticos Disponíveis</h1></div><p className="max-w-xs text-sm leading-relaxed text-[#888]">Conteúdos criados para gerar clareza, segurança e evolução real.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{products[profile].map((product) => <article key={product.title} className="overflow-hidden rounded-3xl border border-[#262626] bg-[#161616] transition-all duration-300 hover:-translate-y-1 hover:border-[#e25c3d]/50"><div className={`relative flex h-44 items-end bg-gradient-to-br ${product.tone} p-5`}><div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#d0d0d0] backdrop-blur-md">{product.tag}</div><div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#e25c3d]"><LockKeyhole size={17} /></div></div><div className="p-6"><h2 className="min-h-14 text-xl font-semibold leading-snug text-white">{product.title}</h2><p className="mt-3 min-h-12 text-sm leading-relaxed text-[#929292]">{product.description}</p><a href="#" onClick={(event) => event.preventDefault()} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#e25c3d] px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#f06b4b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e25c3d]">Acessar Curso agora <ArrowRight size={16} /></a></div></article>)}</div><div className="mt-10 flex items-center gap-2 text-xs text-[#666]"><Check size={15} className="text-[#e25c3d]" /> Compra segura e acesso imediato ao conteúdo.</div></main></div>
}

export default function Page() {
  const [screen, setScreen] = useState<Screen>('home')
  const [profile, setProfile] = useState<Profile>('paciente')

  useEffect(() => {
    const readHash = () => {
      const value = window.location.hash.replace('#', '').split('?')[0]
      setScreen(value === 'categorias' || value === 'cursos' ? value : 'home')
    }
    readHash()
    window.addEventListener('hashchange', readHash)
    return () => window.removeEventListener('hashchange', readHash)
  }, [])

  const chooseProfile = (nextProfile: Profile) => {
    setProfile(nextProfile)
    window.location.hash = '#categorias'
  }

  return <div className="min-h-screen bg-[#0b0b0b] text-white">{screen === 'home' && <Home choose={chooseProfile} />}{screen === 'categorias' && <Categories profile={profile} goBack={() => { window.location.hash = '#home' }} select={() => { window.location.hash = '#cursos' }} />}{screen === 'cursos' && <Courses profile={profile} goBack={() => { window.location.hash = '#categorias' }} />}</div>
}

