// /* tslint:disable:no-unused-variable */
//
// import {
//   beforeEach, beforeEachProviders,
//   describe, xdescribe,
//   expect, it, xit,
//   async, inject
// } from '@angular/core/testing';
// import { LoginService } from './login.service';
// import {provide} from '@angular/core'; //sonradan ekledim iki yazı arasını
// import {MockBackend, MockConnection} from '@angular/http/testing';
// import {AppSettings} from '../../../app/';
// import {
//   Http,
//   HTTP_PROVIDERS,
//   Response,
//   ResponseOptions,
//   BaseRequestOptions
// } from '@angular/http'; //sonradan ekledim
//
// //describe('Login Service', () => {
//   // beforeEachProviders(() => [LoginService]);
//   //
//   // it('should ...',
//   //     });([LoginService], (service: LoginService) => {
//   //   expect(service).toBeTruthy();
//   // }));
// //});
//
//
//
// /**describe('Login Service', () => {
//   let LoginService: LoginService;
//   let mockBackend: MockBackend;
//   let Email = 'a@e.com';
//   let Password = '123123'
//
//   const mockHttpProvider = {
//     deps: [MockBackend, BaseRequestOptions],
//     useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
//       return new Http(backend, defaultOptions);
//     }
//   }
//
//   beforeEachProviders(() => [
//     MockBackend,
//     BaseRequestOptions,
//     provide(Http, mockHttpProvider),
//     LoginService
//   ]);
//
//   beforeEach(inject([LoginService, MockBackend], (l, m) => {
//     LoginService = l;
//     mockBackend = m;
//   }));
//
//   it('should response search prefix', async(() => {
//
//     let apiData = {
//       reactions: ['a', 'b', 'c'],
//       metabolites: ['x', 'y', 'z']
//     };
//
//     mockBackend.connections.subscribe(
//       (connection: MockConnection) => {
//         let options = new ResponseOptions({ body: apiData });
//         connection.mockRespond(new Response(options));
//
//         let expectedUrl = `${AppSettings.API_ENDPOINT}/token`;
//         expect(connection.request.url).toEqual(expectedUrl);
//       });
//
//     LoginService.login('test@test.com', 'password').subscribe((data) => {
//       expect(data.success).toBeTruthy();
//       expect(data.metabolites).toEqual(apiData.metabolites);
//     });
//
//   }));
// });
// **/
