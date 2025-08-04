# Data Organization

This directory contains organized data structures for different sections and pages of the website.

## Structure

- `services.ts` - Contains service-related data
  - `homeServicesData` - Main services displayed on the HomePage
  - `webServicesData` - Services specific to the SitesPage
  - `servicesData` - Backward compatibility export (alias for `homeServicesData`)

- `sites.ts` - Contains data specific to the sites/web development page
  - `sitesTargetAudience` - Target audience list with icons
  - `sitesWorkflowSteps` - Steps in the development workflow

- `cases.ts` - Contains case study data for success stories
  - `desafiadoCaseStudy` - Desafiado app case study data
  - `allCaseStudies` - Array of all case studies
  - Types: `CaseStudy`, `CaseStudySection`, `CaseStudyResource`, `CaseStudyVisualGuideline`

- `index.ts` - Barrel export for easy imports

## Usage

```typescript
// Import specific data
import { homeServicesData, webServicesData } from '@/data/services';
import { sitesTargetAudience, sitesWorkflowSteps } from '@/data/sites';
import { desafiadoCaseStudy, allCaseStudies } from '@/data/cases';

// Or import from index for convenience
import { homeServicesData, sitesTargetAudience, desafiadoCaseStudy } from '@/data';
```

## Migration Notes

- The original `servicesData` export from `Services.tsx` has been moved here as `homeServicesData`
- A backward compatibility export `servicesData` is maintained
- Components are now purely UI components without embedded data
- Data can be reused across different pages and contexts
- Case studies use a reusable template structure with data-driven content