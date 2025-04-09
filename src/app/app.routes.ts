import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

export const routes: Routes = [
    {
        path: "navbar",
        component: NavbarComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
   
    {
        path: "registration",
        component: RegistrationComponent
    },

    {
        path: "aboutus",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },

    {
        path: "footer",
        component: FooterComponent
    },
    {
        path: "carousel",
        component: CarouselComponent
    },

];
