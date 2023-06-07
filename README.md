# ChangeDetection
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.
## App Purpose 
I created this app to understand the change detection strategy onPush  to enhance performance of one of projects that I am working on.

Setting Change Detection to OnPush will prevent all input reference variable updates to trigger change detection.

I tried this with an array and push new value to it, so when set change detection to onpush there is no updates  cuz the reference didn't change  to the array.

when make the same  with primitive type it feels the change even if the change detection strategy to onpush cuz the reference to the value changed  that is becuse of the immutability.

OnPush works with mutable data types.

Immutable data types are those which return a new reference to the variable when their values are updated. For example, when the count variable is updated from 3 to 4, the variable returned a new reference to the input parameter. Hence the change detection was triggered.

Mutable variables are those which can be updated without returning a new reference. For example arrays, objects, etc. So when we did

ChangeDetectionStrategy.OnPush prevents Angular’s check to move up to the parent if there is no new reference. 

Now what if we want some of the arrays to be checked for change detection even if the component has OnPush
1- this.unImportantItems = […this.unImportantItems,’Batgirl’];

## Custom Validation for the template driven form 
 custom validations for the template-driven form. 
 Checking for user name availability
 Password pattern validation
 Matching the password entered in two different fields

 1-create  CustomvalidationService 
 2-Create the User model
 3-Create custom directives



 ##  take the first page of file uploaded as a screenshot 
in 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.







