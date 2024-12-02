import dynamic from 'next/dynamic';
import { forwardRef, useState, useEffect } from 'react';

const SelectComponent = dynamic(() => import('react-select'), {
  ssr: false,
});

export const ClientSideSelect = forwardRef((props, ref) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <SelectComponent {...props} ref={ref} />;
});

ClientSideSelect.displayName = 'ClientSideSelect';