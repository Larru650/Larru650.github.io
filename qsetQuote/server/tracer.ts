import tracer from 'dd-trace';
import { getConfig } from './configuration';

const { ddTraceEnabled } = getConfig();
if (ddTraceEnabled) {
  tracer.init(); // initialized in a different file to avoid hoisting.
}

export default tracer;
