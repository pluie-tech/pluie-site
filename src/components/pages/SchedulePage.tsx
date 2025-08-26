'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { BaseLayout, BackToHomeButton, Hero, Section } from '@/components';

export default function SchedulePage() {
  useEffect(() => {
    const loadCal = async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#3A5BA0"},"dark":{"cal-brand":"#fcfcfc"}},"hideEventTypeDetails":false,"layout":"month_view"});
    }
    loadCal();
  }, [])

  return (
    <BaseLayout>
      <div className="bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60 relative z-10">
        
        <BackToHomeButton className="pt-4 md:pt-6 lg:pt-10" />

        <Hero id="schedule-hero" className="bg-transparent p-0">
          <Hero.Content className="py-8!">
            <Hero.Title className="text-foreground">
              Vamos conversar?
            </Hero.Title>
            <Hero.Subtitle className="text-foreground">
              Nosso foco é entender seu contexto com clareza e sugerir soluções alinhadas ao que você realmente precisa.
            </Hero.Subtitle>

          </Hero.Content>
        </Hero>

        <Section id="schedule">
           <Cal namespace="30min"
            calLink="pluie/30min"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","theme":"light"}}
          />
        </Section>
      </div>
    </BaseLayout>
  )
}
