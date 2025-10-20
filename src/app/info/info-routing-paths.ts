import { getInfoModulePath } from '../app-routing-paths';

export const END_USER_AGREEMENT_PATH = 'end-user-agreement';
export const PRIVACY_PATH = 'privacy';
export const FEEDBACK_PATH = 'feedback';
export const ABOUT_US_PATH = 'about-us';
export const CC_LICENSES_GUIDE_PATH = 'cc-licenses-guide';
export const INSTRUCTIONS_PATH = 'instructions';
export const REPOSITORY_POLICY_PATH = 'repository-policy';
export const USER_GUIDE_PATH = 'user-guide';
export const SELF_ARCHIVING_GUIDE_PATH = 'self-archiving-guide';

export function getEndUserAgreementPath() {
    return getSubPath(END_USER_AGREEMENT_PATH);
}

export function getPrivacyPath() {
    return getSubPath(PRIVACY_PATH);
}

export function getFeedbackPath() {
    return getSubPath(FEEDBACK_PATH);
}

function getSubPath(path: string) {
    return `${getInfoModulePath()}/${path}`;
}
