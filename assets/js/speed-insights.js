/**
 * Vercel Speed Insights initialization
 * This script loads and initializes Speed Insights for tracking web vitals
 */

// Import the injectSpeedInsights function from the package
import { injectSpeedInsights } from '../../node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false, // Set to true for development debugging
  framework: 'vanilla' // Specify framework as vanilla JavaScript
});
