export declare type DataClass<T extends object> = Readonly<T> & {
  copy(prop: Partial<T>): DataClass<T>;
  equals(obj: any): boolean;
};
export declare function DataClassFactory<T extends object>(obj: T): DataClass<T>;