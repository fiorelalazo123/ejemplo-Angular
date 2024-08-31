import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
    declarations: [
        UsuariosComponent
    ],
    exports: [UsuariosComponent],
    imports: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsuariosModule { }
