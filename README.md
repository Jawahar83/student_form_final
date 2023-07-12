# StudentFormFinal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

This is an Angular project that implements a data entry form with reactive forms, a table to display the data, and functionality to search, sort, and paginate the data. It also interacts with a backend API to post the form data and retrieve data.

The main components are:
•	Form component: Contains the reactive form to register students. Users can input student details like roll number, name, email, phone number, and gender.
•	Table component: Displays the data in a table. It has functionality to search, sort and paginate the data.
•	OrderBy pipe: Sorts the data in the table by a specified column and direction.
•	Students model: Defines the student data structure.
•	Student service: Interacts with the backend API to post new student data and retrieve student data.
The key features are:
•	Reactive form: Uses reactive forms to create a form to register students. Provides validation and error messages.
•	Search: Provides a search input to filter data in the table.
•	Sort: Allows sorting the data by clicking column headers.
•	Paginate: Shows previous and next buttons to navigate through multiple pages of data.
•	Server interaction: Posts new student data to the backend API and retrieves student data from the API.



