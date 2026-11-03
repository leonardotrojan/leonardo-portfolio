export interface Capability {
    id: string
    title: string
    /** Como eu penso essa camada: a capacidade, não a ferramenta. */
    statement: string
    tools: string[]
}

export const capabilities: Capability[] = [
    {
        id: 'frontend',
        title: 'Front-end',
        statement: 'Interfaces componentizadas, tipadas e acessíveis, no navegador e no celular, pensadas para quem usa, não para o framework.',
        tools: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS'],
    },
    {
        id: 'backend',
        title: 'Back-end',
        statement: 'APIs organizadas em camadas, tempo real quando o produto pede e filas para tirar do caminho o que não precisa ser síncrono.',
        tools: ['Node.js', 'NestJS', 'REST', 'WebSocket', 'Socket.IO', 'RabbitMQ', 'BullMQ', 'FastAPI'],
    },
    {
        id: 'architecture',
        title: 'Arquitetura de software',
        statement: 'Use-cases, repositórios e fronteiras claras entre serviços. Monorepos com tipos compartilhados de ponta a ponta para o sistema mudar sem quebrar.',
        tools: ['Use-cases', 'Repositórios', 'Monorepo', 'Turborepo', 'Zod', 'JWT'],
    },
    {
        id: 'data',
        title: 'Dados',
        statement: 'Modelagem relacional pensada a partir das consultas que o produto faz, com acesso tipado e cache em memória onde faz diferença.',
        tools: ['PostgreSQL', 'Prisma', 'MySQL', 'Redis', 'SQLite'],
    },
    {
        id: 'infra',
        title: 'Infra & DevOps',
        statement: 'Containers, orquestração, CI/CD e observabilidade para levar o código até produção e mantê-lo saudável depois que ele chega lá.',
        tools: ['Docker', 'Docker Swarm', 'Traefik', 'Kubernetes', 'GitHub Actions', 'AWS', 'Grafana'],
    },
    {
        id: 'product',
        title: 'Produto & ownership',
        statement: 'Conduzir um produto inteiro: entender o problema, priorizar o que importa, documentar as decisões e entregar, do banco de dados ao último pixel.',
        tools: ['Descoberta', 'Priorização', 'Documentação técnica', 'Analytics', 'LGPD'],
    },
]

export const alsoWorkWith = ['HTML', 'CSS', 'JavaScript', 'Python', 'Git', 'GitHub']
