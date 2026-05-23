import React, { useEffect } from 'react';
import { track } from '@vercel/analytics';
import ConsultingHero from '../consulting/ConsultingHero';
import PricingGrid from '../consulting/PricingGrid';
import LeadCaptureForm from '../consulting/LeadCaptureForm';
import useUTMParams from '../hooks/useUTMParams';

function ConsultingPage() {
  const utm = useUTMParams();

  useEffect(() => {
    document.title = 'Consulting | Wolf Development Studios';
    track('consulting_page_view', {
      utm_source: utm.source || '',
      utm_medium: utm.medium || '',
      utm_campaign: utm.campaign || '',
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ConsultingHero />
      <PricingGrid />
      <LeadCaptureForm utm={utm} />
    </>
  );
}

export default ConsultingPage;
