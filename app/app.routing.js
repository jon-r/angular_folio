"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var list_component_1 = require('./list/list.component');
var single_component_1 = require('./single/single.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'folio',
        component: list_component_1.ListComponent
    },
    {
        path: 'work/:id',
        component: single_component_1.SingleComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
