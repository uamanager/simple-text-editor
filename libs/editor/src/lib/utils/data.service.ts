import { BehaviorSubject } from 'rxjs';

export class GenericDataService<T extends { id: string }> {
  private _value: BehaviorSubject<{ [key: string]: T }> = new BehaviorSubject<{ [p: string]: T }>({});

  public get value(): { [key: string]: T } {
    return this._value.getValue();
  }

  public set value(value: { [key: string]: T }) {
    this._value.next({
      ...value
    });
  }

  public check(id: string): boolean {
    return this.value.hasOwnProperty(id);
  }

  public createBulk(values: T[]) {
    values.forEach(value => this.create(value.id, value));
  }

  public create(id: string, value: T) {
    if (this.check(id)) {
      this.error(`can't create item with id ${id}.`);
    }
    console.log(id);
    this.value[id] = value;
  }

  public readBulk(ids: string[]): T[] {
    return ids.map(id => this.read(id));
  }

  public read(id: string): T {
    if (!this.check(id)) {
      this.error(`can't read item with id ${id}.`);
    }
    return this.value[id];
  }

  public updateBulk(values: T[]) {
    values.forEach(value => this.update(value.id, value));
  }

  public update(id: string, value: T) {
    if (!this.check(id)) {
      this.error(`can't update item with id ${id}.`);
    }
    this.value[id] = value;
  }

  public deleteBulk(ids: string[]) {
    ids.forEach(id => this.delete(id));
  }

  public delete(id: string) {
    if (!this.check(id)) {
      this.error(`can't delete item with id ${id}.`);
    }
    delete this.value[id];
  }

  public error(message: string, name: string = 'GenericDataService') {
    throw new Error(`${name} Error: ${message}`);
  }
}
