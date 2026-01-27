import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { SignUp } from './component/sign-up/sign-up';
import { Donation } from './component/donation/donation';
import { History } from './component/history/history';
import { Trust } from './component/trust/trust';
import { Bookings } from './component/bookings/bookings';
import { Gallery } from './component/gallery/gallery';
import { HelpSupport } from './component/help-support/help-support';
import { AbhishekDarshan } from './component/abhishek-darshan/abhishek-darshan';
import { Home } from './component/home/home';
import { Livedarshan } from './component/livedarshan/livedarshan';
import { Programs } from './component/programs/programs';

export const routes: Routes = [

    {
         path: '',
         component: Login
     },
     {
         path: 'signup',
         component: SignUp
     },
     {
          path: 'donation',
          component: Donation
      },
     {
         path: 'history',
         component: History
     },
     {path: 'trust',
      component: Trust
     },
     {
         path: 'bookings',
         component: Bookings
     },
     {
         path: 'gallery',
         component: Gallery
     },
     {
         path: 'helpsupport',
         component: HelpSupport
     },
     {
         path: 'abhishekdarshan',
         component: AbhishekDarshan
     },
     {
        path: 'home',
        component: Home
     },
     {
        path:'login',
        component: Login
     },
     {
        path: 'signup',
        component: SignUp
     },
     {
        path:'livedarshan',
        component: Livedarshan
     },
     {
        path: 'programs',
        component: Programs
     }
];
