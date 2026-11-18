import type { StaticImageData } from 'next/image'
import fisioterapeutasFoto from '@/public/images/trilhas/fisioterapeutas.jpg'
import pacientesFoto from '@/public/images/trilhas/pacientes.jpg'
import { MODO_DEMO } from '@/data/site'

export type PublicoSlug = 'fisioterapeutas' | 'pacientes'
export type Formato = 'video' | 'documento' | 'kit'
export type QueixaSlug = 'dor-lombar' | 'fascite-plantar' | 'tendinite' | 'home-office'
export type Nivel = 'iniciante' | 'intermediario' | 'avancado'
export type ImagemTrilha = { src: StaticImageData; alt: string; posicao: string; zoom?: number }

export type Publico = {
  slug: PublicoSlug
  trilha: '01' | '02'
  rotuloCurto: string
  rotuloBreadcrumb: string
  titulo: string
  chamada: string
  descricao: string
  imagem: ImagemTrilha
  pilares: string[]
}

export type Categoria = {
  slug: string
  publico: PublicoSlug
  ordem: string
  rotuloCurto: string
  titulo: string
  resumo: string
  explicacao: string
  exemplos: string[]
  icone: string
  imagem: ImagemTrilha
}

export type Curso = {
  slug: string
  publico: PublicoSlug
  categoria: string
  titulo: string
  descricao: string
  formatos: Formato[]
  nivel?: Nivel
  queixa?: QueixaSlug
  hotmartUrl: string
  capa?: string
  status: 'ativo' | 'em-breve'
}

export const publicos: Publico[] = [
  {
    slug: 'fisioterapeutas',
    trilha: '01',
    rotuloCurto: 'Sou fisioterapeuta',
    rotuloBreadcrumb: 'Fisioterapeutas',
    titulo: 'Fisioterapeutas',
    chamada: 'O que você quer aprender?',
    descricao:
      'Segurança clínica para quem está começando e atualização para quem já atua, com foco em neurofuncional.',
    imagem: {
      src: fisioterapeutasFoto,
      alt: 'Fisioterapeuta orienta uma paciente durante uma avaliação funcional na clínica.',
      posicao: '50% 25%',
      zoom: 1.04,
    },
    pilares: ['Raciocínio clínico', 'Avaliação', 'Recursos terapêuticos', 'Materiais de apoio'],
  },
  {
    slug: 'pacientes',
    trilha: '02',
    rotuloCurto: 'Sou paciente ou cuidador',
    rotuloBreadcrumb: 'Pacientes',
    titulo: 'Pacientes e cuidadores',
    chamada: 'O que você está buscando?',
    descricao:
      'Entenda sua dor e aprenda a se movimentar com segurança, em casa, com orientação de uma fisioterapeuta.',
    imagem: {
      src: pacientesFoto,
      alt: 'Paciente pratica um alongamento sentada em casa, acompanhada por uma fisioterapeuta.',
      posicao: '50% 30%',
      zoom: 1.04,
    },
    pilares: ['Entender a dor', 'Movimento seguro', 'Autocuidado', 'Cuidado de quem cuida'],
  },
]

