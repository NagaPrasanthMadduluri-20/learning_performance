export const generateDynamicMetadata = (data) => {
    // Check if pageSeos array exists
    if (!data?.pageSeos || !Array.isArray(data.pageSeos)) {
      return {
        title: 'Page Title',
        description: 'Page Description'
      };
    }
  
    // Find title and description from pageSeos array
    const titleObj = data.pageSeos.find(
      item => item.name === 'title' && item.type === 'SEO TITLE'
    );
  
    const descriptionObj = data.pageSeos.find(
      item => item.name === 'description' && item.type === 'META'
    );
  
    // Extract values or use fallbacks
    const title = titleObj?.value || 'Page Title';
    const description = descriptionObj?.value || 'Page Description';
  
    return {
      title,
      description,
      openGraph: {
        title,
        description,
      },
      twitter: {
        title,
        description,
      }
    };
  };