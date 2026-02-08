export const projects = {
    cafeteria: {
        name: 'Cafeteria responsiva',
        description: 'Projeto com foco em fundamentos, manipulação e estado de DOM ',
        stack: {
            html: '/icons/html.png',
            css: '/icons/css.webp',
            javascript: '/icons/javascript.webp'
        },
        url: '/project_pics/cafeteria.png',    
        liveUrl: 'https://leonardotrojan.github.io/cafeteria',
        repoUrl: 'https://github.com/leonardotrojan/cafeteria',
        projectDetails: 'Projeto front-end desenvolvido com foco nos fundamentos da web e na manipulação direta do DOM. A aplicação simula o site de uma cafeteria, contando com layout responsivo, interação dinâmica e um sistema de carrinho de compras funcional. O projeto inclui funcionalidades como adição e remoção de produtos no carrinho, controle de quantidade, cálculo automático do valor total e animações suaves para abertura e fechamento do carrinho, tudo implementado em JavaScript puro, sem uso de frameworks.'
    },
    orderService: {
        name: 'Order Service API',
        description: 'API de gerenciamento com regras de negócio, autenticação e banco de dados',
        stack: {
            node: '/icons/node.webp'
        },
        url: '/project_pics/orderService.png',
        liveUrl: null,
        repoUrl: 'https://github.com/leonardotrojan/order-service-api',
        projectDetails: 'Aplicação full-stack moderna inspirada em totens de autoatendimento, simulando o fluxo completo de pedidos de um sistema real. O projeto permite selecionar produtos, montar pedidos e acompanhar o status, utilizando uma arquitetura baseada em Next.js com Server Components. Desenvolvido com React, TypeScript e Tailwind CSS, o projeto prioriza organização, componentização e clareza de fluxo entre front-end e back-end, além de boas práticas modernas do ecossistema Next.'
    },
    selfCheckout: {
        name: 'Serviço autoatendimento',
        description: 'autoatendimento com fluxo real de pedidos, desenvolvido com tecnologias modernas',
        stack: {
            react: '/icons/react.png',
            next: '/icons/next.png',
            typescript: '/icons/typescript.png',
            tailwind: '/icons/tailwind.png',
            postgres: '/icons/postgres.png'
        },
        url: '/project_pics/selfService.png',
        liveUrl: 'https://servico-selfcheckout.vercel.app/fsw-donalds',
        repoUrl: 'https://github.com/leonardotrojan/servico-selfcheckout',
        projectDetails: 'API desenvolvida em Node.js puro, sem uso de frameworks, com o objetivo de demonstrar domínio dos fundamentos do back-end e do funcionamento interno de uma API. O projeto aborda conceitos como criação de rotas, controle de requisições e respostas, organização da aplicação e lógica de negócio, mantendo uma estrutura clara e funcional. Toda a comunicação é feita via HTTP, permitindo integração com qualquer front-end.'
    }
}