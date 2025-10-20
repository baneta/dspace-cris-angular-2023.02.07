import { Config } from './config.interface';
import { ThirdPartyMetric } from './third-party-metric-config';

export interface InfoConfig extends Config {
  enableEndUserAgreement: boolean;
  enablePrivacyStatement: boolean;
  enableAboutUs: boolean;
  enableCcLicensesGuide: boolean;
  enableInstructions: boolean;
  enableRepositoryPolicy: boolean;
  enableUserGuide: boolean;
  metricsConsents: ThirdPartyMetric[];
}
