import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EndUserAgreementComponent } from './end-user-agreement/end-user-agreement.component';
import { InfoRoutingModule } from './info-routing.module';
import { EndUserAgreementContentComponent } from './end-user-agreement/end-user-agreement-content/end-user-agreement-content.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyContentComponent } from './privacy/privacy-content/privacy-content.component';
import { ThemedEndUserAgreementComponent } from './end-user-agreement/themed-end-user-agreement.component';
import { ThemedPrivacyComponent } from './privacy/themed-privacy.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';
import { ThemedFeedbackFormComponent } from './feedback/feedback-form/themed-feedback-form.component';
import { ThemedFeedbackComponent } from './feedback/themed-feedback.component';
import { FeedbackGuard } from '../core/feedback/feedback.guard';
import { MarkdownViewerModule } from '../shared/markdown-viewer/markdown-viewer.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { CcLicensesGuideComponent } from './cc-licenses-guide/cc-licenses-guide.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { RepositoryPolicyComponent } from './repository-policy/repository-policy.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { SelfArchivingGuideComponent } from './self-archiving-guide/self-archiving-guide.component';


const DECLARATIONS = [
  EndUserAgreementComponent,
  ThemedEndUserAgreementComponent,
  EndUserAgreementContentComponent,
  PrivacyComponent,
  PrivacyContentComponent,
  ThemedPrivacyComponent,
  FeedbackComponent,
  FeedbackFormComponent,
  ThemedFeedbackFormComponent,
  ThemedFeedbackComponent,
  AboutUsComponent,
  CcLicensesGuideComponent,
  InstructionsComponent,
  RepositoryPolicyComponent,
  UserGuideComponent,
  SelfArchivingGuideComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InfoRoutingModule,
    MarkdownViewerModule
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: [FeedbackGuard]
})
export class InfoModule {
}
