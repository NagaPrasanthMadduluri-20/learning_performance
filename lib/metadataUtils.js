// lib/metadataUtils.js

export function generateMetadataFromSEOData(pageSeos) {
    const metadata = {
      title: 'Default Title',
      description: 'Default Description',
      openGraph: {},
      twitter: {},
    };
  
    pageSeos.forEach((seo) => {
      switch (seo.type) {
        case 'SEO TITLE':
          metadata.title = seo.value;
          break;
        case 'META':
          if (seo.name.startsWith('og:')) {
            metadata.openGraph[seo.name] = seo.value;
          } else if (seo.name.startsWith('twitter:')) {
            metadata.twitter[seo.name] = seo.value;
          } else if (seo.name === 'description') {
            metadata.description = seo.value;
          }
          break;
      }
    });
  
    return metadata;
  }
  