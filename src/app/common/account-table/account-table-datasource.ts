import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface AccountTableItem {
  name: string;
  id: number;
  dept: number;

}


const EXAMPLE_DATA: AccountTableItem[] = [
  { id: 1, name: 'Carma', dept: 100 },
  { id: 2, name: 'Sila', dept: -300 },
  { id: 3, name: 'Ganz', dept: 223 },
  { id: 4, name: 'Carl', dept: 123 },
  { id: 5, name: 'Boron', dept: -10 },
  { id: 6, name: 'Anna', dept: 123 },
  { id: 7, name: 'Chan', dept: 33 },
  { id: 8, name: 'Valse', dept: 21 },
  { id: 9, name: 'Fluorine', dept: 3 },
  { id: 10, name: 'Neon', dept: 222 },
  { id: 11, name: 'Sodium', dept: 100 },
  { id: 12, name: 'Magnesium', dept: 100 },
  { id: 13, name: 'Aluminum', dept: 11 },
  { id: 14, name: 'Silicon', dept: 333 },
  { id: 15, name: 'Phosphorus', dept: -20 },
  { id: 16, name: 'Sulfur', dept: 1233 },
  { id: 17, name: 'Chlorine', dept: 100 },
  { id: 18, name: 'Argon', dept: 0 },
  { id: 19, name: 'Potassium', dept: 0 },
  { id: 20, name: 'Calcium', dept: 100 },
];

/**
 * Data source for the AccountTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AccountTableDataSource extends DataSource<AccountTableItem> {
  data: AccountTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<AccountTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: AccountTableItem[]): AccountTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: AccountTableItem[]): AccountTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'dept':
          return compare(+a.dept, +b.dept, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
