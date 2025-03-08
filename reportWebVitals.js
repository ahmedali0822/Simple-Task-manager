const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);

      // Example: Send metrics to Google Analytics
      getCLS((metric) => {
        console.log('CLS:', metric.value);
        // Send metric.value to your analytics service
      });
      getFID((metric) => {
        console.log('FID:', metric.value);
        // Send metric.value to your analytics service
      });
      // Repeat for other metrics...
    });
  }
};

export default reportWebVitals;