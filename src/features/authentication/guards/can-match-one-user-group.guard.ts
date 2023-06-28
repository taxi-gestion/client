import { Inject, Injectable } from '@angular/core';
import { SESSION_PERSISTENCE, TokenSession } from '../providers';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class CanMatchOneUserGroupGuard {
  public constructor(@Inject(SESSION_PERSISTENCE) private readonly _session: TokenSession) {}

  public canMatch = (route: ActivatedRouteSnapshot): boolean =>
    matchAtLeastOneGroup(this._session.idTokenPayload('cognito:groups') as string[], route.data['allowedGroups'] as string[]);
}

const matchAtLeastOneGroup = (userGroups: string[], allowedGroups: string[]): boolean =>
  userGroups.some((group: string): boolean => allowedGroups.includes(group));
