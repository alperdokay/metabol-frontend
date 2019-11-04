import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';

import {documentationRouting, documentationRoutingProviders} from './documentation.routes';

@NgModule({
    imports: [
        CommonModule,
        documentationRouting
    ],
    providers: [documentationRoutingProviders],
    declarations: [DocumentationComponent]
})
export class DocumentationModule { }
