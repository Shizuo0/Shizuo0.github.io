# Paulo Shizuo - Portfolio

Portfolio developed with React, TypeScript and Vite, following web development best practices.

## 🚀 Technologies

- **React 19** - User interface library
- **TypeScript** - Static typing for JavaScript
- **Vite** - Modern and fast build tool
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **PostCSS** - CSS processor for optimizations
- **CSS Modules** - Modular and reusable styles
- **ESLint** - Code linting
- **Intersection Observer API** - Scroll animations
- **EmailJS** - Email sending service for contact form
- **GitHub API** - Real-time GitHub statistics and data

## ✨ Features

- 🎨 **Modern Design** - Clean interface with glassmorphism and neon effects
- ⚡ **Optimized Performance** - Fast loading with optimized CSS
- 📱 **Fully Responsive** - Adapted for mobile, tablet and desktop
- ♿ **Accessible** - Following WCAG web accessibility standards
- 🔍 **SEO Optimized** - Meta tags and structure optimized for search engines
- 🎭 **Smooth Animations** - Elegant transitions with Intersection Observer
- 🌐 **Multilingual** - Support for Portuguese and English
- 🎨 **Design System** - Centralized CSS variables and consistent theme
- 📧 **Functional Contact Form** - Email sending via EmailJS integration
- 📊 **Live GitHub Stats** - Real-time statistics from GitHub API with caching

## 🛠️ Available Scripts

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🔐 Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# EmailJS Configuration (for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Copy the Service ID, Template ID, and Public Key to your `.env` file

### GitHub API

The GitHub API integration works without authentication for public data. It includes:
- User profile information
- Public repositories list
- Stars and forks statistics
- Top programming languages
- 5-minute cache to avoid rate limiting

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation with mobile menu
│   ├── Hero.tsx        # Presentation section
│   ├── Skills.tsx      # Skills grid
│   ├── Projects.tsx    # Project cards
│   ├── Education.tsx   # Academic background
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer with social links
│   └── LanguageSelector.tsx # Language selector
├── contexts/           # React Context API
│   ├── TranslationContext.tsx # Language management
│   ├── ThemeContext.tsx       # Dark/Light theme management
│   └── GitHubContext.tsx      # GitHub API data management
├── hooks/              # Custom hooks
│   ├── useIntersectionObserver.ts
│   └── useContactForm.ts
├── styles/             # Organized modular CSS
│   ├── variables.css   # Design system variables
│   ├── base.css        # Reset and global styles
│   ├── header.css      # Header styles
│   ├── hero.css        # Hero section styles
│   ├── skills.css      # Skills styles
│   ├── projects.css    # Projects styles
│   ├── sections.css    # Sections styles
│   ├── footer.css      # Footer styles
│   └── language-selector.css # Selector styles
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
├── App.tsx             # Main component
├── main.tsx            # Entry point
└── index.css           # Style imports
```

## 🎯 Features

### Portfolio Sections

- **Header** - Main navigation with smooth links
- **Hero** - Personal presentation and professional summary
- **Skills** - Skills grid with visual categorization
- **Projects** - Project cards with technologies and links
- **Education** - Academic background
- **Contact** - Functional contact form

### Technical Resources

- **Tailwind CSS 4.1** - Utility-first framework with custom classes
- **Modular CSS** - 9 files organized by functionality (~2000 optimized lines)
- **Design System** - Centralized CSS variables for colors, spacing and typography
- **Intersection Observer** - Automatic and performant scroll animations
- **EmailJS Integration** - Functional contact form with email sending without backend
- **GitHub API Integration** - Real-time data fetching with 5-minute cache
- **Responsive Design** - Mobile-first with breakpoints at 768px and 480px
- **TypeScript Strict** - Strong typing for better maintainability
- **Glassmorphism** - Glass effects with backdrop-filter
- **CSS Animations** - Animated gradients and smooth transitions
- **Multilingual** - Translation system with Context API
- **Environment Variables** - Secure configuration with Vite env variables

## 🚀 Deploy

The project is configured for deployment on platforms like Vercel, Netlify or GitHub Pages.

### Vercel

```bash
npm run build
# Upload the dist/ folder to Vercel
```

### GitHub Pages

```bash
npm run build
# Configure GitHub Actions for automatic deployment
```

## 🤖 AI Collaboration

This project was developed in collaboration with artificial intelligence, demonstrating how AI tools can accelerate and improve modern software development.

### 🛠️ AI Tools Used

- **Claude (Anthropic)** - Main development assistant
- **Cursor AI** - Code editor with integrated AI
- **GitHub Copilot** - Real-time code suggestions

### 📋 Project Parts Developed with AI

#### **1. Architecture Refactoring**
- Separation into modular components
- Creation of custom hooks (`useIntersectionObserver`, `useContactForm`)
- Implementation of centralized type system
- Project folder structure organization

#### **2. Performance Optimization**
- CSS modularization from 3050 lines to 9 organized files
- Removal of unused dependencies (GSAP)
- Vite configuration with build optimizations
- Code splitting implementation
- ESLint configuration with modern rules
- CSS optimization with custom variables and global animations
- Code cleaning with ~7% reduction in total code

#### **3. Design and UX**
- Custom SVG logos creation with gradients
- Animation implementation with Intersection Observer
- Mobile-first responsive design with optimized media queries
- Consistent color and typography system with CSS Variables
- Glassmorphism and neon effects for modern look
- Mobile menu with functional language dropdown
- Centralized and responsive language selector
- Fine-tuning of padding, spacing and alignment

#### **4. SEO and Accessibility**
- Search engine optimized meta tags
- ARIA labels implementation
- Semantic HTML structure
- Open Graph and Twitter Cards

### 🎓 What I Learned from this Interaction

#### **Agile Development**
- How AI can significantly accelerate development
- Importance of specific and detailed prompts
- Rapid iteration between idea and implementation
- Continuous code and configuration validation

#### **Modern Best Practices**
- More rigorous TypeScript code patterns
- Proper development tools configuration
- Scalable and maintainable project structure
- Integration of multiple AI tools

#### **Human-AI Collaboration**
- How to divide responsibilities between human and AI
- Importance of human review and validation
- Leveraging the strengths of each tool
- Maintaining creative and architectural control

#### **Tools and Workflow**
- Efficient development environment setup
- Integration of linting, formatting and type checking
- Code versioning and organization
- Technical documentation and usage guides

### 💡 Insights on AI in Development

- **Acceleration**: ~70% reduction in development time
- **Quality**: More consistent code following modern standards
- **Learning**: Exposure to modern CSS patterns and practices
- **Productivity**: Focus on business logic vs. boilerplate
- **Innovation**: Rapid experimentation with Tailwind CSS and optimizations
- **Debugging**: Quick resolution of responsiveness issues
- **Refactoring**: Automated code cleaning with functionality preservation

### 🔮 Future of AI-Developer Collaboration

This experience demonstrates the potential of collaboration between developers and AI to create high-quality software more efficiently, while maintaining human control over architectural and creative decisions.

---

## 📜 License

This project is protected under a **Custom Restrictive License**. 

⚠️ This is a personal portfolio and may **NOT** be copied, redistributed, modified, or used commercially without explicit permission.

👉 [View full license](./LICENSE)

---

## 👨‍💻 Author

**Paulo Shizuo Vasconcelos Tatibana**

- Email: paulosvtatibana@gmail.com
- GitHub: [@Shizuo0](https://github.com/Shizuo0)
- LinkedIn: [Paulo Shizuo](https://linkedin.com/in/paulo-shizuo)

---

Developed using React + TypeScript + Vite + AI
