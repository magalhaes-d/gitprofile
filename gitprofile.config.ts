// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'magalhaes-d', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '🎓 Web SecExec - UFS',
          description:
            'O Web SecExec – UFS é uma ferramenta que coleta e compila dados relacionados ao curso de Secretariado Executivo da Universidade Federal de Sergipe, com enfoque em informações sobre graduação, pós-graduação, atividades de extensão e projetos de pesquisa. A aplicação é atualizada quinzenalmente, utilizando dados provenientes do repositório universitário.',
          imageUrl:
            'https://img.freepik.com/fotos-gratis/relatorio-de-negocios-graficos-e-graficos-relatorios-de-negocios-e-pilha-de-documentos-conceito-de-negocios_1150-2254.jpg',
          link: 'https://web-sec-ufs.streamlit.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Daniel Magalhães',
    description: '',
    imageURL: 'https://cdn-icons-png.freepik.com/512/12238/12238069.png?ga=GA1.1.165158096.1724279202',
  },
  social: {
    linkedin: 'magalhaesd',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'magalhaes-d',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.datascienceportfol.io/magalhaesd',
    phone: '',
    email: 'danielmagalhaes38@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/16rzvMeRy6Dtn6SyZtnz9XMLJ6paruPoX/edit?usp=sharing&ouid=110053162646258905566&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'Excel',
    'Power BI',
    'Git',
    'GitHub',
    'Figma'
  ],
  experiences: [
    {
      company: 'Indicium Tech',
      position: 'Estagiário de Data Analytics',
      from: 'Ago 2021',
      to: 'Atual',
      companyLink: 'https://www.indicium.tech/pt-br',
    },
    {
      company: 'Fundação de Apoio à Pesquisa e Extensão de Sergipe (Projeto Transparência Traduzia)',
      position: 'Bolsista de Iniciação Científica em Data Engineering',
      from: 'Out 2023',
      to: 'Nov 2024',
      companyLink: 'https://www.transparenciatraduzida.ufs.br/',
    },
    {
      company: 'Ministério Público em Sergipe',
      position: 'Estagiário de Secretariado Executivo',
      from: 'Nov 2022',
      to: 'Ago 2023',
      companyLink: 'https://www.mpf.mp.br/se',
    },
    {
      company: 'Universidade Federal de Sergipe (Coordenaria de Pesquisa)',
      position: 'Assistente Administrativo',
      from: 'Dez 2020',
      to: 'Nov 2022',
      companyLink: 'https://www.mpf.mp.br/se',
    },
  ],
  certifications: [
    {
      name: 'Análise de dados como suporte à tomada de decisão',
      body: 'Escola Nacional de Administração Pública - Enap',
      year: 'Mai 2024',
      link: 'https://www.enap.gov.br/pt/',
    },
    {
      name: 'Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Intermediário',
      body: 'Data Science Academy',
      year: 'Jan 2024',
      link: 'https://www.datascienceacademy.com.br/',
    },
    {
      name: 'Scientific Computing with Python',
      body: 'freeCodeCamp',
      year: 'Dez 2023',
      link: 'https://www.datascienceacademy.com.br/',
    },
    {
      name: 'Data Analyst with Python',
      body: 'DataCamp',
      year: 'Set 2023',
      link: 'https://www.datacamp.com/',
    },
    {
      name: 'Excel para Análise de Dados',
      body: 'Preditiva Analytics',
      year: 'Nov 2022',
      link: 'https://www.preditiva.ai/',
    },
    {
      name: 'Introdução à Ciência de Dados 3.0',
      body: 'Data Science Academy',
      year: 'Set 2022',
      link: 'https://www.datascienceacademy.com.br/',
    },
    {
      name: 'Pacote Office - Microsoft Office Essencial',
      body: 'Udemy',
      year: 'Abr 2022',
      link: 'https://www.udemy.com/pt/',
    },
  ],
  educations: [
    {
      institution: 'Universidade Federal de Sergipe',
      degree: 'Secretariado Executivo',
      from: '2019',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'magalhaes-d', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
