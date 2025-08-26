# Case Study Template

The case study template provides a reusable structure for showcasing success cases and projects.

## Structure

### Template Components
- `CaseStudy.tsx` - Main reusable template component
- Located in `src/components/templates/`

### Data Structure
- Case study data is defined in `src/data/cases.ts`
- Each case study follows the `CaseStudy` type interface

### Page Creation Process

To create a new case study page:

1. **Add data to `src/data/cases.ts`:**
```typescript
export const newCaseStudy: CaseStudy = {
  id: 'project-name',
  title: 'Project Name',
  subtitle: 'Short description',
  // ... rest of the data
};
```

2. **Create a page component:**
```typescript
// src/components/pages/ProjectNamePage.tsx
import CaseStudy from '@/components/templates/CaseStudy';
import { newCaseStudy } from '@/data/cases';

export default function ProjectNamePage() {
  return <CaseStudy caseStudy={newCaseStudy} />;
}
```

3. **Add to exports in `src/components/pages/index.ts`**

4. **Create Next.js route:**
```typescript
// src/app/cases/project-name/page.tsx
import { ProjectNamePage } from '@/components';

export default function ProjectName() {
  return <ProjectNamePage />;
}
```

## Sections

Each case study includes the following sections:

1. **Hero** - Title, subtitle, description, and CTA to visit the app
2. **Banner** - Large hero image of the project
3. **About** - Description with bento grid layout (can be reversed)
4. **App Icon** - App icon display
5. **Sections Grid** - 4 sections with icon, title, and content
6. **Resources** - Technologies used with category-colored pills
7. **Visual Guidelines** - Colors, fonts, and design elements
8. **Final CTA** - Call to action section (reused component)
9. **Contact** - Contact form (reused component)

## Image Requirements

For each case study, provide images in `public/images/cases/[case-id]/`:
- `hero.png` - Hero background image
- `banner.png` - Main banner image
- `about.png` - About section image
- `icon.png` - App icon (square format recommended)

## Current Case Studies

- **Desafiado** (`/cases/desafiado`) - Personal challenges app
