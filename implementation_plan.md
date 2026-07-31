# Goal: Premium Neo-Brutalism Redesign

Redesign the visual theme and template of Prithika Kannan's portfolio into a high-end, premium neo-brutalism aesthetic, without altering any content.

## Step 1 - Audit

### Pages & Content-bearing Components
1. **Pages** (`src/pages/`):
   - `Home.tsx` (HeroSection, TechnologyStack)
   - `AboutPage.tsx` (Biography, Core Values)
   - `ProjectsPage.tsx` (Project List)
   - `ProjectOverviewPage.tsx` (Project detail view)
   - `SkillsPage.tsx` (Skill categories, proficiency bars)
   - `ResumePage.tsx` (Experience & Education timeline)
   - `OpenSourcePage.tsx` (Open source contributions)
   - `ContactPage.tsx` (Contact form, social links)
2. **Components** (`src/components/home/`, `src/components/layout/`):
   - `HeroSection.tsx`, `TechnologyStack.tsx`
   - `Navbar.tsx`, `Footer.tsx`
3. **Data**:
   - `src/data/projects.ts`

### Current Design Tokens (Audit)
- **Tailwind / CSS** (`src/styles/globals.css`): Uses CSS variables heavily based on standard Shadcn themes. Backgrounds are pure white/dark, primary colors are blue-600 or dark gray. Soft shadows, standard `0.625rem` / `0.3rem` border radius. 
- **Font**: Inter (sans), Plex Mono (mono), Serif.

## Proposed Changes (Step 2 - Neo-brutalism Design System)

### 1. Color Palette & Typography
- **Base Colors**: Pure white (`#ffffff`) background, Near-black (`#0a0a0a`) text and borders.
- **Accent Color**: Electric Yellow (`#ffe600`) for primary CTAs and highlights.
- **Typography**: Update `globals.css` to use a heavy grotesque font (e.g., Space Grotesk or Archivo Black via Google Fonts) for headings, keeping Inter for body text.

### 2. Structural Language
- **Borders & Shadows**: Update base layer in `globals.css` and tailwind theme vars to enforce thick borders (3px-4px) and hard drop shadows (`6px 6px 0 #0a0a0a`).
- **Border Radius**: Set `--radius` to `0` or `0.125rem` in `globals.css` to make everything sharp.
- **Micro-interactions**: Button hover states will press down (shadow goes to 0, button translates down/right). 

### 3. Execution Plan
1. **Update `globals.css` & Fonts**: Introduce the neo-brutalism tokens, import Google Fonts (Space Grotesk). Add custom shadow and border utilities if needed.
2. **Rebuild UI Primitives**: Update `Button.tsx`, `Card.tsx`, `Badge.tsx` to automatically inherit the thick borders and hard shadows.
3. **Refactor Layout Components**: Update `Navbar.tsx`, `Footer.tsx` with sharp borders and asymmetric layouts.
4. **Refactor Pages**: Go through `Home`, `About`, `Projects`, `Skills`, `Resume`, `Contact`, `OpenSource` and update their Tailwind classes for the new aesthetic (removing soft rounded corners, adding monospace section labels, large headers).
5. **Quality Assurance**: Check mobile responsiveness, ensure no content is dropped or altered, verify Lighthouse accessibility, and build test.

## User Review Required

> [!WARNING]
> Please confirm the choice of **Electric Yellow (`#FFE600`)** as the primary accent color. If you prefer Hot Pink, Cobalt, or Lime, let me know.
> Also, confirm the use of **Space Grotesk** (via Google Fonts) for headings.

## Verification Plan
- `npm run build` will be executed to ensure the project builds correctly without TS/ESLint errors.
- Visual inspection via screenshots or walkthrough of the modified components to verify hard shadows and thick borders.
