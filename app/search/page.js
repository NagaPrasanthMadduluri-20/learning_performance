// app/search/page.js

import dynamic from 'next/dynamic';
import Abc from '../../lib/abc';

const SearchResultsClient = dynamic(() => import('./SearchResultsClient'), {
  ssr: false, // This option ensures the component is only rendered on the client side
  loading: () => <p>Loading...</p> // Optional loading component
}); 
  

export default function SearchResultsPage() {
  return (
    <div className="container mx-auto py-10">
      <SearchResultsClient />
      <Abc />
    </div>
  );
}
