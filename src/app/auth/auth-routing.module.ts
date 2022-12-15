import { RouterModule, Routes } from "@angular/router";
import { OnlyLoggedInUsersGuard } from "../shared/guards/auth.activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login',
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Register',
        }
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [OnlyLoggedInUsersGuard],
        data: {
            title: 'Logout',
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [OnlyLoggedInUsersGuard],
        data: {
            title: 'Profile',
        }
    },
]

export const AuthRoutingModule = RouterModule.forChild(routes);