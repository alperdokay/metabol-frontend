// /* tslint:disable:no-unused-variable */
//
// import {
//   beforeEach, beforeEachProviders,
//   describe, xdescribe,
//   expect, it, xit,
//   async, inject
// } from '@angular/core/testing';
//
// import { SubsystemAnalyzeService } from './subsystem-analyze.service';
//
// import {provide} from '@angular/core';
// import {MockBackend, MockConnection} from '@angular/http/testing';
// import {MetaboliteConcentration} from '../../models/metaboliteConcentration';
// import {LoginService, LoginTestingService} from "../../../auth/services";
// import { APP_ROUTER_PROVIDERS, AppComponent, environment } from '../../../app';
//
// import {
//   Http,
//   HTTP_PROVIDERS,
//   Response,
//   ResponseOptions,
//   BaseRequestOptions,
// } from '@angular/http';
//
// import {AppSettings} from '../../../app/';
//
//
// import {SubsystemTreeNode, SubsystemTreeNodeType} from "../../models/subsystem";
//
// xdescribe('SubsystemAnalyze Service', () => {
//
//   let service: SubsystemAnalyzeService;
//   let mockBackend: MockBackend;
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
//     APP_ROUTER_PROVIDERS,
//     provide(LoginService, { useClass: LoginTestingService }),
//     SubsystemAnalyzeService
//   ]);
//
//   beforeEach(inject([SubsystemAnalyzeService, MockBackend], (s, m) => {
//     service = s;
//     mockBackend = m;
//   }));
//
//   let responseData: { [solution: string]: Array<string> } = {
//     "solution-1": ["pathway-1", "pathway-2", "pathway-3"],
//     "solution-2": ["pathway-1", "pathway-2"],
//     "solution-3": ["pathway-1", "pathway-3"],
//     "solution-4": ["pathway-2", "pathway-4"],
//     "solution-5": ["pathway-4"]
//   };
//
//   it('should ...', () => {
//     expect(service).toBeTruthy();
//   });
//
//   it('should get solutions', async(() => {
//
//     let apiData = [
//       { name: 'a', change: 1, exactValue: undefined },
//       { name: 'b', change: 2, exactValue: undefined },
//     ];
//
//     mockBackend.connections.subscribe(
//       (connection: MockConnection) => {
//         let options = new ResponseOptions({ body: responseData });
//         connection.mockRespond(new Response(options));
//
//         let body = JSON.parse(connection.request.json());
//         expect(body).toBeDefined();
//         expect(body.concentrationChanges.length).toEqual(apiData.length);
//
//         let expectedUrl = `${AppSettings.API_ENDPOINT}/subsystems-analyze`;
//         expect(connection.request.url).toEqual(expectedUrl);
//       });
//
//     service.startSolutions("analyze name", apiData, (data) => {
//       expect(data).toEqual(responseData);
//     });
//
//   }));
//
//   let pathwayData: { [solution: string]: Array<string> } = {
//     "pathway-1": ["solution-1", "solution-2", "solution-3"],
//     "pathway-2": ["solution-1", "solution-2", "solution-4"],
//     "pathway-3": ["solution-1", "solution-3"],
//     "pathway-4": ["solution-4", "solution-5"],
//   };
//
//   it('should reverseDict', () => {
//     expect(service.reverseDict(responseData)).toEqual(pathwayData);
//     let reverseOfReverse = service.reverseDict(service.reverseDict(responseData));
//     expect(reverseOfReverse).toEqual(responseData);
//   });
//
//   it('should select most active pathway', () => {
//     expect(service.mostActivePathway(pathwayData)).toEqual("pathway-1");
//   });
//
//   it('should calculate new branch', () => {
//
//     let children: { [solution: string]: Array<string> } = {
//       "pathway-2": ["solution-1", "solution-2"],
//       "pathway-3": ["solution-1", "solution-3"],
//     };
//
//     let parentsChildren: { [solution: string]: Array<string> } = {
//       "pathway-4": ["solution-4", "solution-5"],
//       "pathway-2": ["solution-4"],
//     };
//
//     let expectBranch = service.newBranchsOfSolution("pathway-1", pathwayData);
//
//     expect(expectBranch[0]).toEqual(children);
//     expect(expectBranch[1]).toEqual(parentsChildren);
//   });
//
//   it('should create subsystem solution tree', () => {
//     let solutionTree: SubsystemTreeNode = {
//       name: "All",
//       type: SubsystemTreeNodeType.All,
//       active: true,
//       highlight: false,
//       children: [
//         <SubsystemTreeNode>{
//           name: "pathway-4",
//           children: [
//             <SubsystemTreeNode>{
//               name: "pathway-2",
//               children: [
//                 <SubsystemTreeNode>{
//                   name: "solution-4",
//                 }
//               ]
//             },
//             <SubsystemTreeNode>{
//               name: "solution-5"
//             }
//           ]
//         },
//         <SubsystemTreeNode>{
//           name: "pathway-1",
//           children: [
//             <SubsystemTreeNode>{
//               name: "pathway-3",
//               children: [
//                 <SubsystemTreeNode>{
//                   name: "solution-3"
//                 }
//               ]
//             },
//             <SubsystemTreeNode>{
//               name: "pathway-2",
//               children: [
//                 <SubsystemTreeNode>{
//                   name: "pathway-3",
//                   children: [
//                     <SubsystemTreeNode>{
//                       name: "solution-1"
//                     }
//                   ]
//                 },
//                 <SubsystemTreeNode>{
//                   name: "solution-2"
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     };
//
//     let expectedTree = service.getSolutionTree(pathwayData);
//     expect(expectedTree).toEqual(solutionTree);
//   });
//
// });
