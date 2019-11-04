/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';

import {MetabolCommonModule} from '../metabol.common';
import { routing, appRoutingProviders }  from './app.routes';


describe('App: MetabolNew', () => {
  // beforeEach(() => {
  //
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent,
  //     ],
  //     imports: [
  //       routing,
  //       MetabolCommonModule,
  //     ],
  //     providers: [
  //       appRoutingProviders,
  //       { provide: APP_BASE_HREF, useValue: '/' }
  //     ],
  //   });
  //
  // });
  //
  // it('should create the app', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'app works!'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
