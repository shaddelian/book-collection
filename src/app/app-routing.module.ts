/**
 * Created by shohreh on 3/2/2018 AD.
 */
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BookCollectionComponent} from './book-collection/book-collection.component';
import {UserLibraryComponent} from './user-library/user-library.component';

const routes: Routes = [
    { path: '', redirectTo: '/book-collection', pathMatch: 'full' },
    { path: 'book-collection', component: BookCollectionComponent },
    { path: 'user-library', component: UserLibraryComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
