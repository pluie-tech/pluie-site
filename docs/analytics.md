# Guia de Uso — Analytics (Umami)

Este projeto utiliza o [Umami](https://umami.is/) para rastreamento de eventos de analytics. Os eventos são disparados por meio de funções utilitárias e hooks React, com nomes de eventos em português para facilitar a análise.

## Eventos Suportados

- **clique_cta_whatsapp** — Clique em botões de chamada para ação (WhatsApp)
- **envio_formulario** — Envio de formulários
- **visualizacao_secao** — Visualização de seções da página

## Como Usar

### 1. Rastrear Clique em CTA (WhatsApp)

```tsx
import { trackWhatsAppCTA } from "@/lib/analytics";

// Exemplo em um botão:
<button onClick={() => trackWhatsAppCTA("Header")}>Fale no WhatsApp</button>
```

- O parâmetro é a origem do clique (ex: "Header", "Hero", "Footer").

### 2. Rastrear Envio de Formulário

```tsx
import { trackFormSubmission } from "@/lib/analytics";

// Exemplo ao submeter um formulário:
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  trackFormSubmission("Contato");
  // ...demais ações
};
```

- O parâmetro é o nome da seção do formulário (ex: "Contato").

### 3. Rastrear Visualização de Seção

Utilize o hook `useTrackSectionView` para disparar o evento quando uma seção ficar visível na tela.

```tsx
import { useTrackSectionView } from "@/lib/analytics";

export default function About() {
  const ref = useTrackSectionView("Sobre");
  return (
    <Section ref={ref} id="quem-somos" /* ... */>
      {/* ... */}
    </Section>
  );
}
```

- O parâmetro é o nome da seção (ex: "Sobre", "Serviços", "Contato").
- O hook retorna um `ref` que deve ser passado para o componente de seção.

## Tipos e Contexto

Os tipos de eventos e contexto estão definidos em `src/lib/analytics.ts`:

```ts
export type AnalyticsEvent =
  | 'clique_cta_whatsapp'
  | 'envio_formulario'
  | 'visualizacao_secao';

export type AnalyticsContext = {
  secao?: string;
  origem?: string;
};
```

## Observações

- Os nomes dos eventos e contextos devem ser sempre em português.
- Não rastreie eventos de erro por enquanto.
- O objeto global `umami` deve estar disponível no ambiente de produção.

---

Dúvidas? Consulte o arquivo `src/lib/analytics.ts` ou entre em contato com o time de desenvolvimento.
