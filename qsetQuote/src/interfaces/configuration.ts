import { HpDebugFlags } from '@avantia/questionset-model';

export interface ClientConfiguration {
  answersKey: string;
  ddApplicationId: string;
  ddClientToken: string;
  ddRumEnabled: boolean;
  debugFlags: HpDebugFlags;
  developerModeEnabled: boolean;
  environment: string;
  optimisationEnabled: boolean;
  gtmEnabled: boolean;
  homeProtectHomepageEnabled: boolean;
  hotjarEnabled: boolean;
  hotjarId: number;
  hotjarTrackingCode: number;
  questionSetKey: string;
  releaseVersion: string;
  virtualPath: string;
  websiteEndpoint: string;
}
