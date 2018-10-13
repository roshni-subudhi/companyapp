// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{ 
    apiKey: "AIzaSyCR2ha6KNCJkGv61gpTF1K4Mlor5KJOSwQ",
    authDomain: "company-db-841ed.firebaseapp.com",
    databaseURL: "https://company-db-841ed.firebaseio.com",
    projectId: "company-db-841ed",
    storageBucket: "company-db-841ed.appspot.com",
    messagingSenderId: "681063878921"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
