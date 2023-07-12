// orderBy.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], column: string, direction: string): any[] {
    if (!array || !column || !direction) {
      return array;
    }
  
    const isDesc = direction === 'desc';
  
    const sortedArray = array.sort((a, b) => {
      const propertyA = a[column].toString().toLowerCase();
      const propertyB = b[column].toString().toLowerCase();
  
      return isDesc ? propertyB.localeCompare(propertyA) : propertyA.localeCompare(propertyB);
    });
  
    return sortedArray;
  }

  private getCompareFn(direction: string): (a: any, b: any) => number {
    if (direction === 'asc') {
      return (a, b) => a.localeCompare(b);
    } else {
      return (a, b) => b.localeCompare(a);
    }
  }
}