import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nBreadcrumbResolver } from '../core/breadcrumbs/i18n-breadcrumb.resolver';
import { PRIVACY_PATH, END_USER_AGREEMENT_PATH, FEEDBACK_PATH, ABOUT_US_PATH, CC_LICENSES_GUIDE_PATH, INSTRUCTIONS_PATH, REPOSITORY_POLICY_PATH, USER_GUIDE_PATH } from './info-routing-paths';
import { ThemedEndUserAgreementComponent } from './end-user-agreement/themed-end-user-agreement.component';
import { ThemedPrivacyComponent } from './privacy/themed-privacy.component';
import { ThemedFeedbackComponent } from './feedback/themed-feedback.component';
import { FeedbackGuard } from '../core/feedback/feedback.guard';
import { environment } from '../../environments/environment';
import { AboutUsComponent } from './about-us/about-us.component';
import { CcLicensesGuideComponent } from './cc-licenses-guide/cc-licenses-guide.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { RepositoryPolicyComponent } from './repository-policy/repository-policy.component';
import { UserGuideComponent } from './user-guide/user-guide.component';


const imports = [
  RouterModule.forChild([
    {
      path: FEEDBACK_PATH,
      component: ThemedFeedbackComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.feedback.title', breadcrumbKey: 'info.feedback' },
      canActivate: [FeedbackGuard]
    }
  ])
];

  if (environment.info.enableEndUserAgreement) {
    imports.push(
      RouterModule.forChild([
        {
          path: END_USER_AGREEMENT_PATH,
          component: ThemedEndUserAgreementComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.end-user-agreement.title', breadcrumbKey: 'info.end-user-agreement' }
        }
      ]));
  }
  if (environment.info.enablePrivacyStatement) {
    imports.push(
      RouterModule.forChild([
        {
          path: PRIVACY_PATH,
          component: ThemedPrivacyComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.privacy.title', breadcrumbKey: 'info.privacy' }
        }
      ]));
  }

  if (environment.info.enableAboutUs) {
    imports.push(
      RouterModule.forChild([
        {
          path: ABOUT_US_PATH,
          component: AboutUsComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.about-us.title', breadcrumbKey: 'info.about-us' }
        }
      ]));
  }

  if (environment.info.enableCcLicensesGuide) {
    imports.push(
      RouterModule.forChild([
        {
          path: CC_LICENSES_GUIDE_PATH,
          component: CcLicensesGuideComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.cc-licenses-guide.title', breadcrumbKey: 'info.cc-licenses-guide' }
        }
      ]));
  }

  if (environment.info.enableInstructions) {
    imports.push(
      RouterModule.forChild([
        {
          path: INSTRUCTIONS_PATH,
          component: InstructionsComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.instructions.title', breadcrumbKey: 'info.instructions' }
        }
      ]));
  }

  if (environment.info.enableRepositoryPolicy) {
    imports.push(
      RouterModule.forChild([
        {
          path: REPOSITORY_POLICY_PATH,
          component: RepositoryPolicyComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.repository-policy.title', breadcrumbKey: 'info.repository-policy' }
        }
      ]));
  }

  if (environment.info.enableUserGuide) {
    imports.push(
      RouterModule.forChild([
        {
          path: USER_GUIDE_PATH,
          component: UserGuideComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.user-guide.title', breadcrumbKey: 'info.user-guide' }
        }
      ]));
  }

@NgModule({
  imports: [
    ...imports
  ]
})
/**
 * Module for navigating to components within the info module
 */
export class InfoRoutingModule {
}
