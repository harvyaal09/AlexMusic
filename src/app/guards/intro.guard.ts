import { CanActivate } from '@angular/router';

export class IntroGuard implements CanActivate{
  canActivate(){
    return true;
  }
};
