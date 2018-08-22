export class Employee {
  private _FirstName: string;
  public get FirstName(): string {
    return this._FirstName;
  }
  public set FirstName(v: string) {
    this._FirstName = v;
  }

  private _LastName: string;
  public get LastName(): string {
    return this._LastName;
  }
  public set LastName(v: string) {
    this._LastName = v;
  }

  private _Age: number;
  public get Age(): number {
    return this._Age;
  }
  public set Age(v: number) {
    this._Age = v;
  }

  /**
   * empty
   */
  public empty(): Employee {
    return new Employee();
  }
}
