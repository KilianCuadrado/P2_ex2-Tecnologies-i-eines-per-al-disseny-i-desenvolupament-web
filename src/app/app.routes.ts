import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio';
import { Members } from './members/members';
import { Singlesalbuns } from './singlesalbuns/singlesalbuns';
import { History } from './history/history';
import { AlbumSpec } from './album-spec/album-spec';

export const routes: Routes = [
    {
        path:'',
        component: Inicio,
        pathMatch: 'full'
    },
    {
        path: 'members',
        component: Members
    },
    {
        path: 'singlesalbuns',
        component: Singlesalbuns
    },
    {
        path: 'history',
        component: History
    },
    {
        path:"singlesalbuns/:albun",
        component: AlbumSpec
    }
    


];