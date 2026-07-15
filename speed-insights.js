/**
 * Vercel Speed Insights Integration
 * This script injects the Speed Insights tracking code into the page
 */
(function() {
  // Initialize the queue for Speed Insights
  if (!window.si) {
    window.si = function(...params) {
      window.siq = window.siq || [];
      window.siq.push(params);
    };
  }

  // Create and inject the Speed Insights script
  const script = document.createElement('script');
  
  // Use the Vercel-provided endpoint when deployed
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  
  // Add SDK identification
  script.dataset.sdkn = '@vercel/speed-insights';
  script.dataset.sdkv = '2.0.0';
  
  // Error handling
  script.onerror = function() {
    console.log(
      '[Vercel Speed Insights] Failed to load script. Please check if any content blockers are enabled and try again.'
    );
  };
  
  document.head.appendChild(script);
})();
