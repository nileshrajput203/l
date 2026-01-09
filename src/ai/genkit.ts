import { configureGenkit } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/googleai';
import { geminiPro } from '@genkit-ai/googleai';

export default configureGenkit({
  plugins: [googleAI()],
  models: [geminiPro],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
