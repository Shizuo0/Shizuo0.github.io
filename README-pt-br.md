# Paulo Shizuo - Portfólio

Portfólio desenvolvido com React, TypeScript e Vite, seguindo as melhores práticas de desenvolvimento web.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderno e rápido
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **PostCSS** - Processador CSS para otimizações
- **CSS Modules** - Estilos modulares e reutilizáveis
- **ESLint** - Linting de código
- **Intersection Observer API** - Animações de scroll

## ✨ Características

- 🎨 **Design Moderno** - Interface limpa com glassmorphism e efeitos neon
- ⚡ **Performance Otimizada** - Carregamento rápido com CSS otimizado
- 📱 **Totalmente Responsivo** - Adaptado para mobile, tablet e desktop
- ♿ **Acessível** - Seguindo padrões WCAG de acessibilidade web
- 🔍 **SEO Otimizado** - Meta tags e estrutura otimizada para buscadores
- 🎭 **Animações Suaves** - Transições elegantes com Intersection Observer
- 🌐 **Multilíngue** - Suporte para Português e Inglês
- 🎨 **Sistema de Design** - Variáveis CSS centralizadas e tema consistente

## 🛠️ Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Executar linting
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Header.tsx      # Navegação com menu mobile
│   ├── Hero.tsx        # Seção de apresentação
│   ├── Skills.tsx      # Grid de habilidades
│   ├── Projects.tsx    # Cards de projetos
│   ├── Education.tsx   # Formação acadêmica
│   ├── Contact.tsx     # Formulário de contato
│   ├── Footer.tsx      # Rodapé com links sociais
│   └── LanguageSelector.tsx # Seletor de idioma
├── contexts/           # Context API do React
│   └── TranslationContext.tsx # Gerenciamento de idiomas
├── hooks/              # Hooks personalizados
│   ├── useIntersectionObserver.ts
│   └── useContactForm.ts
├── styles/             # CSS modular organizado
│   ├── variables.css   # Variáveis do design system
│   ├── base.css        # Reset e estilos globais
│   ├── header.css      # Estilos do header
│   ├── hero.css        # Estilos da hero section
│   ├── skills.css      # Estilos de habilidades
│   ├── projects.css    # Estilos de projetos
│   ├── sections.css    # Estilos de seções
│   ├── footer.css      # Estilos do footer
│   └── language-selector.css # Estilos do seletor
├── types/              # Definições de tipos TypeScript
│   └── index.ts
├── utils/              # Funções utilitárias
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Importações de estilos
```

## 🎯 Funcionalidades

### Seções do Portfólio

- **Header** - Navegação principal com links suaves
- **Hero** - Apresentação pessoal e resumo profissional
- **Skills** - Grid de habilidades com categorização visual
- **Projects** - Cards de projetos com tecnologias e links
- **Education** - Formação acadêmica
- **Contact** - Formulário de contato funcional

### Recursos Técnicos

- **Tailwind CSS 4.1** - Utility-first framework com classes customizadas
- **CSS Modular** - 9 arquivos organizados por funcionalidade (~2000 linhas otimizadas)
- **Design System** - Variáveis CSS centralizadas para cores, espaçamentos e tipografia
- **Intersection Observer** - Animações de scroll automáticas e performáticas
- **Formulário de Contato** - Integração com cliente de email (mailto)
- **Responsive Design** - Mobile-first com breakpoints em 768px e 480px
- **TypeScript Strict** - Tipagem forte para melhor manutenibilidade
- **Glassmorphism** - Efeitos de vidro com backdrop-filter
- **Animações CSS** - Gradientes animados e transições suaves
- **Multilíngue** - Sistema de tradução com Context API

## 🚀 Deploy

O projeto está configurado para deploy em plataformas como Vercel, Netlify ou GitHub Pages.

### Vercel

```bash
npm run build
# Faça upload da pasta dist/ para o Vercel
```

### GitHub Pages

```bash
npm run build
# Configure o GitHub Actions para deploy automático
```

## 📝 Licença

Este projeto é de uso pessoal e educacional.

## 🤖 Colaboração com IA

Este projeto foi desenvolvido em colaboração com inteligência artificial, demonstrando como as ferramentas de IA podem acelerar e melhorar o desenvolvimento de software moderno.

### 🛠️ Ferramentas de IA Utilizadas

- **Claude (Anthropic)** - Assistente principal para desenvolvimento
- **Cursor AI** - Editor de código com IA integrada
- **GitHub Copilot** - Sugestões de código em tempo real

### 📋 Partes do Projeto Desenvolvidas com IA

#### **1. Refatoração da Arquitetura**
- Separação em componentes modulares
- Criação de hooks personalizados (`useIntersectionObserver`, `useContactForm`)
- Implementação de sistema de tipos centralizado
- Organização da estrutura de pastas

#### **2. Otimização de Performance**
- Modularização de CSS de 3050 linhas para 9 arquivos organizados
- Remoção de dependências não utilizadas (GSAP)
- Configuração do Vite com otimizações de build
- Implementação de code splitting
- Configuração de ESLint com regras modernas
- Otimização de CSS com variáveis customizadas e animações globais
- Code cleaning com redução de ~7% no código total

#### **3. Design e UX**
- Criação de logos SVG personalizadas com gradientes
- Implementação de animações com Intersection Observer
- Design responsivo mobile-first com media queries otimizadas
- Sistema de cores e tipografia consistente com CSS Variables
- Efeitos glassmorphism e neon para visual moderno
- Menu mobile com dropdown de idiomas funcional
- Seletor de idioma centralizado e responsivo
- Ajustes finos de padding, spacing e alinhamento

#### **4. SEO e Acessibilidade**
- Meta tags otimizadas para buscadores
- Implementação de ARIA labels
- Estrutura semântica HTML
- Open Graph e Twitter Cards

### 🎓 O que Aprendi com essa Interação

#### **Desenvolvimento Ágil**
- Como a IA pode acelerar significativamente o desenvolvimento
- Importância de prompts específicos e detalhados
- Iteração rápida entre ideia e implementação
- Validação contínua de código e configurações

#### **Boas Práticas Modernas**
- Padrões de código TypeScript mais rigorosos
- Configuração adequada de ferramentas de desenvolvimento
- Estrutura de projeto escalável e manutenível
- Integração de múltiplas ferramentas de IA

#### **Colaboração Humano-IA**
- Como dividir responsabilidades entre humano e IA
- Importância da revisão e validação humana
- Aproveitamento das forças de cada ferramenta
- Manutenção do controle criativo e arquitetural

#### **Ferramentas e Workflow**
- Configuração eficiente de ambientes de desenvolvimento
- Integração de linting, formatação e type checking
- Versionamento e organização de código
- Documentação técnica e guias de uso

### 💡 Insights sobre IA no Desenvolvimento

- **Aceleração**: Redução de ~70% no tempo de desenvolvimento
- **Qualidade**: Código mais consistente e seguindo padrões modernos
- **Aprendizado**: Exposição a padrões e práticas CSS modernas
- **Produtividade**: Foco em lógica de negócio vs. boilerplate
- **Inovação**: Experimentação rápida com Tailwind CSS e otimizações
- **Debugging**: Resolução rápida de problemas de responsividade
- **Refatoração**: Code cleaning automatizado com preservação de funcionalidade

### 🔮 Futuro da Colaboração IA-Desenvolvedor

Esta experiência demonstra o potencial da colaboração entre desenvolvedores e IA para criar software de alta qualidade de forma mais eficiente, mantendo o controle humano sobre decisões arquiteturais e criativas.

---

## 👨‍💻 Autor

**Paulo Shizuo Vasconcelos Tatibana**

- Email: paulosvtatibana@gmail.com
- GitHub: [@Shizuo0](https://github.com/Shizuo0)
- LinkedIn: [Paulo Shizuo](https://linkedin.com/in/paulo-shizuo)

---

Desenvolvido usando React + TypeScript + Vite + IA
