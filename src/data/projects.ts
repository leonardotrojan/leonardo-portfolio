/**
 * Como o projeto é apresentado visualmente:
 * - `phone` / `kiosk` / `browser` / `code`: captura de tela emoldurada pelo dispositivo.
 * - `graph`: sem captura pública; a prévia é um diagrama gerado da arquitetura.
 */
export type ProjectVisual = 'phone' | 'kiosk' | 'browser' | 'code' | 'graph'

export interface Project {
    slug: string
    name: string
    category: string
    /** Papel e contribuição no projeto. */
    role: string
    status: string
    description: string
    stack: string[]
    visual: ProjectVisual
    /** Captura de tela em /public; ausente quando `visual` é `graph`. */
    image?: string
    /** Cor de identidade do projeto, usada só no fundo da prévia. */
    tone: string
    liveUrl?: string | null
    repoUrl?: string | null
    featured?: boolean
    highlights?: string[]
    projectDetails: string
}

export const projects: Project[] = [
    {
        slug: 'comgo',
        name: 'Comgo',
        category: 'Produto · Mobile + Web',
        role: 'Engenharia full-stack de ponta a ponta',
        status: 'Em produção',
        description: 'Marketplace social de treinos presenciais em grupo e eventos esportivos: descoberta por proximidade, check-in com vagas e o grupo já esperando no chat.',
        stack: ['React Native', 'Expo', 'NestJS', 'Prisma', 'PostgreSQL', 'Socket.IO', 'Next.js', 'Docker Swarm'],
        visual: 'phone',
        image: '/project_pics/comgo-search.jpg',
        tone: '#c5ff4a',
        liveUrl: 'https://comgo.app',
        repoUrl: null,
        featured: true,
        highlights: [
            'Três aplicações: API em NestJS, app mobile em Expo e painel administrativo em Next.js',
            'Feed de treinos ranqueado por proximidade e interesses, com mapa e calendário',
            'Check-in com controle de vagas que abre um chat de grupo em tempo real via Socket.IO',
            'Aprovação de organizadores, moderação, notificações push e analytics em conformidade com a LGPD',
            'Deploy com Docker Swarm e Traefik, imagens publicadas no GitHub Container Registry'
        ],
        projectDetails: 'A Comgo resolve um problema simples de enunciar: encontrar companhia e grupos para treinar presencialmente (corrida, funcional, yoga, beach tennis) e descobrir eventos esportivos por perto. Pessoas descobrem treinos num feed ranqueado por proximidade e interesses, confirmam presença ocupando uma vaga e entram automaticamente no chat do grupo daquele treino. Organizadores, sejam profissionais ou organizações, passam por aprovação, publicam treinos e eventos e se comunicam com a própria audiência. Por trás, uma API NestJS com Prisma e PostgreSQL, chat em tempo real com Socket.IO, um app mobile em Expo e React Native e um painel administrativo em Next.js, publicados com Docker Swarm e Traefik.'
    },
    {
        slug: 'nero',
        name: 'N.E.R.O.',
        category: 'IA · Orquestração',
        role: 'Arquitetura e desenvolvimento',
        status: 'Em desenvolvimento',
        description: 'Neural Engine for Recursive Orchestration: uma IA pessoal multi-superfície que planeja, lembra e age, roteando cada pedido para sub-agentes especializados e o modelo certo para cada etapa.',
        stack: ['TypeScript', 'React', 'NestJS', 'Python', 'FastAPI', 'Electron', 'Expo', 'Turborepo', 'PostgreSQL', 'Redis'],
        visual: 'graph',
        tone: '#8b6cf0',
        liveUrl: null,
        repoUrl: null,
        featured: true,
        highlights: [
            'Roteamento de modelo por etapa entre OpenAI, Anthropic e Google',
            'Monorepo Turborepo com web, desktop (Electron), mobile (Expo), API e serviço de IA',
            'Gateway NestJS com REST e WebSocket que cai para um mock local quando o serviço de IA está fora',
            'Tipos compartilhados com Zod no TypeScript e Pydantic no Python'
        ],
        projectDetails: 'O N.E.R.O. não é um chatbot: é um sistema operacional cognitivo pessoal. Um único operador, uma única IA e muitos agentes: cada pedido passa por uma camada de orquestração que escolhe sub-agentes especializados e o provedor de modelo mais adequado para cada etapa. A mesma camada cognitiva atende web, desktop e mobile. A arquitetura é um monorepo Turborepo: um gateway NestJS (REST + WebSocket), um serviço de orquestração em FastAPI, persistência em PostgreSQL via Prisma e Redis, e pacotes compartilhados de tipos, SDK, UI e design system.'
    },
    {
        slug: 'self-checkout',
        name: 'Autoatendimento',
        category: 'Full-stack',
        role: 'Desenvolvimento full-stack',
        status: 'Publicado',
        description: 'Autoatendimento com fluxo real de pedidos: escolha de produtos, montagem do pedido e acompanhamento de status.',
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
        visual: 'kiosk',
        image: '/project_pics/self-checkout-kiosk.jpg',
        tone: '#ffb21a',
        liveUrl: 'https://servico-selfcheckout.vercel.app/fsw-donalds',
        repoUrl: 'https://github.com/leonardotrojan/servico-selfcheckout',
        featured: true,
        highlights: [
            'Fluxo completo: cardápio, pedido e acompanhamento de status',
            'Arquitetura com Server Components no Next.js',
            'Front-end e back-end integrados em uma única aplicação'
        ],
        projectDetails: 'Aplicação full-stack moderna inspirada em totens de autoatendimento, simulando o fluxo completo de pedidos de um sistema real. O projeto permite selecionar produtos, montar pedidos e acompanhar o status, utilizando uma arquitetura baseada em Next.js com Server Components. Desenvolvido com React, TypeScript e Tailwind CSS, o projeto prioriza organização, componentização e clareza de fluxo entre front-end e back-end, além de boas práticas modernas do ecossistema Next.'
    },
    {
        slug: 'goal-flow',
        name: 'Gerenciador de metas',
        category: 'API REST',
        role: 'Desenvolvimento back-end',
        status: 'Código aberto',
        description: 'Backend em NestJS com arquitetura de use-cases e repositórios, autenticação JWT e persistência com Prisma.',
        stack: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
        visual: 'code',
        image: '/project_pics/goalFlow.png',
        tone: '#5ec8ff',
        liveUrl: null,
        repoUrl: 'https://github.com/leonardotrojan/goalFlow',
        projectDetails: 'Backend REST API para gerenciamento inteligente de metas pessoais, construída com NestJS, Prisma e PostgreSQL. Estruturada com arquitetura baseada em use-cases e repositórios, autenticação JWT e pronta para integração com geração de roadmap via IA.'
    },
    {
        slug: 'order-service',
        name: 'Order Service API',
        category: 'API REST',
        role: 'Desenvolvimento back-end',
        status: 'Código aberto',
        description: 'API de pedidos com regras de negócio, autenticação e banco de dados, construída sem frameworks HTTP.',
        stack: ['Node.js', 'Prisma', 'PostgreSQL'],
        visual: 'code',
        image: '/project_pics/orderService.png',
        tone: '#ff6b9a',
        liveUrl: null,
        repoUrl: 'https://github.com/leonardotrojan/order-service-api',
        projectDetails: 'API desenvolvida em Node.js puro, sem uso de frameworks, com o objetivo de demonstrar domínio dos fundamentos do back-end e do funcionamento interno de uma API. O projeto aborda conceitos como criação de rotas, controle de requisições e respostas, organização da aplicação e lógica de negócio, mantendo uma estrutura clara e funcional. Toda a comunicação é feita via HTTP, permitindo integração com qualquer front-end.'
    },
    {
        slug: 'cafeteria',
        name: 'Cafeteria responsiva',
        category: 'Front-end',
        role: 'Desenvolvimento front-end',
        status: 'Publicado',
        description: 'Site responsivo com carrinho de compras funcional, controle de quantidade e total calculado em JavaScript puro.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        visual: 'browser',
        image: '/project_pics/cafeteria.png',
        tone: '#d29a62',
        liveUrl: 'https://leonardotrojan.github.io/cafeteria',
        repoUrl: 'https://github.com/leonardotrojan/cafeteria',
        projectDetails: 'Projeto front-end desenvolvido com foco nos fundamentos da web e na manipulação direta do DOM. A aplicação simula o site de uma cafeteria, contando com layout responsivo, interação dinâmica e um sistema de carrinho de compras funcional. O projeto inclui funcionalidades como adição e remoção de produtos no carrinho, controle de quantidade, cálculo automático do valor total e animações suaves para abertura e fechamento do carrinho, tudo implementado em JavaScript puro, sem uso de frameworks.'
    }
]

export const projectIndex = (project: Project) =>
    String(projects.findIndex(({ slug }) => slug === project.slug) + 1).padStart(2, '0')

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
