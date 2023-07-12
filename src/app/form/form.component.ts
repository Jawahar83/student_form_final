import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  students: any;
  sortDirection = 'asc';
  sortColumn = '';
  searchTerm: string = '';
  pageNumber = 1;
  pageSize = 10;

  onSelectionChange(event: any) {
    this.pageSize = event.target.value;
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    let resp = this.http.get(`https://springrestapi-production.up.railway.app/persons?pageSize=${this.pageSize}&pageNo=${this.pageNumber}`);
    resp.subscribe((data) => this.students = data);
  }

  sort(column: string) {
    if (column === this.sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.students.sort((a: any, b: any) => {
      const aValue = a[column];
      const bValue = b[column];
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else {
        return 0;
      }
    });
  }

  nextPage() {
    this.pageNumber++;
    this.getStudents();
  }

  prevPage() {
    this.pageNumber--;
    this.getStudents();
  }
}