export const categorias: Categoria[] = [
  {
    slug: 'teorica-clinica',
    publico: 'fisioterapeutas',
    ordem: '01',
    titulo: 'Teórica e clínica',
    rotuloCurto: 'Teórica',
    resumo: 'Anatomia funcional, biomecânica e condições neurológicas e musculoesqueléticas.',
    explicacao:
      'Aulas para construir a base do raciocínio clínico: como o corpo se move, o que muda nas condições neurológicas e musculoesqueléticas e como isso orienta a conduta.',
    exemplos: ['Anatomia funcional', 'Biomecânica', 'Condições neurológicas'],
    icone: 'brain',
    imagem: { src: fisioterapeutasFoto, alt: 'Fisioterapeuta acompanha uma avaliação clínica e observa o movimento da paciente.', posicao: '48% 38%', zoom: 1.35 },
  },
  {
    slug: 'equipamentos-recursos',
    publico: 'fisioterapeutas',
    ordem: '02',
    titulo: 'Equipamentos e recursos',
    rotuloCurto: 'Equipamentos',
    resumo: 'Parâmetros e configurações de TENS, ultrassom, laser e outros recursos.',
    explicacao:
      'Passo a passo de como configurar cada aparelho e, principalmente, por que escolher cada parâmetro, com raciocínio clínico por trás.',
    exemplos: ['TENS', 'Ultrassom terapêutico', 'Laser'],
    icone: 'zap',
    imagem: { src: fisioterapeutasFoto, alt: 'Fisioterapeuta em atendimento clínico, conversando com a paciente durante a avaliação.', posicao: '47% 46%', zoom: 1.5 },
  },
  {
    slug: 'aulas-praticas',
    publico: 'fisioterapeutas',
    ordem: '03',
    titulo: 'Aulas práticas',
    rotuloCurto: 'Práticas',
    resumo: 'Demonstrações de testes funcionais e técnicas de avaliação.',
    explicacao:
      'Vídeos mostrando a execução real: posicionamento, comandos ao paciente e interpretação do que observar.',
    exemplos: ['Testes funcionais', 'Posicionamento', 'Técnicas de avaliação'],
    icone: 'hand',
    imagem: { src: fisioterapeutasFoto, alt: 'Fisioterapeuta demonstra um movimento enquanto orienta a paciente.', posicao: '53% 41%', zoom: 1.4 },
  },
  {
    slug: 'materiais-profissionais',
    publico: 'fisioterapeutas',
    ordem: '04',
    titulo: 'Materiais profissionais',
    rotuloCurto: 'Materiais',
    resumo: 'Fichas, checklists e modelos prontos para usar na prática.',
    explicacao:
      'Documentos prontos e editáveis: fichas de anamnese e avaliação, checklists e modelos de evolução e relatório para enviar a médicos e empresas.',
    exemplos: ['Fichas de anamnese', 'Checklists', 'Modelos de relatório'],
    icone: 'file-text',
    imagem: { src: fisioterapeutasFoto, alt: 'Profissional de fisioterapia conduz uma avaliação funcional em consultório.', posicao: '48% 42%', zoom: 1.55 },
  },
  {
    slug: 'entenda-sua-dor',
    publico: 'pacientes',
    ordem: '01',
    titulo: 'Entenda sua dor',
    rotuloCurto: 'Entenda sua dor',
    resumo: 'A região afetada explicada de forma visual e simples.',
    explicacao:
      'Anatomia sem complicação: como funciona a região, por que a dor aparece e quando é hora de interromper e procurar avaliação presencial.',
    exemplos: ['Dor lombar', 'Fascite plantar', 'Tendinite'],
    icone: 'search',
    imagem: { src: pacientesFoto, alt: 'Fisioterapeuta conversa com paciente sobre movimento e cuidados em casa.', posicao: '50% 45%', zoom: 1.35 },
  },
  {
    slug: 'movimento-e-mobilidade',
    publico: 'pacientes',
    ordem: '02',
    titulo: 'Movimento e mobilidade',
    rotuloCurto: 'Movimento',
    resumo: 'Exercícios guiados para fazer em casa, por queixa ou objetivo.',
    explicacao:
      'Vídeos e guias ilustrados com protocolos para dor lombar, fascite plantar, tendinite e rotina de home office, com prevenção no dia a dia.',
    exemplos: ['Dor lombar', 'Fascite plantar', 'Tendinite', 'Home office'],
    icone: 'activity',
    imagem: { src: pacientesFoto, alt: 'Paciente realiza um alongamento sentado em casa, com orientação da fisioterapeuta.', posicao: '56% 46%', zoom: 1.5 },
  },
  {
    slug: 'cuidando-de-quem-voce-ama',
    publico: 'pacientes',
    ordem: '03',
    titulo: 'Cuidando de quem você ama',
    rotuloCurto: 'Cuidadores',
    resumo: 'Mobilidade, respiração e autocuidado para quem cuida de um idoso.',
    explicacao:
      'Orientações práticas para cuidadores familiares: exercícios de mobilidade, exercícios respiratórios e cuidados com você mesmo durante a rotina.',
    exemplos: ['Mobilidade para idosos', 'Respiração', 'Autocuidado de cuidadores'],
    icone: 'heart-handshake',
    imagem: { src: pacientesFoto, alt: 'Fisioterapeuta acompanha uma paciente sentada durante um exercício de mobilidade em casa.', posicao: '45% 40%', zoom: 1.3 }
  },
]

const urlHotmart = 'https://pay.hotmart.com/SUBSTITUIR'

