# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Requirements

1. Display all employees (from data source) in the home page, no need pagination.
  - Bonus: show loading state while waiting for the API to respond
  - Bonus: display them in a lazy-loaded `/employees` page

2. Display all departments (from data source) into the dropdown

2. Implement the feature to filter employees by name or email (searchbox)
  - Bonus: show loading state while waiting for the API to respond
  - Bonus: show empty state if there is no data matched the query
  - Bonus: use "debounce" technique to auto-filter when users type. Hint: use `debounceTime` from `rxjs`

3. Implement the employee detail page. From the list page, when users click on the name (hyperlink), navigate to the detail page.
  - Bonus: show 404 page and back to management link

4. Other bonus points:
  - Refactor the code, avoid bad practices.
  - Make use of typescript, rxjs, ngrx or any other best practices that you know.
  - Refactor/Apply styling with SCSS and BEM, CSS variables, grid, flexbox, etc