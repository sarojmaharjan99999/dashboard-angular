import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewComponent }      from './add-new.component';

const appRoutes: Routes = [
    {
        path: 'add-new-form',
        component:AddNewComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);