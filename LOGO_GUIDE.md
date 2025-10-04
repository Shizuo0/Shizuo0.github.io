# 🎨 Guia de Personalização da Logo

## Logo Criada

### **logo.svg** - Estilo GitHub
- Letra "P" centralizada em branco sobre fundo circular
- Gradiente sky blue (#87ceeb → #00bfff) similar ao GitHub
- Design limpo e profissional inspirado no GitHub
- Círculo interno para profundidade
- Highlights sutis para dar dimensão

## 🛠️ Como Personalizar

### Cores
Para alterar as cores, modifique os gradientes no SVG:

```xml
<linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:1" />
  <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
</linearGradient>
```

### Tamanho
Para alterar o tamanho, modifique o `viewBox` e `width`/`height`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
```

### Elementos
- **Letra P**: Modifique o `path` da letra P
- **Círculos**: Ajuste `cx`, `cy` e `r` dos círculos
- **Símbolos de código**: Modifique os `path` das chaves

## 🎯 Sugestões de Personalização

### Para Desenvolvedor Frontend
- Adicione símbolos de HTML/CSS/JS
- Use cores mais vibrantes
- Inclua elementos de UI/UX

### Para Desenvolvedor Backend
- Adicione símbolos de banco de dados
- Use cores mais técnicas
- Inclua elementos de servidor

### Para Full Stack
- Combine elementos frontend e backend
- Use gradientes mais complexos
- Inclua símbolos de DevOps

## 📱 Tamanhos Recomendados

- **Favicon**: 32x32px ou 16x16px
- **Logo site**: 200x200px
- **Logo social**: 400x400px
- **Logo impressão**: 1000x1000px

## 🔧 Ferramentas para Editar

1. **Online**: SVG-Edit, Figma, Canva
2. **Desktop**: Adobe Illustrator, Inkscape
3. **Código**: Qualquer editor de texto

## 💡 Dicas

- Mantenha o design simples para favicons
- Use cores que contrastem com o fundo
- Teste em diferentes tamanhos
- Considere versões em preto e branco