// SUBSTITUIR pelos cursos reais antes da publicação. Os links e descrições abaixo são exemplos editoriais.
export const cursos: Curso[] = [
  {
    slug: 'anatomia-funcional-neuro',
    publico: 'fisioterapeutas',
    categoria: 'teorica-clinica',
    titulo: 'Anatomia funcional aplicada à neuro',
    descricao: 'Uma leitura prática do movimento para sustentar suas decisões clínicas.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'raciocinio-clinico-neurofuncional',
    publico: 'fisioterapeutas',
    categoria: 'teorica-clinica',
    titulo: 'Raciocínio clínico em neurofuncional',
    descricao: 'Organize os achados da avaliação e transforme observação em conduta.',
    formatos: ['video', 'documento'],
    nivel: 'intermediario',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'avaliacao-funcional-neuro',
    publico: 'fisioterapeutas',
    categoria: 'teorica-clinica',
    titulo: 'Avaliação funcional em neuro: do achado à conduta',
    descricao: 'Relacione os achados da avaliação a objetivos funcionais e decisões terapêuticas.',
    formatos: ['video', 'documento'],
    nivel: 'avancado',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'tens-na-pratica',
    publico: 'fisioterapeutas',
    categoria: 'equipamentos-recursos',
    titulo: 'TENS na prática: parâmetros e raciocínio clínico',
    descricao: 'Entenda os ajustes do aparelho e escolha parâmetros com intenção clínica.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'ativo',
  },
  {
    slug: 'ultrassom-terapeutico',
    publico: 'fisioterapeutas',
    categoria: 'equipamentos-recursos',
    titulo: 'Ultrassom terapêutico: configuração passo a passo',
    descricao: 'Uma demonstração objetiva de configuração, parâmetros e aplicação.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'laser-terapeutico-na-pratica',
    publico: 'fisioterapeutas',
    categoria: 'equipamentos-recursos',
    titulo: 'Laser terapêutico: parâmetros e aplicação',
    descricao: 'Revise indicações, escolha de parâmetros e cuidados durante a aplicação.',
    formatos: ['video', 'kit'],
    nivel: 'intermediario',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'testes-funcionais-na-pratica',
    publico: 'fisioterapeutas',
    categoria: 'aulas-praticas',
    titulo: 'Testes funcionais: observar para avaliar',
    descricao: 'Veja como preparar, conduzir e interpretar testes funcionais.',
    formatos: ['video'],
    nivel: 'intermediario',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'transferencias-e-posicionamento',
    publico: 'fisioterapeutas',
    categoria: 'aulas-praticas',
    titulo: 'Transferências e posicionamento com segurança',
    descricao: 'Demonstrações de manejo e posicionamento em diferentes situações.',
    formatos: ['video'],
    nivel: 'intermediario',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'equilibrio-avaliacao-funcional',
    publico: 'fisioterapeutas',
    categoria: 'aulas-praticas',
    titulo: 'Equilíbrio: demonstração de avaliação funcional',
    descricao: 'Acompanhe a preparação e a observação de testes de equilíbrio com segurança.',
    formatos: ['video', 'documento'],
    nivel: 'avancado',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'kit-fichas-anamnese-avaliacao',
    publico: 'fisioterapeutas',
    categoria: 'materiais-profissionais',
    titulo: 'Kit de fichas de anamnese e avaliação',
    descricao: 'Modelos editáveis para organizar as informações da sua prática clínica.',
    formatos: ['documento', 'kit'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'modelos-evolucao-relatorio',
    publico: 'fisioterapeutas',
    categoria: 'materiais-profissionais',
    titulo: 'Modelos de evolução e relatório fisioterapêutico',
    descricao: 'Estruture registros clínicos e comunicações profissionais com clareza.',
    formatos: ['documento'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'checklist-devolutiva-paciente',
    publico: 'fisioterapeutas',
    categoria: 'materiais-profissionais',
    titulo: 'Checklist de devolutiva e plano de cuidado',
    descricao: 'Organize orientações, objetivos e próximos passos para compartilhar com o paciente.',
    formatos: ['documento', 'kit'],
    nivel: 'intermediario',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'entenda-dor-lombar',
    publico: 'pacientes',
    categoria: 'entenda-sua-dor',
    titulo: 'Dor lombar: entenda o que seu corpo comunica',
    descricao: 'Uma explicação visual e acessível sobre a região lombar e a dor.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'entenda-fascite-plantar',
    publico: 'pacientes',
    categoria: 'entenda-sua-dor',
    titulo: 'Fascite plantar sem mistério',
    descricao: 'Conheça a estrutura do pé e os fatores que podem estar relacionados à dor.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'entenda-tendinite-e-movimento',
    publico: 'pacientes',
    categoria: 'entenda-sua-dor',
    titulo: 'Tendinite: entenda a dor e o movimento',
    descricao: 'Uma introdução clara aos sintomas, aos movimentos e aos cuidados do dia a dia.',
    formatos: ['video', 'documento'],
    nivel: 'intermediario',
    queixa: 'tendinite',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'exercicios-dor-lombar-casa',
    publico: 'pacientes',
    categoria: 'movimento-e-mobilidade',
    titulo: 'Exercícios para dor lombar em casa',
    descricao: 'Movimentos guiados para explorar com atenção e respeitar seus limites.',
    formatos: ['video'],
    nivel: 'iniciante',
    queixa: 'dor-lombar',
    hotmartUrl: urlHotmart,
    status: 'ativo',
  },
  {
    slug: 'fascite-plantar-protocolo-casa',
    publico: 'pacientes',
    categoria: 'movimento-e-mobilidade',
    titulo: 'Fascite plantar: protocolo em casa',
    descricao: 'Uma sequência guiada de mobilidade para incluir na rotina com segurança.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    queixa: 'fascite-plantar',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'home-office-sem-dor',
    publico: 'pacientes',
    categoria: 'movimento-e-mobilidade',
    titulo: 'Home office sem dor: rotina de pausas',
    descricao: 'Ideias de movimento e pausas para variar a rotina de trabalho em casa.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    queixa: 'home-office',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'mobilidade-tendinite-em-casa',
    publico: 'pacientes',
    categoria: 'movimento-e-mobilidade',
    titulo: 'Tendinite: movimentos para o dia a dia',
    descricao: 'Explore uma rotina leve de mobilidade, respeitando seus limites e sinais do corpo.',
    formatos: ['video', 'kit'],
    nivel: 'intermediario',
    queixa: 'tendinite',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'mobilidade-para-idosos-em-casa',
    publico: 'pacientes',
    categoria: 'cuidando-de-quem-voce-ama',
    titulo: 'Mobilidade para idosos em casa',
    descricao: 'Orientações para apoiar movimentos cotidianos com cuidado e presença.',
    formatos: ['video'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'autocuidado-para-cuidadores',
    publico: 'pacientes',
    categoria: 'cuidando-de-quem-voce-ama',
    titulo: 'Autocuidado para quem cuida',
    descricao: 'Pequenas práticas de movimento e respiração para a rotina de cuidado.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
  {
    slug: 'respiracao-para-quem-cuida',
    publico: 'pacientes',
    categoria: 'cuidando-de-quem-voce-ama',
    titulo: 'Respiração e pausas para quem cuida',
    descricao: 'Práticas breves de respiração e movimento que cabem na rotina de cuidado.',
    formatos: ['video', 'documento'],
    nivel: 'iniciante',
    hotmartUrl: urlHotmart,
    status: 'em-breve',
  },
]

export function isHotmartUrlValida(url: string): boolean {
  if (!url.trim() || url.toUpperCase().includes('SUBSTITUIR')) return false

  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' && parsed.hostname === 'pay.hotmart.com'
  } catch {
    return false
  }
}

const cursosComLinkPendente = MODO_DEMO ? [] : cursos.filter((curso) => !isHotmartUrlValida(curso.hotmartUrl))

if (process.env.NODE_ENV === 'development' && cursosComLinkPendente.length > 0) {
  console.warn(
    '[dayane-rocha] Cursos com link Hotmart pendente serão exibidos como “Em breve”: ',
    cursosComLinkPendente.map((curso) => curso.titulo),
  )
}

export function getPublico(slug: string): Publico | undefined {
  return publicos.find((publico) => publico.slug === slug)
}

export function getCategorias(publico: PublicoSlug): Categoria[] {
  return categorias.filter((categoria) => categoria.publico === publico)
}

export function getCategoria(publico: string, slug: string): Categoria | undefined {
  return categorias.find((categoria) => categoria.publico === publico && categoria.slug === slug)
}

export function getCursos(publico: string, categoria: string): Curso[] {
  return cursos
    .filter((curso) => curso.publico === publico && curso.categoria === categoria)
    .map((curso) => ({
      ...curso,
      status: (MODO_DEMO
        ? 'ativo'
        : curso.status === 'ativo' && !isHotmartUrlValida(curso.hotmartUrl)
          ? 'em-breve'
          : curso.status) as Curso['status'],
    }))
}
