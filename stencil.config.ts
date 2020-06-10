
import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "app",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://myapp.local/",
    },
  ],
};
