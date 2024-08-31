import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UsuariosComponent } from './component/usuarios/usuarios.component';

@NgModule({
    declarations: [
        HomeComponent,
        UsuariosComponent
    ],
    exports: [HomeComponent],
    imports: [HomeRoutingModule],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
