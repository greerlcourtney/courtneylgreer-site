import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function useUTMParams() {
  const { search } = useLocation();
  return useMemo(() => {
    const params = new URLSearchParams(search);
    return {
      source: params.get('utm_source'),
      medium: params.get('utm_medium'),
      campaign: params.get('utm_campaign'),
      term: params.get('utm_term'),
      content: params.get('utm_content'),
    };
  }, [search]);
}
