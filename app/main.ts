// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {NS_ROUTER_PROVIDERS} from "nativescript-angular/router";

import {AppComponent} from "./template/app.component";
import {NavigationTestRouter} from "./router/router-outlet"
import {NavigationTestPageRouter} from "./router/page-router-outlet"
import {NavigationMainPageRouter} from "./main/main-page-router-outlet"

// nativeScriptBootstrap(AppComponent);

// tns-template-hello-world-ng
// nativeScriptBootstrap(AppComponent, null, {"cssFile": "./template/app.component.css"});

// router-outlet
// nativeScriptBootstrap(NavigationTestRouter, [NS_ROUTER_PROVIDERS], {"cssFile": "./router/router-outlet.css"});

// page-router-outlet
// nativeScriptBootstrap(NavigationTestPageRouter, [NS_ROUTER_PROVIDERS]);

// main-page-router-outlet
nativeScriptBootstrap(NavigationMainPageRouter, [NS_ROUTER_PROVIDERS]);