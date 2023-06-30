import { HttpClient } from '@angular/common/http';
import { FactoryProvider } from '@angular/core';
import {
  activateActionProvider,
  forgotPasswordActionProvider,
  loginActionProvider,
  registerActionProvider,
  resendActivationCodeActionProvider,
  resetPasswordActionProvider,
  SESSION_PERSISTENCE
} from '@features/authentication';
import {
  cognitoActivateAction$,
  cognitoForgotPasswordAction$,
  cognitoLoginAction$,
  cognitoRegisterAction$,
  cognitoResendActivationCodeAction$,
  cognitoResetPasswordAction$
} from '../actions';
import { COGNITO_PERSISTENCE } from '../providers';

export const cognitoAuthenticationProviders: () => FactoryProvider[] = (): FactoryProvider[] => [
  forgotPasswordActionProvider(cognitoForgotPasswordAction$, [HttpClient, COGNITO_PERSISTENCE]),
  activateActionProvider(cognitoActivateAction$, [HttpClient, COGNITO_PERSISTENCE]),
  loginActionProvider(cognitoLoginAction$, [HttpClient, COGNITO_PERSISTENCE, SESSION_PERSISTENCE]),
  registerActionProvider(cognitoRegisterAction$, [HttpClient, COGNITO_PERSISTENCE]),
  resendActivationCodeActionProvider(cognitoResendActivationCodeAction$, [HttpClient, COGNITO_PERSISTENCE]),
  resetPasswordActionProvider(cognitoResetPasswordAction$, [HttpClient, COGNITO_PERSISTENCE])
];
