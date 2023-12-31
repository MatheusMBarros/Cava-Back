
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Mold
 * 
 */
export type Mold = $Result.DefaultSelection<Prisma.$MoldPayload>
/**
 * Model Piece
 * 
 */
export type Piece = $Result.DefaultSelection<Prisma.$PiecePayload>
/**
 * Model Mold_Piece
 * 
 */
export type Mold_Piece = $Result.DefaultSelection<Prisma.$Mold_PiecePayload>
/**
 * Model Production_Order
 * 
 */
export type Production_Order = $Result.DefaultSelection<Prisma.$Production_OrderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.mold`: Exposes CRUD operations for the **Mold** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Molds
    * const molds = await prisma.mold.findMany()
    * ```
    */
  get mold(): Prisma.MoldDelegate<ExtArgs>;

  /**
   * `prisma.piece`: Exposes CRUD operations for the **Piece** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pieces
    * const pieces = await prisma.piece.findMany()
    * ```
    */
  get piece(): Prisma.PieceDelegate<ExtArgs>;

  /**
   * `prisma.mold_Piece`: Exposes CRUD operations for the **Mold_Piece** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mold_Pieces
    * const mold_Pieces = await prisma.mold_Piece.findMany()
    * ```
    */
  get mold_Piece(): Prisma.Mold_PieceDelegate<ExtArgs>;

  /**
   * `prisma.production_Order`: Exposes CRUD operations for the **Production_Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Production_Orders
    * const production_Orders = await prisma.production_Order.findMany()
    * ```
    */
  get production_Order(): Prisma.Production_OrderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employee: 'Employee',
    Mold: 'Mold',
    Piece: 'Piece',
    Mold_Piece: 'Mold_Piece',
    Production_Order: 'Production_Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'employee' | 'mold' | 'piece' | 'mold_Piece' | 'production_Order'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>,
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Mold: {
        payload: Prisma.$MoldPayload<ExtArgs>
        fields: Prisma.MoldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoldFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoldFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload>
          }
          findFirst: {
            args: Prisma.MoldFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoldFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload>
          }
          findMany: {
            args: Prisma.MoldFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload>[]
          }
          create: {
            args: Prisma.MoldCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload>
          }
          createMany: {
            args: Prisma.MoldCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MoldDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload>
          }
          update: {
            args: Prisma.MoldUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload>
          }
          deleteMany: {
            args: Prisma.MoldDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MoldUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MoldUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoldPayload>
          }
          aggregate: {
            args: Prisma.MoldAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMold>
          }
          groupBy: {
            args: Prisma.MoldGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MoldGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoldCountArgs<ExtArgs>,
            result: $Utils.Optional<MoldCountAggregateOutputType> | number
          }
        }
      }
      Piece: {
        payload: Prisma.$PiecePayload<ExtArgs>
        fields: Prisma.PieceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PieceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PieceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          findFirst: {
            args: Prisma.PieceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PieceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          findMany: {
            args: Prisma.PieceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>[]
          }
          create: {
            args: Prisma.PieceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          createMany: {
            args: Prisma.PieceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PieceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          update: {
            args: Prisma.PieceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          deleteMany: {
            args: Prisma.PieceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PieceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PieceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          aggregate: {
            args: Prisma.PieceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePiece>
          }
          groupBy: {
            args: Prisma.PieceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PieceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PieceCountArgs<ExtArgs>,
            result: $Utils.Optional<PieceCountAggregateOutputType> | number
          }
        }
      }
      Mold_Piece: {
        payload: Prisma.$Mold_PiecePayload<ExtArgs>
        fields: Prisma.Mold_PieceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Mold_PieceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Mold_PieceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload>
          }
          findFirst: {
            args: Prisma.Mold_PieceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Mold_PieceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload>
          }
          findMany: {
            args: Prisma.Mold_PieceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload>[]
          }
          create: {
            args: Prisma.Mold_PieceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload>
          }
          createMany: {
            args: Prisma.Mold_PieceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Mold_PieceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload>
          }
          update: {
            args: Prisma.Mold_PieceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload>
          }
          deleteMany: {
            args: Prisma.Mold_PieceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Mold_PieceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Mold_PieceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Mold_PiecePayload>
          }
          aggregate: {
            args: Prisma.Mold_PieceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMold_Piece>
          }
          groupBy: {
            args: Prisma.Mold_PieceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Mold_PieceGroupByOutputType>[]
          }
          count: {
            args: Prisma.Mold_PieceCountArgs<ExtArgs>,
            result: $Utils.Optional<Mold_PieceCountAggregateOutputType> | number
          }
        }
      }
      Production_Order: {
        payload: Prisma.$Production_OrderPayload<ExtArgs>
        fields: Prisma.Production_OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Production_OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Production_OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload>
          }
          findFirst: {
            args: Prisma.Production_OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Production_OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload>
          }
          findMany: {
            args: Prisma.Production_OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload>[]
          }
          create: {
            args: Prisma.Production_OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload>
          }
          createMany: {
            args: Prisma.Production_OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Production_OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload>
          }
          update: {
            args: Prisma.Production_OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload>
          }
          deleteMany: {
            args: Prisma.Production_OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Production_OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Production_OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Production_OrderPayload>
          }
          aggregate: {
            args: Prisma.Production_OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduction_Order>
          }
          groupBy: {
            args: Prisma.Production_OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Production_OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.Production_OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<Production_OrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    Production_Order: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Production_Order?: boolean | EmployeeCountOutputTypeCountProduction_OrderArgs
  }

  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountProduction_OrderArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Production_OrderWhereInput
  }



  /**
   * Count Type MoldCountOutputType
   */

  export type MoldCountOutputType = {
    Mold_Piece: number
    Production_Order: number
  }

  export type MoldCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Mold_Piece?: boolean | MoldCountOutputTypeCountMold_PieceArgs
    Production_Order?: boolean | MoldCountOutputTypeCountProduction_OrderArgs
  }

  // Custom InputTypes

  /**
   * MoldCountOutputType without action
   */
  export type MoldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoldCountOutputType
     */
    select?: MoldCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MoldCountOutputType without action
   */
  export type MoldCountOutputTypeCountMold_PieceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Mold_PieceWhereInput
  }


  /**
   * MoldCountOutputType without action
   */
  export type MoldCountOutputTypeCountProduction_OrderArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Production_OrderWhereInput
  }



  /**
   * Count Type PieceCountOutputType
   */

  export type PieceCountOutputType = {
    Mold_Piece: number
  }

  export type PieceCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Mold_Piece?: boolean | PieceCountOutputTypeCountMold_PieceArgs
  }

  // Custom InputTypes

  /**
   * PieceCountOutputType without action
   */
  export type PieceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PieceCountOutputType
     */
    select?: PieceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PieceCountOutputType without action
   */
  export type PieceCountOutputTypeCountMold_PieceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Mold_PieceWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    employee_id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    employee_id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    employee_id: number | null
    name: string | null
    password: string | null
    sector: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    employee_id: number | null
    name: string | null
    password: string | null
    sector: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    employee_id: number
    name: number
    password: number
    sector: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    employee_id?: true
  }

  export type EmployeeSumAggregateInputType = {
    employee_id?: true
  }

  export type EmployeeMinAggregateInputType = {
    employee_id?: true
    name?: true
    password?: true
    sector?: true
  }

  export type EmployeeMaxAggregateInputType = {
    employee_id?: true
    name?: true
    password?: true
    sector?: true
  }

  export type EmployeeCountAggregateInputType = {
    employee_id?: true
    name?: true
    password?: true
    sector?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    employee_id: number
    name: string
    password: string
    sector: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    name?: boolean
    password?: boolean
    sector?: boolean
    Production_Order?: boolean | Employee$Production_OrderArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    employee_id?: boolean
    name?: boolean
    password?: boolean
    sector?: boolean
  }

  export type EmployeeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Production_Order?: boolean | Employee$Production_OrderArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EmployeePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      Production_Order: Prisma.$Production_OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      employee_id: number
      name: string
      password: string
      sector: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }


  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `employee_id`
     * const employeeWithEmployee_idOnly = await prisma.employee.findMany({ select: { employee_id: true } })
     * 
    **/
    findMany<T extends EmployeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
    **/
    create<T extends EmployeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Employees.
     *     @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Production_Order<T extends Employee$Production_OrderArgs<ExtArgs> = {}>(args?: Subset<T, Employee$Production_OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly employee_id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly password: FieldRef<"Employee", 'String'>
    readonly sector: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }


  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }


  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee.Production_Order
   */
  export type Employee$Production_OrderArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    where?: Production_OrderWhereInput
    orderBy?: Production_OrderOrderByWithRelationInput | Production_OrderOrderByWithRelationInput[]
    cursor?: Production_OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Production_OrderScalarFieldEnum | Production_OrderScalarFieldEnum[]
  }


  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
  }



  /**
   * Model Mold
   */

  export type AggregateMold = {
    _count: MoldCountAggregateOutputType | null
    _avg: MoldAvgAggregateOutputType | null
    _sum: MoldSumAggregateOutputType | null
    _min: MoldMinAggregateOutputType | null
    _max: MoldMaxAggregateOutputType | null
  }

  export type MoldAvgAggregateOutputType = {
    mold_id: number | null
    total_weight: number | null
    channel_return_weight: number | null
    channel_lost_percentage: number | null
    mold_aluminium_loss: number | null
  }

  export type MoldSumAggregateOutputType = {
    mold_id: number | null
    total_weight: number | null
    channel_return_weight: number | null
    channel_lost_percentage: number | null
    mold_aluminium_loss: number | null
  }

  export type MoldMinAggregateOutputType = {
    mold_id: number | null
    name: string | null
    total_weight: number | null
    channel_return_weight: number | null
    channel_lost_percentage: number | null
    mold_aluminium_loss: number | null
  }

  export type MoldMaxAggregateOutputType = {
    mold_id: number | null
    name: string | null
    total_weight: number | null
    channel_return_weight: number | null
    channel_lost_percentage: number | null
    mold_aluminium_loss: number | null
  }

  export type MoldCountAggregateOutputType = {
    mold_id: number
    name: number
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
    _all: number
  }


  export type MoldAvgAggregateInputType = {
    mold_id?: true
    total_weight?: true
    channel_return_weight?: true
    channel_lost_percentage?: true
    mold_aluminium_loss?: true
  }

  export type MoldSumAggregateInputType = {
    mold_id?: true
    total_weight?: true
    channel_return_weight?: true
    channel_lost_percentage?: true
    mold_aluminium_loss?: true
  }

  export type MoldMinAggregateInputType = {
    mold_id?: true
    name?: true
    total_weight?: true
    channel_return_weight?: true
    channel_lost_percentage?: true
    mold_aluminium_loss?: true
  }

  export type MoldMaxAggregateInputType = {
    mold_id?: true
    name?: true
    total_weight?: true
    channel_return_weight?: true
    channel_lost_percentage?: true
    mold_aluminium_loss?: true
  }

  export type MoldCountAggregateInputType = {
    mold_id?: true
    name?: true
    total_weight?: true
    channel_return_weight?: true
    channel_lost_percentage?: true
    mold_aluminium_loss?: true
    _all?: true
  }

  export type MoldAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mold to aggregate.
     */
    where?: MoldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Molds to fetch.
     */
    orderBy?: MoldOrderByWithRelationInput | MoldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Molds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Molds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Molds
    **/
    _count?: true | MoldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoldMaxAggregateInputType
  }

  export type GetMoldAggregateType<T extends MoldAggregateArgs> = {
        [P in keyof T & keyof AggregateMold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMold[P]>
      : GetScalarType<T[P], AggregateMold[P]>
  }




  export type MoldGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MoldWhereInput
    orderBy?: MoldOrderByWithAggregationInput | MoldOrderByWithAggregationInput[]
    by: MoldScalarFieldEnum[] | MoldScalarFieldEnum
    having?: MoldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoldCountAggregateInputType | true
    _avg?: MoldAvgAggregateInputType
    _sum?: MoldSumAggregateInputType
    _min?: MoldMinAggregateInputType
    _max?: MoldMaxAggregateInputType
  }

  export type MoldGroupByOutputType = {
    mold_id: number
    name: string
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
    _count: MoldCountAggregateOutputType | null
    _avg: MoldAvgAggregateOutputType | null
    _sum: MoldSumAggregateOutputType | null
    _min: MoldMinAggregateOutputType | null
    _max: MoldMaxAggregateOutputType | null
  }

  type GetMoldGroupByPayload<T extends MoldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoldGroupByOutputType[P]>
            : GetScalarType<T[P], MoldGroupByOutputType[P]>
        }
      >
    >


  export type MoldSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mold_id?: boolean
    name?: boolean
    total_weight?: boolean
    channel_return_weight?: boolean
    channel_lost_percentage?: boolean
    mold_aluminium_loss?: boolean
    Mold_Piece?: boolean | Mold$Mold_PieceArgs<ExtArgs>
    Production_Order?: boolean | Mold$Production_OrderArgs<ExtArgs>
    _count?: boolean | MoldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mold"]>

  export type MoldSelectScalar = {
    mold_id?: boolean
    name?: boolean
    total_weight?: boolean
    channel_return_weight?: boolean
    channel_lost_percentage?: boolean
    mold_aluminium_loss?: boolean
  }

  export type MoldInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Mold_Piece?: boolean | Mold$Mold_PieceArgs<ExtArgs>
    Production_Order?: boolean | Mold$Production_OrderArgs<ExtArgs>
    _count?: boolean | MoldCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MoldPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Mold"
    objects: {
      Mold_Piece: Prisma.$Mold_PiecePayload<ExtArgs>[]
      Production_Order: Prisma.$Production_OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      mold_id: number
      name: string
      total_weight: number
      channel_return_weight: number
      channel_lost_percentage: number
      mold_aluminium_loss: number
    }, ExtArgs["result"]["mold"]>
    composites: {}
  }


  type MoldGetPayload<S extends boolean | null | undefined | MoldDefaultArgs> = $Result.GetResult<Prisma.$MoldPayload, S>

  type MoldCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MoldFindManyArgs, 'select' | 'include'> & {
      select?: MoldCountAggregateInputType | true
    }

  export interface MoldDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mold'], meta: { name: 'Mold' } }
    /**
     * Find zero or one Mold that matches the filter.
     * @param {MoldFindUniqueArgs} args - Arguments to find a Mold
     * @example
     * // Get one Mold
     * const mold = await prisma.mold.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MoldFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MoldFindUniqueArgs<ExtArgs>>
    ): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mold that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MoldFindUniqueOrThrowArgs} args - Arguments to find a Mold
     * @example
     * // Get one Mold
     * const mold = await prisma.mold.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MoldFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoldFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mold that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoldFindFirstArgs} args - Arguments to find a Mold
     * @example
     * // Get one Mold
     * const mold = await prisma.mold.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MoldFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MoldFindFirstArgs<ExtArgs>>
    ): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mold that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoldFindFirstOrThrowArgs} args - Arguments to find a Mold
     * @example
     * // Get one Mold
     * const mold = await prisma.mold.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MoldFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoldFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Molds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Molds
     * const molds = await prisma.mold.findMany()
     * 
     * // Get first 10 Molds
     * const molds = await prisma.mold.findMany({ take: 10 })
     * 
     * // Only select the `mold_id`
     * const moldWithMold_idOnly = await prisma.mold.findMany({ select: { mold_id: true } })
     * 
    **/
    findMany<T extends MoldFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoldFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mold.
     * @param {MoldCreateArgs} args - Arguments to create a Mold.
     * @example
     * // Create one Mold
     * const Mold = await prisma.mold.create({
     *   data: {
     *     // ... data to create a Mold
     *   }
     * })
     * 
    **/
    create<T extends MoldCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MoldCreateArgs<ExtArgs>>
    ): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Molds.
     *     @param {MoldCreateManyArgs} args - Arguments to create many Molds.
     *     @example
     *     // Create many Molds
     *     const mold = await prisma.mold.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MoldCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoldCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mold.
     * @param {MoldDeleteArgs} args - Arguments to delete one Mold.
     * @example
     * // Delete one Mold
     * const Mold = await prisma.mold.delete({
     *   where: {
     *     // ... filter to delete one Mold
     *   }
     * })
     * 
    **/
    delete<T extends MoldDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MoldDeleteArgs<ExtArgs>>
    ): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mold.
     * @param {MoldUpdateArgs} args - Arguments to update one Mold.
     * @example
     * // Update one Mold
     * const mold = await prisma.mold.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MoldUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MoldUpdateArgs<ExtArgs>>
    ): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Molds.
     * @param {MoldDeleteManyArgs} args - Arguments to filter Molds to delete.
     * @example
     * // Delete a few Molds
     * const { count } = await prisma.mold.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MoldDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoldDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Molds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Molds
     * const mold = await prisma.mold.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MoldUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MoldUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mold.
     * @param {MoldUpsertArgs} args - Arguments to update or create a Mold.
     * @example
     * // Update or create a Mold
     * const mold = await prisma.mold.upsert({
     *   create: {
     *     // ... data to create a Mold
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mold we want to update
     *   }
     * })
    **/
    upsert<T extends MoldUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MoldUpsertArgs<ExtArgs>>
    ): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Molds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoldCountArgs} args - Arguments to filter Molds to count.
     * @example
     * // Count the number of Molds
     * const count = await prisma.mold.count({
     *   where: {
     *     // ... the filter for the Molds we want to count
     *   }
     * })
    **/
    count<T extends MoldCountArgs>(
      args?: Subset<T, MoldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoldAggregateArgs>(args: Subset<T, MoldAggregateArgs>): Prisma.PrismaPromise<GetMoldAggregateType<T>>

    /**
     * Group by Mold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoldGroupByArgs['orderBy'] }
        : { orderBy?: MoldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mold model
   */
  readonly fields: MoldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mold.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoldClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Mold_Piece<T extends Mold$Mold_PieceArgs<ExtArgs> = {}>(args?: Subset<T, Mold$Mold_PieceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'findMany'> | Null>;

    Production_Order<T extends Mold$Production_OrderArgs<ExtArgs> = {}>(args?: Subset<T, Mold$Production_OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Mold model
   */ 
  interface MoldFieldRefs {
    readonly mold_id: FieldRef<"Mold", 'Int'>
    readonly name: FieldRef<"Mold", 'String'>
    readonly total_weight: FieldRef<"Mold", 'Float'>
    readonly channel_return_weight: FieldRef<"Mold", 'Float'>
    readonly channel_lost_percentage: FieldRef<"Mold", 'Float'>
    readonly mold_aluminium_loss: FieldRef<"Mold", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Mold findUnique
   */
  export type MoldFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * Filter, which Mold to fetch.
     */
    where: MoldWhereUniqueInput
  }


  /**
   * Mold findUniqueOrThrow
   */
  export type MoldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * Filter, which Mold to fetch.
     */
    where: MoldWhereUniqueInput
  }


  /**
   * Mold findFirst
   */
  export type MoldFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * Filter, which Mold to fetch.
     */
    where?: MoldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Molds to fetch.
     */
    orderBy?: MoldOrderByWithRelationInput | MoldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Molds.
     */
    cursor?: MoldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Molds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Molds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Molds.
     */
    distinct?: MoldScalarFieldEnum | MoldScalarFieldEnum[]
  }


  /**
   * Mold findFirstOrThrow
   */
  export type MoldFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * Filter, which Mold to fetch.
     */
    where?: MoldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Molds to fetch.
     */
    orderBy?: MoldOrderByWithRelationInput | MoldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Molds.
     */
    cursor?: MoldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Molds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Molds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Molds.
     */
    distinct?: MoldScalarFieldEnum | MoldScalarFieldEnum[]
  }


  /**
   * Mold findMany
   */
  export type MoldFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * Filter, which Molds to fetch.
     */
    where?: MoldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Molds to fetch.
     */
    orderBy?: MoldOrderByWithRelationInput | MoldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Molds.
     */
    cursor?: MoldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Molds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Molds.
     */
    skip?: number
    distinct?: MoldScalarFieldEnum | MoldScalarFieldEnum[]
  }


  /**
   * Mold create
   */
  export type MoldCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * The data needed to create a Mold.
     */
    data: XOR<MoldCreateInput, MoldUncheckedCreateInput>
  }


  /**
   * Mold createMany
   */
  export type MoldCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Molds.
     */
    data: MoldCreateManyInput | MoldCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Mold update
   */
  export type MoldUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * The data needed to update a Mold.
     */
    data: XOR<MoldUpdateInput, MoldUncheckedUpdateInput>
    /**
     * Choose, which Mold to update.
     */
    where: MoldWhereUniqueInput
  }


  /**
   * Mold updateMany
   */
  export type MoldUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Molds.
     */
    data: XOR<MoldUpdateManyMutationInput, MoldUncheckedUpdateManyInput>
    /**
     * Filter which Molds to update
     */
    where?: MoldWhereInput
  }


  /**
   * Mold upsert
   */
  export type MoldUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * The filter to search for the Mold to update in case it exists.
     */
    where: MoldWhereUniqueInput
    /**
     * In case the Mold found by the `where` argument doesn't exist, create a new Mold with this data.
     */
    create: XOR<MoldCreateInput, MoldUncheckedCreateInput>
    /**
     * In case the Mold was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoldUpdateInput, MoldUncheckedUpdateInput>
  }


  /**
   * Mold delete
   */
  export type MoldDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
    /**
     * Filter which Mold to delete.
     */
    where: MoldWhereUniqueInput
  }


  /**
   * Mold deleteMany
   */
  export type MoldDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Molds to delete
     */
    where?: MoldWhereInput
  }


  /**
   * Mold.Mold_Piece
   */
  export type Mold$Mold_PieceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    where?: Mold_PieceWhereInput
    orderBy?: Mold_PieceOrderByWithRelationInput | Mold_PieceOrderByWithRelationInput[]
    cursor?: Mold_PieceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mold_PieceScalarFieldEnum | Mold_PieceScalarFieldEnum[]
  }


  /**
   * Mold.Production_Order
   */
  export type Mold$Production_OrderArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    where?: Production_OrderWhereInput
    orderBy?: Production_OrderOrderByWithRelationInput | Production_OrderOrderByWithRelationInput[]
    cursor?: Production_OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Production_OrderScalarFieldEnum | Production_OrderScalarFieldEnum[]
  }


  /**
   * Mold without action
   */
  export type MoldDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold
     */
    select?: MoldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoldInclude<ExtArgs> | null
  }



  /**
   * Model Piece
   */

  export type AggregatePiece = {
    _count: PieceCountAggregateOutputType | null
    _avg: PieceAvgAggregateOutputType | null
    _sum: PieceSumAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  export type PieceAvgAggregateOutputType = {
    piece_id: number | null
    size: number | null
    gross_weight: number | null
    net_weight: number | null
    splinter_lost_percentage: number | null
    splinter: number | null
  }

  export type PieceSumAggregateOutputType = {
    piece_id: number | null
    size: number | null
    gross_weight: number | null
    net_weight: number | null
    splinter_lost_percentage: number | null
    splinter: number | null
  }

  export type PieceMinAggregateOutputType = {
    piece_id: number | null
    name: string | null
    size: number | null
    gross_weight: number | null
    net_weight: number | null
    handle_type: string | null
    splinter_lost_percentage: number | null
    splinter: number | null
  }

  export type PieceMaxAggregateOutputType = {
    piece_id: number | null
    name: string | null
    size: number | null
    gross_weight: number | null
    net_weight: number | null
    handle_type: string | null
    splinter_lost_percentage: number | null
    splinter: number | null
  }

  export type PieceCountAggregateOutputType = {
    piece_id: number
    name: number
    size: number
    gross_weight: number
    net_weight: number
    handle_type: number
    splinter_lost_percentage: number
    splinter: number
    _all: number
  }


  export type PieceAvgAggregateInputType = {
    piece_id?: true
    size?: true
    gross_weight?: true
    net_weight?: true
    splinter_lost_percentage?: true
    splinter?: true
  }

  export type PieceSumAggregateInputType = {
    piece_id?: true
    size?: true
    gross_weight?: true
    net_weight?: true
    splinter_lost_percentage?: true
    splinter?: true
  }

  export type PieceMinAggregateInputType = {
    piece_id?: true
    name?: true
    size?: true
    gross_weight?: true
    net_weight?: true
    handle_type?: true
    splinter_lost_percentage?: true
    splinter?: true
  }

  export type PieceMaxAggregateInputType = {
    piece_id?: true
    name?: true
    size?: true
    gross_weight?: true
    net_weight?: true
    handle_type?: true
    splinter_lost_percentage?: true
    splinter?: true
  }

  export type PieceCountAggregateInputType = {
    piece_id?: true
    name?: true
    size?: true
    gross_weight?: true
    net_weight?: true
    handle_type?: true
    splinter_lost_percentage?: true
    splinter?: true
    _all?: true
  }

  export type PieceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piece to aggregate.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pieces
    **/
    _count?: true | PieceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PieceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PieceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PieceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PieceMaxAggregateInputType
  }

  export type GetPieceAggregateType<T extends PieceAggregateArgs> = {
        [P in keyof T & keyof AggregatePiece]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiece[P]>
      : GetScalarType<T[P], AggregatePiece[P]>
  }




  export type PieceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PieceWhereInput
    orderBy?: PieceOrderByWithAggregationInput | PieceOrderByWithAggregationInput[]
    by: PieceScalarFieldEnum[] | PieceScalarFieldEnum
    having?: PieceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PieceCountAggregateInputType | true
    _avg?: PieceAvgAggregateInputType
    _sum?: PieceSumAggregateInputType
    _min?: PieceMinAggregateInputType
    _max?: PieceMaxAggregateInputType
  }

  export type PieceGroupByOutputType = {
    piece_id: number
    name: string
    size: number
    gross_weight: number
    net_weight: number
    handle_type: string
    splinter_lost_percentage: number
    splinter: number
    _count: PieceCountAggregateOutputType | null
    _avg: PieceAvgAggregateOutputType | null
    _sum: PieceSumAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  type GetPieceGroupByPayload<T extends PieceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PieceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PieceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PieceGroupByOutputType[P]>
            : GetScalarType<T[P], PieceGroupByOutputType[P]>
        }
      >
    >


  export type PieceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    piece_id?: boolean
    name?: boolean
    size?: boolean
    gross_weight?: boolean
    net_weight?: boolean
    handle_type?: boolean
    splinter_lost_percentage?: boolean
    splinter?: boolean
    Mold_Piece?: boolean | Piece$Mold_PieceArgs<ExtArgs>
    _count?: boolean | PieceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piece"]>

  export type PieceSelectScalar = {
    piece_id?: boolean
    name?: boolean
    size?: boolean
    gross_weight?: boolean
    net_weight?: boolean
    handle_type?: boolean
    splinter_lost_percentage?: boolean
    splinter?: boolean
  }

  export type PieceInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Mold_Piece?: boolean | Piece$Mold_PieceArgs<ExtArgs>
    _count?: boolean | PieceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PiecePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Piece"
    objects: {
      Mold_Piece: Prisma.$Mold_PiecePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      piece_id: number
      name: string
      size: number
      gross_weight: number
      net_weight: number
      handle_type: string
      splinter_lost_percentage: number
      splinter: number
    }, ExtArgs["result"]["piece"]>
    composites: {}
  }


  type PieceGetPayload<S extends boolean | null | undefined | PieceDefaultArgs> = $Result.GetResult<Prisma.$PiecePayload, S>

  type PieceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PieceFindManyArgs, 'select' | 'include'> & {
      select?: PieceCountAggregateInputType | true
    }

  export interface PieceDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Piece'], meta: { name: 'Piece' } }
    /**
     * Find zero or one Piece that matches the filter.
     * @param {PieceFindUniqueArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PieceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PieceFindUniqueArgs<ExtArgs>>
    ): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Piece that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PieceFindUniqueOrThrowArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PieceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PieceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Piece that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindFirstArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PieceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PieceFindFirstArgs<ExtArgs>>
    ): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Piece that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindFirstOrThrowArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PieceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PieceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pieces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pieces
     * const pieces = await prisma.piece.findMany()
     * 
     * // Get first 10 Pieces
     * const pieces = await prisma.piece.findMany({ take: 10 })
     * 
     * // Only select the `piece_id`
     * const pieceWithPiece_idOnly = await prisma.piece.findMany({ select: { piece_id: true } })
     * 
    **/
    findMany<T extends PieceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PieceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Piece.
     * @param {PieceCreateArgs} args - Arguments to create a Piece.
     * @example
     * // Create one Piece
     * const Piece = await prisma.piece.create({
     *   data: {
     *     // ... data to create a Piece
     *   }
     * })
     * 
    **/
    create<T extends PieceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PieceCreateArgs<ExtArgs>>
    ): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pieces.
     *     @param {PieceCreateManyArgs} args - Arguments to create many Pieces.
     *     @example
     *     // Create many Pieces
     *     const piece = await prisma.piece.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PieceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PieceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Piece.
     * @param {PieceDeleteArgs} args - Arguments to delete one Piece.
     * @example
     * // Delete one Piece
     * const Piece = await prisma.piece.delete({
     *   where: {
     *     // ... filter to delete one Piece
     *   }
     * })
     * 
    **/
    delete<T extends PieceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PieceDeleteArgs<ExtArgs>>
    ): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Piece.
     * @param {PieceUpdateArgs} args - Arguments to update one Piece.
     * @example
     * // Update one Piece
     * const piece = await prisma.piece.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PieceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PieceUpdateArgs<ExtArgs>>
    ): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pieces.
     * @param {PieceDeleteManyArgs} args - Arguments to filter Pieces to delete.
     * @example
     * // Delete a few Pieces
     * const { count } = await prisma.piece.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PieceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PieceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pieces
     * const piece = await prisma.piece.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PieceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PieceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Piece.
     * @param {PieceUpsertArgs} args - Arguments to update or create a Piece.
     * @example
     * // Update or create a Piece
     * const piece = await prisma.piece.upsert({
     *   create: {
     *     // ... data to create a Piece
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piece we want to update
     *   }
     * })
    **/
    upsert<T extends PieceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PieceUpsertArgs<ExtArgs>>
    ): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceCountArgs} args - Arguments to filter Pieces to count.
     * @example
     * // Count the number of Pieces
     * const count = await prisma.piece.count({
     *   where: {
     *     // ... the filter for the Pieces we want to count
     *   }
     * })
    **/
    count<T extends PieceCountArgs>(
      args?: Subset<T, PieceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PieceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PieceAggregateArgs>(args: Subset<T, PieceAggregateArgs>): Prisma.PrismaPromise<GetPieceAggregateType<T>>

    /**
     * Group by Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PieceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PieceGroupByArgs['orderBy'] }
        : { orderBy?: PieceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PieceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPieceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Piece model
   */
  readonly fields: PieceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Piece.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PieceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Mold_Piece<T extends Piece$Mold_PieceArgs<ExtArgs> = {}>(args?: Subset<T, Piece$Mold_PieceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Piece model
   */ 
  interface PieceFieldRefs {
    readonly piece_id: FieldRef<"Piece", 'Int'>
    readonly name: FieldRef<"Piece", 'String'>
    readonly size: FieldRef<"Piece", 'Int'>
    readonly gross_weight: FieldRef<"Piece", 'Float'>
    readonly net_weight: FieldRef<"Piece", 'Float'>
    readonly handle_type: FieldRef<"Piece", 'String'>
    readonly splinter_lost_percentage: FieldRef<"Piece", 'Float'>
    readonly splinter: FieldRef<"Piece", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Piece findUnique
   */
  export type PieceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where: PieceWhereUniqueInput
  }


  /**
   * Piece findUniqueOrThrow
   */
  export type PieceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where: PieceWhereUniqueInput
  }


  /**
   * Piece findFirst
   */
  export type PieceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pieces.
     */
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }


  /**
   * Piece findFirstOrThrow
   */
  export type PieceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pieces.
     */
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }


  /**
   * Piece findMany
   */
  export type PieceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Pieces to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }


  /**
   * Piece create
   */
  export type PieceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The data needed to create a Piece.
     */
    data: XOR<PieceCreateInput, PieceUncheckedCreateInput>
  }


  /**
   * Piece createMany
   */
  export type PieceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pieces.
     */
    data: PieceCreateManyInput | PieceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Piece update
   */
  export type PieceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The data needed to update a Piece.
     */
    data: XOR<PieceUpdateInput, PieceUncheckedUpdateInput>
    /**
     * Choose, which Piece to update.
     */
    where: PieceWhereUniqueInput
  }


  /**
   * Piece updateMany
   */
  export type PieceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pieces.
     */
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyInput>
    /**
     * Filter which Pieces to update
     */
    where?: PieceWhereInput
  }


  /**
   * Piece upsert
   */
  export type PieceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The filter to search for the Piece to update in case it exists.
     */
    where: PieceWhereUniqueInput
    /**
     * In case the Piece found by the `where` argument doesn't exist, create a new Piece with this data.
     */
    create: XOR<PieceCreateInput, PieceUncheckedCreateInput>
    /**
     * In case the Piece was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PieceUpdateInput, PieceUncheckedUpdateInput>
  }


  /**
   * Piece delete
   */
  export type PieceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter which Piece to delete.
     */
    where: PieceWhereUniqueInput
  }


  /**
   * Piece deleteMany
   */
  export type PieceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pieces to delete
     */
    where?: PieceWhereInput
  }


  /**
   * Piece.Mold_Piece
   */
  export type Piece$Mold_PieceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    where?: Mold_PieceWhereInput
    orderBy?: Mold_PieceOrderByWithRelationInput | Mold_PieceOrderByWithRelationInput[]
    cursor?: Mold_PieceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mold_PieceScalarFieldEnum | Mold_PieceScalarFieldEnum[]
  }


  /**
   * Piece without action
   */
  export type PieceDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PieceInclude<ExtArgs> | null
  }



  /**
   * Model Mold_Piece
   */

  export type AggregateMold_Piece = {
    _count: Mold_PieceCountAggregateOutputType | null
    _avg: Mold_PieceAvgAggregateOutputType | null
    _sum: Mold_PieceSumAggregateOutputType | null
    _min: Mold_PieceMinAggregateOutputType | null
    _max: Mold_PieceMaxAggregateOutputType | null
  }

  export type Mold_PieceAvgAggregateOutputType = {
    mold_piece_id: number | null
    mold_fk: number | null
    piece_fk: number | null
    cavity: number | null
  }

  export type Mold_PieceSumAggregateOutputType = {
    mold_piece_id: number | null
    mold_fk: number | null
    piece_fk: number | null
    cavity: number | null
  }

  export type Mold_PieceMinAggregateOutputType = {
    mold_piece_id: number | null
    mold_fk: number | null
    piece_fk: number | null
    cavity: number | null
  }

  export type Mold_PieceMaxAggregateOutputType = {
    mold_piece_id: number | null
    mold_fk: number | null
    piece_fk: number | null
    cavity: number | null
  }

  export type Mold_PieceCountAggregateOutputType = {
    mold_piece_id: number
    mold_fk: number
    piece_fk: number
    cavity: number
    _all: number
  }


  export type Mold_PieceAvgAggregateInputType = {
    mold_piece_id?: true
    mold_fk?: true
    piece_fk?: true
    cavity?: true
  }

  export type Mold_PieceSumAggregateInputType = {
    mold_piece_id?: true
    mold_fk?: true
    piece_fk?: true
    cavity?: true
  }

  export type Mold_PieceMinAggregateInputType = {
    mold_piece_id?: true
    mold_fk?: true
    piece_fk?: true
    cavity?: true
  }

  export type Mold_PieceMaxAggregateInputType = {
    mold_piece_id?: true
    mold_fk?: true
    piece_fk?: true
    cavity?: true
  }

  export type Mold_PieceCountAggregateInputType = {
    mold_piece_id?: true
    mold_fk?: true
    piece_fk?: true
    cavity?: true
    _all?: true
  }

  export type Mold_PieceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mold_Piece to aggregate.
     */
    where?: Mold_PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mold_Pieces to fetch.
     */
    orderBy?: Mold_PieceOrderByWithRelationInput | Mold_PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Mold_PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mold_Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mold_Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mold_Pieces
    **/
    _count?: true | Mold_PieceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mold_PieceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mold_PieceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mold_PieceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mold_PieceMaxAggregateInputType
  }

  export type GetMold_PieceAggregateType<T extends Mold_PieceAggregateArgs> = {
        [P in keyof T & keyof AggregateMold_Piece]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMold_Piece[P]>
      : GetScalarType<T[P], AggregateMold_Piece[P]>
  }




  export type Mold_PieceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Mold_PieceWhereInput
    orderBy?: Mold_PieceOrderByWithAggregationInput | Mold_PieceOrderByWithAggregationInput[]
    by: Mold_PieceScalarFieldEnum[] | Mold_PieceScalarFieldEnum
    having?: Mold_PieceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mold_PieceCountAggregateInputType | true
    _avg?: Mold_PieceAvgAggregateInputType
    _sum?: Mold_PieceSumAggregateInputType
    _min?: Mold_PieceMinAggregateInputType
    _max?: Mold_PieceMaxAggregateInputType
  }

  export type Mold_PieceGroupByOutputType = {
    mold_piece_id: number
    mold_fk: number
    piece_fk: number
    cavity: number
    _count: Mold_PieceCountAggregateOutputType | null
    _avg: Mold_PieceAvgAggregateOutputType | null
    _sum: Mold_PieceSumAggregateOutputType | null
    _min: Mold_PieceMinAggregateOutputType | null
    _max: Mold_PieceMaxAggregateOutputType | null
  }

  type GetMold_PieceGroupByPayload<T extends Mold_PieceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mold_PieceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mold_PieceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mold_PieceGroupByOutputType[P]>
            : GetScalarType<T[P], Mold_PieceGroupByOutputType[P]>
        }
      >
    >


  export type Mold_PieceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mold_piece_id?: boolean
    mold_fk?: boolean
    piece_fk?: boolean
    cavity?: boolean
    mold?: boolean | MoldDefaultArgs<ExtArgs>
    piece?: boolean | PieceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mold_Piece"]>

  export type Mold_PieceSelectScalar = {
    mold_piece_id?: boolean
    mold_fk?: boolean
    piece_fk?: boolean
    cavity?: boolean
  }

  export type Mold_PieceInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    mold?: boolean | MoldDefaultArgs<ExtArgs>
    piece?: boolean | PieceDefaultArgs<ExtArgs>
  }


  export type $Mold_PiecePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Mold_Piece"
    objects: {
      mold: Prisma.$MoldPayload<ExtArgs>
      piece: Prisma.$PiecePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      mold_piece_id: number
      mold_fk: number
      piece_fk: number
      cavity: number
    }, ExtArgs["result"]["mold_Piece"]>
    composites: {}
  }


  type Mold_PieceGetPayload<S extends boolean | null | undefined | Mold_PieceDefaultArgs> = $Result.GetResult<Prisma.$Mold_PiecePayload, S>

  type Mold_PieceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Mold_PieceFindManyArgs, 'select' | 'include'> & {
      select?: Mold_PieceCountAggregateInputType | true
    }

  export interface Mold_PieceDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mold_Piece'], meta: { name: 'Mold_Piece' } }
    /**
     * Find zero or one Mold_Piece that matches the filter.
     * @param {Mold_PieceFindUniqueArgs} args - Arguments to find a Mold_Piece
     * @example
     * // Get one Mold_Piece
     * const mold_Piece = await prisma.mold_Piece.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mold_PieceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Mold_PieceFindUniqueArgs<ExtArgs>>
    ): Prisma__Mold_PieceClient<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mold_Piece that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Mold_PieceFindUniqueOrThrowArgs} args - Arguments to find a Mold_Piece
     * @example
     * // Get one Mold_Piece
     * const mold_Piece = await prisma.mold_Piece.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Mold_PieceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Mold_PieceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Mold_PieceClient<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mold_Piece that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mold_PieceFindFirstArgs} args - Arguments to find a Mold_Piece
     * @example
     * // Get one Mold_Piece
     * const mold_Piece = await prisma.mold_Piece.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mold_PieceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Mold_PieceFindFirstArgs<ExtArgs>>
    ): Prisma__Mold_PieceClient<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mold_Piece that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mold_PieceFindFirstOrThrowArgs} args - Arguments to find a Mold_Piece
     * @example
     * // Get one Mold_Piece
     * const mold_Piece = await prisma.mold_Piece.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Mold_PieceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Mold_PieceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Mold_PieceClient<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Mold_Pieces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mold_PieceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mold_Pieces
     * const mold_Pieces = await prisma.mold_Piece.findMany()
     * 
     * // Get first 10 Mold_Pieces
     * const mold_Pieces = await prisma.mold_Piece.findMany({ take: 10 })
     * 
     * // Only select the `mold_piece_id`
     * const mold_PieceWithMold_piece_idOnly = await prisma.mold_Piece.findMany({ select: { mold_piece_id: true } })
     * 
    **/
    findMany<T extends Mold_PieceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Mold_PieceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mold_Piece.
     * @param {Mold_PieceCreateArgs} args - Arguments to create a Mold_Piece.
     * @example
     * // Create one Mold_Piece
     * const Mold_Piece = await prisma.mold_Piece.create({
     *   data: {
     *     // ... data to create a Mold_Piece
     *   }
     * })
     * 
    **/
    create<T extends Mold_PieceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Mold_PieceCreateArgs<ExtArgs>>
    ): Prisma__Mold_PieceClient<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Mold_Pieces.
     *     @param {Mold_PieceCreateManyArgs} args - Arguments to create many Mold_Pieces.
     *     @example
     *     // Create many Mold_Pieces
     *     const mold_Piece = await prisma.mold_Piece.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mold_PieceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Mold_PieceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mold_Piece.
     * @param {Mold_PieceDeleteArgs} args - Arguments to delete one Mold_Piece.
     * @example
     * // Delete one Mold_Piece
     * const Mold_Piece = await prisma.mold_Piece.delete({
     *   where: {
     *     // ... filter to delete one Mold_Piece
     *   }
     * })
     * 
    **/
    delete<T extends Mold_PieceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Mold_PieceDeleteArgs<ExtArgs>>
    ): Prisma__Mold_PieceClient<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mold_Piece.
     * @param {Mold_PieceUpdateArgs} args - Arguments to update one Mold_Piece.
     * @example
     * // Update one Mold_Piece
     * const mold_Piece = await prisma.mold_Piece.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mold_PieceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Mold_PieceUpdateArgs<ExtArgs>>
    ): Prisma__Mold_PieceClient<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Mold_Pieces.
     * @param {Mold_PieceDeleteManyArgs} args - Arguments to filter Mold_Pieces to delete.
     * @example
     * // Delete a few Mold_Pieces
     * const { count } = await prisma.mold_Piece.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mold_PieceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Mold_PieceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mold_Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mold_PieceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mold_Pieces
     * const mold_Piece = await prisma.mold_Piece.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mold_PieceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Mold_PieceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mold_Piece.
     * @param {Mold_PieceUpsertArgs} args - Arguments to update or create a Mold_Piece.
     * @example
     * // Update or create a Mold_Piece
     * const mold_Piece = await prisma.mold_Piece.upsert({
     *   create: {
     *     // ... data to create a Mold_Piece
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mold_Piece we want to update
     *   }
     * })
    **/
    upsert<T extends Mold_PieceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Mold_PieceUpsertArgs<ExtArgs>>
    ): Prisma__Mold_PieceClient<$Result.GetResult<Prisma.$Mold_PiecePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Mold_Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mold_PieceCountArgs} args - Arguments to filter Mold_Pieces to count.
     * @example
     * // Count the number of Mold_Pieces
     * const count = await prisma.mold_Piece.count({
     *   where: {
     *     // ... the filter for the Mold_Pieces we want to count
     *   }
     * })
    **/
    count<T extends Mold_PieceCountArgs>(
      args?: Subset<T, Mold_PieceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mold_PieceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mold_Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mold_PieceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mold_PieceAggregateArgs>(args: Subset<T, Mold_PieceAggregateArgs>): Prisma.PrismaPromise<GetMold_PieceAggregateType<T>>

    /**
     * Group by Mold_Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mold_PieceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mold_PieceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mold_PieceGroupByArgs['orderBy'] }
        : { orderBy?: Mold_PieceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mold_PieceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMold_PieceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mold_Piece model
   */
  readonly fields: Mold_PieceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mold_Piece.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Mold_PieceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mold<T extends MoldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoldDefaultArgs<ExtArgs>>): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    piece<T extends PieceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PieceDefaultArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Mold_Piece model
   */ 
  interface Mold_PieceFieldRefs {
    readonly mold_piece_id: FieldRef<"Mold_Piece", 'Int'>
    readonly mold_fk: FieldRef<"Mold_Piece", 'Int'>
    readonly piece_fk: FieldRef<"Mold_Piece", 'Int'>
    readonly cavity: FieldRef<"Mold_Piece", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Mold_Piece findUnique
   */
  export type Mold_PieceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * Filter, which Mold_Piece to fetch.
     */
    where: Mold_PieceWhereUniqueInput
  }


  /**
   * Mold_Piece findUniqueOrThrow
   */
  export type Mold_PieceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * Filter, which Mold_Piece to fetch.
     */
    where: Mold_PieceWhereUniqueInput
  }


  /**
   * Mold_Piece findFirst
   */
  export type Mold_PieceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * Filter, which Mold_Piece to fetch.
     */
    where?: Mold_PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mold_Pieces to fetch.
     */
    orderBy?: Mold_PieceOrderByWithRelationInput | Mold_PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mold_Pieces.
     */
    cursor?: Mold_PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mold_Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mold_Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mold_Pieces.
     */
    distinct?: Mold_PieceScalarFieldEnum | Mold_PieceScalarFieldEnum[]
  }


  /**
   * Mold_Piece findFirstOrThrow
   */
  export type Mold_PieceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * Filter, which Mold_Piece to fetch.
     */
    where?: Mold_PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mold_Pieces to fetch.
     */
    orderBy?: Mold_PieceOrderByWithRelationInput | Mold_PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mold_Pieces.
     */
    cursor?: Mold_PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mold_Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mold_Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mold_Pieces.
     */
    distinct?: Mold_PieceScalarFieldEnum | Mold_PieceScalarFieldEnum[]
  }


  /**
   * Mold_Piece findMany
   */
  export type Mold_PieceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * Filter, which Mold_Pieces to fetch.
     */
    where?: Mold_PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mold_Pieces to fetch.
     */
    orderBy?: Mold_PieceOrderByWithRelationInput | Mold_PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mold_Pieces.
     */
    cursor?: Mold_PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mold_Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mold_Pieces.
     */
    skip?: number
    distinct?: Mold_PieceScalarFieldEnum | Mold_PieceScalarFieldEnum[]
  }


  /**
   * Mold_Piece create
   */
  export type Mold_PieceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * The data needed to create a Mold_Piece.
     */
    data: XOR<Mold_PieceCreateInput, Mold_PieceUncheckedCreateInput>
  }


  /**
   * Mold_Piece createMany
   */
  export type Mold_PieceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mold_Pieces.
     */
    data: Mold_PieceCreateManyInput | Mold_PieceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Mold_Piece update
   */
  export type Mold_PieceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * The data needed to update a Mold_Piece.
     */
    data: XOR<Mold_PieceUpdateInput, Mold_PieceUncheckedUpdateInput>
    /**
     * Choose, which Mold_Piece to update.
     */
    where: Mold_PieceWhereUniqueInput
  }


  /**
   * Mold_Piece updateMany
   */
  export type Mold_PieceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mold_Pieces.
     */
    data: XOR<Mold_PieceUpdateManyMutationInput, Mold_PieceUncheckedUpdateManyInput>
    /**
     * Filter which Mold_Pieces to update
     */
    where?: Mold_PieceWhereInput
  }


  /**
   * Mold_Piece upsert
   */
  export type Mold_PieceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * The filter to search for the Mold_Piece to update in case it exists.
     */
    where: Mold_PieceWhereUniqueInput
    /**
     * In case the Mold_Piece found by the `where` argument doesn't exist, create a new Mold_Piece with this data.
     */
    create: XOR<Mold_PieceCreateInput, Mold_PieceUncheckedCreateInput>
    /**
     * In case the Mold_Piece was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Mold_PieceUpdateInput, Mold_PieceUncheckedUpdateInput>
  }


  /**
   * Mold_Piece delete
   */
  export type Mold_PieceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
    /**
     * Filter which Mold_Piece to delete.
     */
    where: Mold_PieceWhereUniqueInput
  }


  /**
   * Mold_Piece deleteMany
   */
  export type Mold_PieceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mold_Pieces to delete
     */
    where?: Mold_PieceWhereInput
  }


  /**
   * Mold_Piece without action
   */
  export type Mold_PieceDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mold_Piece
     */
    select?: Mold_PieceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Mold_PieceInclude<ExtArgs> | null
  }



  /**
   * Model Production_Order
   */

  export type AggregateProduction_Order = {
    _count: Production_OrderCountAggregateOutputType | null
    _avg: Production_OrderAvgAggregateOutputType | null
    _sum: Production_OrderSumAggregateOutputType | null
    _min: Production_OrderMinAggregateOutputType | null
    _max: Production_OrderMaxAggregateOutputType | null
  }

  export type Production_OrderAvgAggregateOutputType = {
    production_order_id: number | null
    initial_counter: number | null
    final_counter: number | null
    employee_fk: number | null
    mold_quantity: number | null
    mold_fk: number | null
  }

  export type Production_OrderSumAggregateOutputType = {
    production_order_id: number | null
    initial_counter: number | null
    final_counter: number | null
    employee_fk: number | null
    mold_quantity: number | null
    mold_fk: number | null
  }

  export type Production_OrderMinAggregateOutputType = {
    production_order_id: number | null
    created_at: Date | null
    finished_at: Date | null
    initial_counter: number | null
    final_counter: number | null
    employee_fk: number | null
    mold_quantity: number | null
    mold_fk: number | null
    description: string | null
  }

  export type Production_OrderMaxAggregateOutputType = {
    production_order_id: number | null
    created_at: Date | null
    finished_at: Date | null
    initial_counter: number | null
    final_counter: number | null
    employee_fk: number | null
    mold_quantity: number | null
    mold_fk: number | null
    description: string | null
  }

  export type Production_OrderCountAggregateOutputType = {
    production_order_id: number
    created_at: number
    finished_at: number
    initial_counter: number
    final_counter: number
    employee_fk: number
    mold_quantity: number
    mold_fk: number
    description: number
    _all: number
  }


  export type Production_OrderAvgAggregateInputType = {
    production_order_id?: true
    initial_counter?: true
    final_counter?: true
    employee_fk?: true
    mold_quantity?: true
    mold_fk?: true
  }

  export type Production_OrderSumAggregateInputType = {
    production_order_id?: true
    initial_counter?: true
    final_counter?: true
    employee_fk?: true
    mold_quantity?: true
    mold_fk?: true
  }

  export type Production_OrderMinAggregateInputType = {
    production_order_id?: true
    created_at?: true
    finished_at?: true
    initial_counter?: true
    final_counter?: true
    employee_fk?: true
    mold_quantity?: true
    mold_fk?: true
    description?: true
  }

  export type Production_OrderMaxAggregateInputType = {
    production_order_id?: true
    created_at?: true
    finished_at?: true
    initial_counter?: true
    final_counter?: true
    employee_fk?: true
    mold_quantity?: true
    mold_fk?: true
    description?: true
  }

  export type Production_OrderCountAggregateInputType = {
    production_order_id?: true
    created_at?: true
    finished_at?: true
    initial_counter?: true
    final_counter?: true
    employee_fk?: true
    mold_quantity?: true
    mold_fk?: true
    description?: true
    _all?: true
  }

  export type Production_OrderAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Production_Order to aggregate.
     */
    where?: Production_OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Production_Orders to fetch.
     */
    orderBy?: Production_OrderOrderByWithRelationInput | Production_OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Production_OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Production_Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Production_Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Production_Orders
    **/
    _count?: true | Production_OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Production_OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Production_OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Production_OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Production_OrderMaxAggregateInputType
  }

  export type GetProduction_OrderAggregateType<T extends Production_OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProduction_Order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduction_Order[P]>
      : GetScalarType<T[P], AggregateProduction_Order[P]>
  }




  export type Production_OrderGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Production_OrderWhereInput
    orderBy?: Production_OrderOrderByWithAggregationInput | Production_OrderOrderByWithAggregationInput[]
    by: Production_OrderScalarFieldEnum[] | Production_OrderScalarFieldEnum
    having?: Production_OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Production_OrderCountAggregateInputType | true
    _avg?: Production_OrderAvgAggregateInputType
    _sum?: Production_OrderSumAggregateInputType
    _min?: Production_OrderMinAggregateInputType
    _max?: Production_OrderMaxAggregateInputType
  }

  export type Production_OrderGroupByOutputType = {
    production_order_id: number
    created_at: Date
    finished_at: Date | null
    initial_counter: number
    final_counter: number | null
    employee_fk: number
    mold_quantity: number
    mold_fk: number
    description: string | null
    _count: Production_OrderCountAggregateOutputType | null
    _avg: Production_OrderAvgAggregateOutputType | null
    _sum: Production_OrderSumAggregateOutputType | null
    _min: Production_OrderMinAggregateOutputType | null
    _max: Production_OrderMaxAggregateOutputType | null
  }

  type GetProduction_OrderGroupByPayload<T extends Production_OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Production_OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Production_OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Production_OrderGroupByOutputType[P]>
            : GetScalarType<T[P], Production_OrderGroupByOutputType[P]>
        }
      >
    >


  export type Production_OrderSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    production_order_id?: boolean
    created_at?: boolean
    finished_at?: boolean
    initial_counter?: boolean
    final_counter?: boolean
    employee_fk?: boolean
    mold_quantity?: boolean
    mold_fk?: boolean
    description?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    mold?: boolean | MoldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production_Order"]>

  export type Production_OrderSelectScalar = {
    production_order_id?: boolean
    created_at?: boolean
    finished_at?: boolean
    initial_counter?: boolean
    final_counter?: boolean
    employee_fk?: boolean
    mold_quantity?: boolean
    mold_fk?: boolean
    description?: boolean
  }

  export type Production_OrderInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    mold?: boolean | MoldDefaultArgs<ExtArgs>
  }


  export type $Production_OrderPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Production_Order"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      mold: Prisma.$MoldPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      production_order_id: number
      created_at: Date
      finished_at: Date | null
      initial_counter: number
      final_counter: number | null
      employee_fk: number
      mold_quantity: number
      mold_fk: number
      description: string | null
    }, ExtArgs["result"]["production_Order"]>
    composites: {}
  }


  type Production_OrderGetPayload<S extends boolean | null | undefined | Production_OrderDefaultArgs> = $Result.GetResult<Prisma.$Production_OrderPayload, S>

  type Production_OrderCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Production_OrderFindManyArgs, 'select' | 'include'> & {
      select?: Production_OrderCountAggregateInputType | true
    }

  export interface Production_OrderDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Production_Order'], meta: { name: 'Production_Order' } }
    /**
     * Find zero or one Production_Order that matches the filter.
     * @param {Production_OrderFindUniqueArgs} args - Arguments to find a Production_Order
     * @example
     * // Get one Production_Order
     * const production_Order = await prisma.production_Order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Production_OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Production_OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__Production_OrderClient<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Production_Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Production_OrderFindUniqueOrThrowArgs} args - Arguments to find a Production_Order
     * @example
     * // Get one Production_Order
     * const production_Order = await prisma.production_Order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Production_OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Production_OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Production_OrderClient<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Production_Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_OrderFindFirstArgs} args - Arguments to find a Production_Order
     * @example
     * // Get one Production_Order
     * const production_Order = await prisma.production_Order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Production_OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Production_OrderFindFirstArgs<ExtArgs>>
    ): Prisma__Production_OrderClient<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Production_Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_OrderFindFirstOrThrowArgs} args - Arguments to find a Production_Order
     * @example
     * // Get one Production_Order
     * const production_Order = await prisma.production_Order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Production_OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Production_OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Production_OrderClient<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Production_Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Production_Orders
     * const production_Orders = await prisma.production_Order.findMany()
     * 
     * // Get first 10 Production_Orders
     * const production_Orders = await prisma.production_Order.findMany({ take: 10 })
     * 
     * // Only select the `production_order_id`
     * const production_OrderWithProduction_order_idOnly = await prisma.production_Order.findMany({ select: { production_order_id: true } })
     * 
    **/
    findMany<T extends Production_OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Production_OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Production_Order.
     * @param {Production_OrderCreateArgs} args - Arguments to create a Production_Order.
     * @example
     * // Create one Production_Order
     * const Production_Order = await prisma.production_Order.create({
     *   data: {
     *     // ... data to create a Production_Order
     *   }
     * })
     * 
    **/
    create<T extends Production_OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Production_OrderCreateArgs<ExtArgs>>
    ): Prisma__Production_OrderClient<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Production_Orders.
     *     @param {Production_OrderCreateManyArgs} args - Arguments to create many Production_Orders.
     *     @example
     *     // Create many Production_Orders
     *     const production_Order = await prisma.production_Order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Production_OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Production_OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Production_Order.
     * @param {Production_OrderDeleteArgs} args - Arguments to delete one Production_Order.
     * @example
     * // Delete one Production_Order
     * const Production_Order = await prisma.production_Order.delete({
     *   where: {
     *     // ... filter to delete one Production_Order
     *   }
     * })
     * 
    **/
    delete<T extends Production_OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Production_OrderDeleteArgs<ExtArgs>>
    ): Prisma__Production_OrderClient<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Production_Order.
     * @param {Production_OrderUpdateArgs} args - Arguments to update one Production_Order.
     * @example
     * // Update one Production_Order
     * const production_Order = await prisma.production_Order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Production_OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Production_OrderUpdateArgs<ExtArgs>>
    ): Prisma__Production_OrderClient<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Production_Orders.
     * @param {Production_OrderDeleteManyArgs} args - Arguments to filter Production_Orders to delete.
     * @example
     * // Delete a few Production_Orders
     * const { count } = await prisma.production_Order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Production_OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Production_OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Production_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Production_Orders
     * const production_Order = await prisma.production_Order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Production_OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Production_OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Production_Order.
     * @param {Production_OrderUpsertArgs} args - Arguments to update or create a Production_Order.
     * @example
     * // Update or create a Production_Order
     * const production_Order = await prisma.production_Order.upsert({
     *   create: {
     *     // ... data to create a Production_Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Production_Order we want to update
     *   }
     * })
    **/
    upsert<T extends Production_OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Production_OrderUpsertArgs<ExtArgs>>
    ): Prisma__Production_OrderClient<$Result.GetResult<Prisma.$Production_OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Production_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_OrderCountArgs} args - Arguments to filter Production_Orders to count.
     * @example
     * // Count the number of Production_Orders
     * const count = await prisma.production_Order.count({
     *   where: {
     *     // ... the filter for the Production_Orders we want to count
     *   }
     * })
    **/
    count<T extends Production_OrderCountArgs>(
      args?: Subset<T, Production_OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Production_OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Production_Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Production_OrderAggregateArgs>(args: Subset<T, Production_OrderAggregateArgs>): Prisma.PrismaPromise<GetProduction_OrderAggregateType<T>>

    /**
     * Group by Production_Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Production_OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Production_OrderGroupByArgs['orderBy'] }
        : { orderBy?: Production_OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Production_OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduction_OrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Production_Order model
   */
  readonly fields: Production_OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Production_Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Production_OrderClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    mold<T extends MoldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoldDefaultArgs<ExtArgs>>): Prisma__MoldClient<$Result.GetResult<Prisma.$MoldPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Production_Order model
   */ 
  interface Production_OrderFieldRefs {
    readonly production_order_id: FieldRef<"Production_Order", 'Int'>
    readonly created_at: FieldRef<"Production_Order", 'DateTime'>
    readonly finished_at: FieldRef<"Production_Order", 'DateTime'>
    readonly initial_counter: FieldRef<"Production_Order", 'Int'>
    readonly final_counter: FieldRef<"Production_Order", 'Int'>
    readonly employee_fk: FieldRef<"Production_Order", 'Int'>
    readonly mold_quantity: FieldRef<"Production_Order", 'Int'>
    readonly mold_fk: FieldRef<"Production_Order", 'Int'>
    readonly description: FieldRef<"Production_Order", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Production_Order findUnique
   */
  export type Production_OrderFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * Filter, which Production_Order to fetch.
     */
    where: Production_OrderWhereUniqueInput
  }


  /**
   * Production_Order findUniqueOrThrow
   */
  export type Production_OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * Filter, which Production_Order to fetch.
     */
    where: Production_OrderWhereUniqueInput
  }


  /**
   * Production_Order findFirst
   */
  export type Production_OrderFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * Filter, which Production_Order to fetch.
     */
    where?: Production_OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Production_Orders to fetch.
     */
    orderBy?: Production_OrderOrderByWithRelationInput | Production_OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Production_Orders.
     */
    cursor?: Production_OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Production_Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Production_Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Production_Orders.
     */
    distinct?: Production_OrderScalarFieldEnum | Production_OrderScalarFieldEnum[]
  }


  /**
   * Production_Order findFirstOrThrow
   */
  export type Production_OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * Filter, which Production_Order to fetch.
     */
    where?: Production_OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Production_Orders to fetch.
     */
    orderBy?: Production_OrderOrderByWithRelationInput | Production_OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Production_Orders.
     */
    cursor?: Production_OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Production_Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Production_Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Production_Orders.
     */
    distinct?: Production_OrderScalarFieldEnum | Production_OrderScalarFieldEnum[]
  }


  /**
   * Production_Order findMany
   */
  export type Production_OrderFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * Filter, which Production_Orders to fetch.
     */
    where?: Production_OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Production_Orders to fetch.
     */
    orderBy?: Production_OrderOrderByWithRelationInput | Production_OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Production_Orders.
     */
    cursor?: Production_OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Production_Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Production_Orders.
     */
    skip?: number
    distinct?: Production_OrderScalarFieldEnum | Production_OrderScalarFieldEnum[]
  }


  /**
   * Production_Order create
   */
  export type Production_OrderCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Production_Order.
     */
    data: XOR<Production_OrderCreateInput, Production_OrderUncheckedCreateInput>
  }


  /**
   * Production_Order createMany
   */
  export type Production_OrderCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Production_Orders.
     */
    data: Production_OrderCreateManyInput | Production_OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Production_Order update
   */
  export type Production_OrderUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Production_Order.
     */
    data: XOR<Production_OrderUpdateInput, Production_OrderUncheckedUpdateInput>
    /**
     * Choose, which Production_Order to update.
     */
    where: Production_OrderWhereUniqueInput
  }


  /**
   * Production_Order updateMany
   */
  export type Production_OrderUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Production_Orders.
     */
    data: XOR<Production_OrderUpdateManyMutationInput, Production_OrderUncheckedUpdateManyInput>
    /**
     * Filter which Production_Orders to update
     */
    where?: Production_OrderWhereInput
  }


  /**
   * Production_Order upsert
   */
  export type Production_OrderUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Production_Order to update in case it exists.
     */
    where: Production_OrderWhereUniqueInput
    /**
     * In case the Production_Order found by the `where` argument doesn't exist, create a new Production_Order with this data.
     */
    create: XOR<Production_OrderCreateInput, Production_OrderUncheckedCreateInput>
    /**
     * In case the Production_Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Production_OrderUpdateInput, Production_OrderUncheckedUpdateInput>
  }


  /**
   * Production_Order delete
   */
  export type Production_OrderDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
    /**
     * Filter which Production_Order to delete.
     */
    where: Production_OrderWhereUniqueInput
  }


  /**
   * Production_Order deleteMany
   */
  export type Production_OrderDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Production_Orders to delete
     */
    where?: Production_OrderWhereInput
  }


  /**
   * Production_Order without action
   */
  export type Production_OrderDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production_Order
     */
    select?: Production_OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_OrderInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeeScalarFieldEnum: {
    employee_id: 'employee_id',
    name: 'name',
    password: 'password',
    sector: 'sector'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const MoldScalarFieldEnum: {
    mold_id: 'mold_id',
    name: 'name',
    total_weight: 'total_weight',
    channel_return_weight: 'channel_return_weight',
    channel_lost_percentage: 'channel_lost_percentage',
    mold_aluminium_loss: 'mold_aluminium_loss'
  };

  export type MoldScalarFieldEnum = (typeof MoldScalarFieldEnum)[keyof typeof MoldScalarFieldEnum]


  export const PieceScalarFieldEnum: {
    piece_id: 'piece_id',
    name: 'name',
    size: 'size',
    gross_weight: 'gross_weight',
    net_weight: 'net_weight',
    handle_type: 'handle_type',
    splinter_lost_percentage: 'splinter_lost_percentage',
    splinter: 'splinter'
  };

  export type PieceScalarFieldEnum = (typeof PieceScalarFieldEnum)[keyof typeof PieceScalarFieldEnum]


  export const Mold_PieceScalarFieldEnum: {
    mold_piece_id: 'mold_piece_id',
    mold_fk: 'mold_fk',
    piece_fk: 'piece_fk',
    cavity: 'cavity'
  };

  export type Mold_PieceScalarFieldEnum = (typeof Mold_PieceScalarFieldEnum)[keyof typeof Mold_PieceScalarFieldEnum]


  export const Production_OrderScalarFieldEnum: {
    production_order_id: 'production_order_id',
    created_at: 'created_at',
    finished_at: 'finished_at',
    initial_counter: 'initial_counter',
    final_counter: 'final_counter',
    employee_fk: 'employee_fk',
    mold_quantity: 'mold_quantity',
    mold_fk: 'mold_fk',
    description: 'description'
  };

  export type Production_OrderScalarFieldEnum = (typeof Production_OrderScalarFieldEnum)[keyof typeof Production_OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employee_id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    sector?: StringFilter<"Employee"> | string
    Production_Order?: Production_OrderListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    employee_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    sector?: SortOrder
    Production_Order?: Production_OrderOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    employee_id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    sector?: StringFilter<"Employee"> | string
    Production_Order?: Production_OrderListRelationFilter
  }, "employee_id">

  export type EmployeeOrderByWithAggregationInput = {
    employee_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    sector?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    employee_id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    password?: StringWithAggregatesFilter<"Employee"> | string
    sector?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type MoldWhereInput = {
    AND?: MoldWhereInput | MoldWhereInput[]
    OR?: MoldWhereInput[]
    NOT?: MoldWhereInput | MoldWhereInput[]
    mold_id?: IntFilter<"Mold"> | number
    name?: StringFilter<"Mold"> | string
    total_weight?: FloatFilter<"Mold"> | number
    channel_return_weight?: FloatFilter<"Mold"> | number
    channel_lost_percentage?: FloatFilter<"Mold"> | number
    mold_aluminium_loss?: FloatFilter<"Mold"> | number
    Mold_Piece?: Mold_PieceListRelationFilter
    Production_Order?: Production_OrderListRelationFilter
  }

  export type MoldOrderByWithRelationInput = {
    mold_id?: SortOrder
    name?: SortOrder
    total_weight?: SortOrder
    channel_return_weight?: SortOrder
    channel_lost_percentage?: SortOrder
    mold_aluminium_loss?: SortOrder
    Mold_Piece?: Mold_PieceOrderByRelationAggregateInput
    Production_Order?: Production_OrderOrderByRelationAggregateInput
  }

  export type MoldWhereUniqueInput = Prisma.AtLeast<{
    mold_id?: number
    AND?: MoldWhereInput | MoldWhereInput[]
    OR?: MoldWhereInput[]
    NOT?: MoldWhereInput | MoldWhereInput[]
    name?: StringFilter<"Mold"> | string
    total_weight?: FloatFilter<"Mold"> | number
    channel_return_weight?: FloatFilter<"Mold"> | number
    channel_lost_percentage?: FloatFilter<"Mold"> | number
    mold_aluminium_loss?: FloatFilter<"Mold"> | number
    Mold_Piece?: Mold_PieceListRelationFilter
    Production_Order?: Production_OrderListRelationFilter
  }, "mold_id">

  export type MoldOrderByWithAggregationInput = {
    mold_id?: SortOrder
    name?: SortOrder
    total_weight?: SortOrder
    channel_return_weight?: SortOrder
    channel_lost_percentage?: SortOrder
    mold_aluminium_loss?: SortOrder
    _count?: MoldCountOrderByAggregateInput
    _avg?: MoldAvgOrderByAggregateInput
    _max?: MoldMaxOrderByAggregateInput
    _min?: MoldMinOrderByAggregateInput
    _sum?: MoldSumOrderByAggregateInput
  }

  export type MoldScalarWhereWithAggregatesInput = {
    AND?: MoldScalarWhereWithAggregatesInput | MoldScalarWhereWithAggregatesInput[]
    OR?: MoldScalarWhereWithAggregatesInput[]
    NOT?: MoldScalarWhereWithAggregatesInput | MoldScalarWhereWithAggregatesInput[]
    mold_id?: IntWithAggregatesFilter<"Mold"> | number
    name?: StringWithAggregatesFilter<"Mold"> | string
    total_weight?: FloatWithAggregatesFilter<"Mold"> | number
    channel_return_weight?: FloatWithAggregatesFilter<"Mold"> | number
    channel_lost_percentage?: FloatWithAggregatesFilter<"Mold"> | number
    mold_aluminium_loss?: FloatWithAggregatesFilter<"Mold"> | number
  }

  export type PieceWhereInput = {
    AND?: PieceWhereInput | PieceWhereInput[]
    OR?: PieceWhereInput[]
    NOT?: PieceWhereInput | PieceWhereInput[]
    piece_id?: IntFilter<"Piece"> | number
    name?: StringFilter<"Piece"> | string
    size?: IntFilter<"Piece"> | number
    gross_weight?: FloatFilter<"Piece"> | number
    net_weight?: FloatFilter<"Piece"> | number
    handle_type?: StringFilter<"Piece"> | string
    splinter_lost_percentage?: FloatFilter<"Piece"> | number
    splinter?: FloatFilter<"Piece"> | number
    Mold_Piece?: Mold_PieceListRelationFilter
  }

  export type PieceOrderByWithRelationInput = {
    piece_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    gross_weight?: SortOrder
    net_weight?: SortOrder
    handle_type?: SortOrder
    splinter_lost_percentage?: SortOrder
    splinter?: SortOrder
    Mold_Piece?: Mold_PieceOrderByRelationAggregateInput
  }

  export type PieceWhereUniqueInput = Prisma.AtLeast<{
    piece_id?: number
    AND?: PieceWhereInput | PieceWhereInput[]
    OR?: PieceWhereInput[]
    NOT?: PieceWhereInput | PieceWhereInput[]
    name?: StringFilter<"Piece"> | string
    size?: IntFilter<"Piece"> | number
    gross_weight?: FloatFilter<"Piece"> | number
    net_weight?: FloatFilter<"Piece"> | number
    handle_type?: StringFilter<"Piece"> | string
    splinter_lost_percentage?: FloatFilter<"Piece"> | number
    splinter?: FloatFilter<"Piece"> | number
    Mold_Piece?: Mold_PieceListRelationFilter
  }, "piece_id">

  export type PieceOrderByWithAggregationInput = {
    piece_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    gross_weight?: SortOrder
    net_weight?: SortOrder
    handle_type?: SortOrder
    splinter_lost_percentage?: SortOrder
    splinter?: SortOrder
    _count?: PieceCountOrderByAggregateInput
    _avg?: PieceAvgOrderByAggregateInput
    _max?: PieceMaxOrderByAggregateInput
    _min?: PieceMinOrderByAggregateInput
    _sum?: PieceSumOrderByAggregateInput
  }

  export type PieceScalarWhereWithAggregatesInput = {
    AND?: PieceScalarWhereWithAggregatesInput | PieceScalarWhereWithAggregatesInput[]
    OR?: PieceScalarWhereWithAggregatesInput[]
    NOT?: PieceScalarWhereWithAggregatesInput | PieceScalarWhereWithAggregatesInput[]
    piece_id?: IntWithAggregatesFilter<"Piece"> | number
    name?: StringWithAggregatesFilter<"Piece"> | string
    size?: IntWithAggregatesFilter<"Piece"> | number
    gross_weight?: FloatWithAggregatesFilter<"Piece"> | number
    net_weight?: FloatWithAggregatesFilter<"Piece"> | number
    handle_type?: StringWithAggregatesFilter<"Piece"> | string
    splinter_lost_percentage?: FloatWithAggregatesFilter<"Piece"> | number
    splinter?: FloatWithAggregatesFilter<"Piece"> | number
  }

  export type Mold_PieceWhereInput = {
    AND?: Mold_PieceWhereInput | Mold_PieceWhereInput[]
    OR?: Mold_PieceWhereInput[]
    NOT?: Mold_PieceWhereInput | Mold_PieceWhereInput[]
    mold_piece_id?: IntFilter<"Mold_Piece"> | number
    mold_fk?: IntFilter<"Mold_Piece"> | number
    piece_fk?: IntFilter<"Mold_Piece"> | number
    cavity?: IntFilter<"Mold_Piece"> | number
    mold?: XOR<MoldRelationFilter, MoldWhereInput>
    piece?: XOR<PieceRelationFilter, PieceWhereInput>
  }

  export type Mold_PieceOrderByWithRelationInput = {
    mold_piece_id?: SortOrder
    mold_fk?: SortOrder
    piece_fk?: SortOrder
    cavity?: SortOrder
    mold?: MoldOrderByWithRelationInput
    piece?: PieceOrderByWithRelationInput
  }

  export type Mold_PieceWhereUniqueInput = Prisma.AtLeast<{
    mold_piece_id?: number
    AND?: Mold_PieceWhereInput | Mold_PieceWhereInput[]
    OR?: Mold_PieceWhereInput[]
    NOT?: Mold_PieceWhereInput | Mold_PieceWhereInput[]
    mold_fk?: IntFilter<"Mold_Piece"> | number
    piece_fk?: IntFilter<"Mold_Piece"> | number
    cavity?: IntFilter<"Mold_Piece"> | number
    mold?: XOR<MoldRelationFilter, MoldWhereInput>
    piece?: XOR<PieceRelationFilter, PieceWhereInput>
  }, "mold_piece_id">

  export type Mold_PieceOrderByWithAggregationInput = {
    mold_piece_id?: SortOrder
    mold_fk?: SortOrder
    piece_fk?: SortOrder
    cavity?: SortOrder
    _count?: Mold_PieceCountOrderByAggregateInput
    _avg?: Mold_PieceAvgOrderByAggregateInput
    _max?: Mold_PieceMaxOrderByAggregateInput
    _min?: Mold_PieceMinOrderByAggregateInput
    _sum?: Mold_PieceSumOrderByAggregateInput
  }

  export type Mold_PieceScalarWhereWithAggregatesInput = {
    AND?: Mold_PieceScalarWhereWithAggregatesInput | Mold_PieceScalarWhereWithAggregatesInput[]
    OR?: Mold_PieceScalarWhereWithAggregatesInput[]
    NOT?: Mold_PieceScalarWhereWithAggregatesInput | Mold_PieceScalarWhereWithAggregatesInput[]
    mold_piece_id?: IntWithAggregatesFilter<"Mold_Piece"> | number
    mold_fk?: IntWithAggregatesFilter<"Mold_Piece"> | number
    piece_fk?: IntWithAggregatesFilter<"Mold_Piece"> | number
    cavity?: IntWithAggregatesFilter<"Mold_Piece"> | number
  }

  export type Production_OrderWhereInput = {
    AND?: Production_OrderWhereInput | Production_OrderWhereInput[]
    OR?: Production_OrderWhereInput[]
    NOT?: Production_OrderWhereInput | Production_OrderWhereInput[]
    production_order_id?: IntFilter<"Production_Order"> | number
    created_at?: DateTimeFilter<"Production_Order"> | Date | string
    finished_at?: DateTimeNullableFilter<"Production_Order"> | Date | string | null
    initial_counter?: IntFilter<"Production_Order"> | number
    final_counter?: IntNullableFilter<"Production_Order"> | number | null
    employee_fk?: IntFilter<"Production_Order"> | number
    mold_quantity?: IntFilter<"Production_Order"> | number
    mold_fk?: IntFilter<"Production_Order"> | number
    description?: StringNullableFilter<"Production_Order"> | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    mold?: XOR<MoldRelationFilter, MoldWhereInput>
  }

  export type Production_OrderOrderByWithRelationInput = {
    production_order_id?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    initial_counter?: SortOrder
    final_counter?: SortOrderInput | SortOrder
    employee_fk?: SortOrder
    mold_quantity?: SortOrder
    mold_fk?: SortOrder
    description?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    mold?: MoldOrderByWithRelationInput
  }

  export type Production_OrderWhereUniqueInput = Prisma.AtLeast<{
    production_order_id?: number
    AND?: Production_OrderWhereInput | Production_OrderWhereInput[]
    OR?: Production_OrderWhereInput[]
    NOT?: Production_OrderWhereInput | Production_OrderWhereInput[]
    created_at?: DateTimeFilter<"Production_Order"> | Date | string
    finished_at?: DateTimeNullableFilter<"Production_Order"> | Date | string | null
    initial_counter?: IntFilter<"Production_Order"> | number
    final_counter?: IntNullableFilter<"Production_Order"> | number | null
    employee_fk?: IntFilter<"Production_Order"> | number
    mold_quantity?: IntFilter<"Production_Order"> | number
    mold_fk?: IntFilter<"Production_Order"> | number
    description?: StringNullableFilter<"Production_Order"> | string | null
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    mold?: XOR<MoldRelationFilter, MoldWhereInput>
  }, "production_order_id">

  export type Production_OrderOrderByWithAggregationInput = {
    production_order_id?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    initial_counter?: SortOrder
    final_counter?: SortOrderInput | SortOrder
    employee_fk?: SortOrder
    mold_quantity?: SortOrder
    mold_fk?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: Production_OrderCountOrderByAggregateInput
    _avg?: Production_OrderAvgOrderByAggregateInput
    _max?: Production_OrderMaxOrderByAggregateInput
    _min?: Production_OrderMinOrderByAggregateInput
    _sum?: Production_OrderSumOrderByAggregateInput
  }

  export type Production_OrderScalarWhereWithAggregatesInput = {
    AND?: Production_OrderScalarWhereWithAggregatesInput | Production_OrderScalarWhereWithAggregatesInput[]
    OR?: Production_OrderScalarWhereWithAggregatesInput[]
    NOT?: Production_OrderScalarWhereWithAggregatesInput | Production_OrderScalarWhereWithAggregatesInput[]
    production_order_id?: IntWithAggregatesFilter<"Production_Order"> | number
    created_at?: DateTimeWithAggregatesFilter<"Production_Order"> | Date | string
    finished_at?: DateTimeNullableWithAggregatesFilter<"Production_Order"> | Date | string | null
    initial_counter?: IntWithAggregatesFilter<"Production_Order"> | number
    final_counter?: IntNullableWithAggregatesFilter<"Production_Order"> | number | null
    employee_fk?: IntWithAggregatesFilter<"Production_Order"> | number
    mold_quantity?: IntWithAggregatesFilter<"Production_Order"> | number
    mold_fk?: IntWithAggregatesFilter<"Production_Order"> | number
    description?: StringNullableWithAggregatesFilter<"Production_Order"> | string | null
  }

  export type EmployeeCreateInput = {
    name: string
    password: string
    sector: string
    Production_Order?: Production_OrderCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    employee_id?: number
    name: string
    password: string
    sector: string
    Production_Order?: Production_OrderUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    Production_Order?: Production_OrderUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    Production_Order?: Production_OrderUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    employee_id?: number
    name: string
    password: string
    sector: string
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
  }

  export type MoldCreateInput = {
    name: string
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
    Mold_Piece?: Mold_PieceCreateNestedManyWithoutMoldInput
    Production_Order?: Production_OrderCreateNestedManyWithoutMoldInput
  }

  export type MoldUncheckedCreateInput = {
    mold_id?: number
    name: string
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
    Mold_Piece?: Mold_PieceUncheckedCreateNestedManyWithoutMoldInput
    Production_Order?: Production_OrderUncheckedCreateNestedManyWithoutMoldInput
  }

  export type MoldUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    total_weight?: FloatFieldUpdateOperationsInput | number
    channel_return_weight?: FloatFieldUpdateOperationsInput | number
    channel_lost_percentage?: FloatFieldUpdateOperationsInput | number
    mold_aluminium_loss?: FloatFieldUpdateOperationsInput | number
    Mold_Piece?: Mold_PieceUpdateManyWithoutMoldNestedInput
    Production_Order?: Production_OrderUpdateManyWithoutMoldNestedInput
  }

  export type MoldUncheckedUpdateInput = {
    mold_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    total_weight?: FloatFieldUpdateOperationsInput | number
    channel_return_weight?: FloatFieldUpdateOperationsInput | number
    channel_lost_percentage?: FloatFieldUpdateOperationsInput | number
    mold_aluminium_loss?: FloatFieldUpdateOperationsInput | number
    Mold_Piece?: Mold_PieceUncheckedUpdateManyWithoutMoldNestedInput
    Production_Order?: Production_OrderUncheckedUpdateManyWithoutMoldNestedInput
  }

  export type MoldCreateManyInput = {
    mold_id?: number
    name: string
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
  }

  export type MoldUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    total_weight?: FloatFieldUpdateOperationsInput | number
    channel_return_weight?: FloatFieldUpdateOperationsInput | number
    channel_lost_percentage?: FloatFieldUpdateOperationsInput | number
    mold_aluminium_loss?: FloatFieldUpdateOperationsInput | number
  }

  export type MoldUncheckedUpdateManyInput = {
    mold_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    total_weight?: FloatFieldUpdateOperationsInput | number
    channel_return_weight?: FloatFieldUpdateOperationsInput | number
    channel_lost_percentage?: FloatFieldUpdateOperationsInput | number
    mold_aluminium_loss?: FloatFieldUpdateOperationsInput | number
  }

  export type PieceCreateInput = {
    name: string
    size: number
    gross_weight: number
    net_weight: number
    handle_type: string
    splinter_lost_percentage: number
    splinter: number
    Mold_Piece?: Mold_PieceCreateNestedManyWithoutPieceInput
  }

  export type PieceUncheckedCreateInput = {
    piece_id?: number
    name: string
    size: number
    gross_weight: number
    net_weight: number
    handle_type: string
    splinter_lost_percentage: number
    splinter: number
    Mold_Piece?: Mold_PieceUncheckedCreateNestedManyWithoutPieceInput
  }

  export type PieceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    gross_weight?: FloatFieldUpdateOperationsInput | number
    net_weight?: FloatFieldUpdateOperationsInput | number
    handle_type?: StringFieldUpdateOperationsInput | string
    splinter_lost_percentage?: FloatFieldUpdateOperationsInput | number
    splinter?: FloatFieldUpdateOperationsInput | number
    Mold_Piece?: Mold_PieceUpdateManyWithoutPieceNestedInput
  }

  export type PieceUncheckedUpdateInput = {
    piece_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    gross_weight?: FloatFieldUpdateOperationsInput | number
    net_weight?: FloatFieldUpdateOperationsInput | number
    handle_type?: StringFieldUpdateOperationsInput | string
    splinter_lost_percentage?: FloatFieldUpdateOperationsInput | number
    splinter?: FloatFieldUpdateOperationsInput | number
    Mold_Piece?: Mold_PieceUncheckedUpdateManyWithoutPieceNestedInput
  }

  export type PieceCreateManyInput = {
    piece_id?: number
    name: string
    size: number
    gross_weight: number
    net_weight: number
    handle_type: string
    splinter_lost_percentage: number
    splinter: number
  }

  export type PieceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    gross_weight?: FloatFieldUpdateOperationsInput | number
    net_weight?: FloatFieldUpdateOperationsInput | number
    handle_type?: StringFieldUpdateOperationsInput | string
    splinter_lost_percentage?: FloatFieldUpdateOperationsInput | number
    splinter?: FloatFieldUpdateOperationsInput | number
  }

  export type PieceUncheckedUpdateManyInput = {
    piece_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    gross_weight?: FloatFieldUpdateOperationsInput | number
    net_weight?: FloatFieldUpdateOperationsInput | number
    handle_type?: StringFieldUpdateOperationsInput | string
    splinter_lost_percentage?: FloatFieldUpdateOperationsInput | number
    splinter?: FloatFieldUpdateOperationsInput | number
  }

  export type Mold_PieceCreateInput = {
    cavity: number
    mold: MoldCreateNestedOneWithoutMold_PieceInput
    piece: PieceCreateNestedOneWithoutMold_PieceInput
  }

  export type Mold_PieceUncheckedCreateInput = {
    mold_piece_id?: number
    mold_fk: number
    piece_fk: number
    cavity: number
  }

  export type Mold_PieceUpdateInput = {
    cavity?: IntFieldUpdateOperationsInput | number
    mold?: MoldUpdateOneRequiredWithoutMold_PieceNestedInput
    piece?: PieceUpdateOneRequiredWithoutMold_PieceNestedInput
  }

  export type Mold_PieceUncheckedUpdateInput = {
    mold_piece_id?: IntFieldUpdateOperationsInput | number
    mold_fk?: IntFieldUpdateOperationsInput | number
    piece_fk?: IntFieldUpdateOperationsInput | number
    cavity?: IntFieldUpdateOperationsInput | number
  }

  export type Mold_PieceCreateManyInput = {
    mold_piece_id?: number
    mold_fk: number
    piece_fk: number
    cavity: number
  }

  export type Mold_PieceUpdateManyMutationInput = {
    cavity?: IntFieldUpdateOperationsInput | number
  }

  export type Mold_PieceUncheckedUpdateManyInput = {
    mold_piece_id?: IntFieldUpdateOperationsInput | number
    mold_fk?: IntFieldUpdateOperationsInput | number
    piece_fk?: IntFieldUpdateOperationsInput | number
    cavity?: IntFieldUpdateOperationsInput | number
  }

  export type Production_OrderCreateInput = {
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    mold_quantity: number
    description?: string | null
    employee: EmployeeCreateNestedOneWithoutProduction_OrderInput
    mold: MoldCreateNestedOneWithoutProduction_OrderInput
  }

  export type Production_OrderUncheckedCreateInput = {
    production_order_id?: number
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    employee_fk: number
    mold_quantity: number
    mold_fk: number
    description?: string | null
  }

  export type Production_OrderUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    mold_quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutProduction_OrderNestedInput
    mold?: MoldUpdateOneRequiredWithoutProduction_OrderNestedInput
  }

  export type Production_OrderUncheckedUpdateInput = {
    production_order_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    employee_fk?: IntFieldUpdateOperationsInput | number
    mold_quantity?: IntFieldUpdateOperationsInput | number
    mold_fk?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Production_OrderCreateManyInput = {
    production_order_id?: number
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    employee_fk: number
    mold_quantity: number
    mold_fk: number
    description?: string | null
  }

  export type Production_OrderUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    mold_quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Production_OrderUncheckedUpdateManyInput = {
    production_order_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    employee_fk?: IntFieldUpdateOperationsInput | number
    mold_quantity?: IntFieldUpdateOperationsInput | number
    mold_fk?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Production_OrderListRelationFilter = {
    every?: Production_OrderWhereInput
    some?: Production_OrderWhereInput
    none?: Production_OrderWhereInput
  }

  export type Production_OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    employee_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    sector?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    employee_id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    employee_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    sector?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    employee_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    sector?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    employee_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Mold_PieceListRelationFilter = {
    every?: Mold_PieceWhereInput
    some?: Mold_PieceWhereInput
    none?: Mold_PieceWhereInput
  }

  export type Mold_PieceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoldCountOrderByAggregateInput = {
    mold_id?: SortOrder
    name?: SortOrder
    total_weight?: SortOrder
    channel_return_weight?: SortOrder
    channel_lost_percentage?: SortOrder
    mold_aluminium_loss?: SortOrder
  }

  export type MoldAvgOrderByAggregateInput = {
    mold_id?: SortOrder
    total_weight?: SortOrder
    channel_return_weight?: SortOrder
    channel_lost_percentage?: SortOrder
    mold_aluminium_loss?: SortOrder
  }

  export type MoldMaxOrderByAggregateInput = {
    mold_id?: SortOrder
    name?: SortOrder
    total_weight?: SortOrder
    channel_return_weight?: SortOrder
    channel_lost_percentage?: SortOrder
    mold_aluminium_loss?: SortOrder
  }

  export type MoldMinOrderByAggregateInput = {
    mold_id?: SortOrder
    name?: SortOrder
    total_weight?: SortOrder
    channel_return_weight?: SortOrder
    channel_lost_percentage?: SortOrder
    mold_aluminium_loss?: SortOrder
  }

  export type MoldSumOrderByAggregateInput = {
    mold_id?: SortOrder
    total_weight?: SortOrder
    channel_return_weight?: SortOrder
    channel_lost_percentage?: SortOrder
    mold_aluminium_loss?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PieceCountOrderByAggregateInput = {
    piece_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    gross_weight?: SortOrder
    net_weight?: SortOrder
    handle_type?: SortOrder
    splinter_lost_percentage?: SortOrder
    splinter?: SortOrder
  }

  export type PieceAvgOrderByAggregateInput = {
    piece_id?: SortOrder
    size?: SortOrder
    gross_weight?: SortOrder
    net_weight?: SortOrder
    splinter_lost_percentage?: SortOrder
    splinter?: SortOrder
  }

  export type PieceMaxOrderByAggregateInput = {
    piece_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    gross_weight?: SortOrder
    net_weight?: SortOrder
    handle_type?: SortOrder
    splinter_lost_percentage?: SortOrder
    splinter?: SortOrder
  }

  export type PieceMinOrderByAggregateInput = {
    piece_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    gross_weight?: SortOrder
    net_weight?: SortOrder
    handle_type?: SortOrder
    splinter_lost_percentage?: SortOrder
    splinter?: SortOrder
  }

  export type PieceSumOrderByAggregateInput = {
    piece_id?: SortOrder
    size?: SortOrder
    gross_weight?: SortOrder
    net_weight?: SortOrder
    splinter_lost_percentage?: SortOrder
    splinter?: SortOrder
  }

  export type MoldRelationFilter = {
    is?: MoldWhereInput
    isNot?: MoldWhereInput
  }

  export type PieceRelationFilter = {
    is?: PieceWhereInput
    isNot?: PieceWhereInput
  }

  export type Mold_PieceCountOrderByAggregateInput = {
    mold_piece_id?: SortOrder
    mold_fk?: SortOrder
    piece_fk?: SortOrder
    cavity?: SortOrder
  }

  export type Mold_PieceAvgOrderByAggregateInput = {
    mold_piece_id?: SortOrder
    mold_fk?: SortOrder
    piece_fk?: SortOrder
    cavity?: SortOrder
  }

  export type Mold_PieceMaxOrderByAggregateInput = {
    mold_piece_id?: SortOrder
    mold_fk?: SortOrder
    piece_fk?: SortOrder
    cavity?: SortOrder
  }

  export type Mold_PieceMinOrderByAggregateInput = {
    mold_piece_id?: SortOrder
    mold_fk?: SortOrder
    piece_fk?: SortOrder
    cavity?: SortOrder
  }

  export type Mold_PieceSumOrderByAggregateInput = {
    mold_piece_id?: SortOrder
    mold_fk?: SortOrder
    piece_fk?: SortOrder
    cavity?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EmployeeRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Production_OrderCountOrderByAggregateInput = {
    production_order_id?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    initial_counter?: SortOrder
    final_counter?: SortOrder
    employee_fk?: SortOrder
    mold_quantity?: SortOrder
    mold_fk?: SortOrder
    description?: SortOrder
  }

  export type Production_OrderAvgOrderByAggregateInput = {
    production_order_id?: SortOrder
    initial_counter?: SortOrder
    final_counter?: SortOrder
    employee_fk?: SortOrder
    mold_quantity?: SortOrder
    mold_fk?: SortOrder
  }

  export type Production_OrderMaxOrderByAggregateInput = {
    production_order_id?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    initial_counter?: SortOrder
    final_counter?: SortOrder
    employee_fk?: SortOrder
    mold_quantity?: SortOrder
    mold_fk?: SortOrder
    description?: SortOrder
  }

  export type Production_OrderMinOrderByAggregateInput = {
    production_order_id?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
    initial_counter?: SortOrder
    final_counter?: SortOrder
    employee_fk?: SortOrder
    mold_quantity?: SortOrder
    mold_fk?: SortOrder
    description?: SortOrder
  }

  export type Production_OrderSumOrderByAggregateInput = {
    production_order_id?: SortOrder
    initial_counter?: SortOrder
    final_counter?: SortOrder
    employee_fk?: SortOrder
    mold_quantity?: SortOrder
    mold_fk?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Production_OrderCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Production_OrderCreateWithoutEmployeeInput, Production_OrderUncheckedCreateWithoutEmployeeInput> | Production_OrderCreateWithoutEmployeeInput[] | Production_OrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: Production_OrderCreateOrConnectWithoutEmployeeInput | Production_OrderCreateOrConnectWithoutEmployeeInput[]
    createMany?: Production_OrderCreateManyEmployeeInputEnvelope
    connect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
  }

  export type Production_OrderUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Production_OrderCreateWithoutEmployeeInput, Production_OrderUncheckedCreateWithoutEmployeeInput> | Production_OrderCreateWithoutEmployeeInput[] | Production_OrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: Production_OrderCreateOrConnectWithoutEmployeeInput | Production_OrderCreateOrConnectWithoutEmployeeInput[]
    createMany?: Production_OrderCreateManyEmployeeInputEnvelope
    connect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Production_OrderUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<Production_OrderCreateWithoutEmployeeInput, Production_OrderUncheckedCreateWithoutEmployeeInput> | Production_OrderCreateWithoutEmployeeInput[] | Production_OrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: Production_OrderCreateOrConnectWithoutEmployeeInput | Production_OrderCreateOrConnectWithoutEmployeeInput[]
    upsert?: Production_OrderUpsertWithWhereUniqueWithoutEmployeeInput | Production_OrderUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: Production_OrderCreateManyEmployeeInputEnvelope
    set?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    disconnect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    delete?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    connect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    update?: Production_OrderUpdateWithWhereUniqueWithoutEmployeeInput | Production_OrderUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: Production_OrderUpdateManyWithWhereWithoutEmployeeInput | Production_OrderUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: Production_OrderScalarWhereInput | Production_OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Production_OrderUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<Production_OrderCreateWithoutEmployeeInput, Production_OrderUncheckedCreateWithoutEmployeeInput> | Production_OrderCreateWithoutEmployeeInput[] | Production_OrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: Production_OrderCreateOrConnectWithoutEmployeeInput | Production_OrderCreateOrConnectWithoutEmployeeInput[]
    upsert?: Production_OrderUpsertWithWhereUniqueWithoutEmployeeInput | Production_OrderUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: Production_OrderCreateManyEmployeeInputEnvelope
    set?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    disconnect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    delete?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    connect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    update?: Production_OrderUpdateWithWhereUniqueWithoutEmployeeInput | Production_OrderUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: Production_OrderUpdateManyWithWhereWithoutEmployeeInput | Production_OrderUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: Production_OrderScalarWhereInput | Production_OrderScalarWhereInput[]
  }

  export type Mold_PieceCreateNestedManyWithoutMoldInput = {
    create?: XOR<Mold_PieceCreateWithoutMoldInput, Mold_PieceUncheckedCreateWithoutMoldInput> | Mold_PieceCreateWithoutMoldInput[] | Mold_PieceUncheckedCreateWithoutMoldInput[]
    connectOrCreate?: Mold_PieceCreateOrConnectWithoutMoldInput | Mold_PieceCreateOrConnectWithoutMoldInput[]
    createMany?: Mold_PieceCreateManyMoldInputEnvelope
    connect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
  }

  export type Production_OrderCreateNestedManyWithoutMoldInput = {
    create?: XOR<Production_OrderCreateWithoutMoldInput, Production_OrderUncheckedCreateWithoutMoldInput> | Production_OrderCreateWithoutMoldInput[] | Production_OrderUncheckedCreateWithoutMoldInput[]
    connectOrCreate?: Production_OrderCreateOrConnectWithoutMoldInput | Production_OrderCreateOrConnectWithoutMoldInput[]
    createMany?: Production_OrderCreateManyMoldInputEnvelope
    connect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
  }

  export type Mold_PieceUncheckedCreateNestedManyWithoutMoldInput = {
    create?: XOR<Mold_PieceCreateWithoutMoldInput, Mold_PieceUncheckedCreateWithoutMoldInput> | Mold_PieceCreateWithoutMoldInput[] | Mold_PieceUncheckedCreateWithoutMoldInput[]
    connectOrCreate?: Mold_PieceCreateOrConnectWithoutMoldInput | Mold_PieceCreateOrConnectWithoutMoldInput[]
    createMany?: Mold_PieceCreateManyMoldInputEnvelope
    connect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
  }

  export type Production_OrderUncheckedCreateNestedManyWithoutMoldInput = {
    create?: XOR<Production_OrderCreateWithoutMoldInput, Production_OrderUncheckedCreateWithoutMoldInput> | Production_OrderCreateWithoutMoldInput[] | Production_OrderUncheckedCreateWithoutMoldInput[]
    connectOrCreate?: Production_OrderCreateOrConnectWithoutMoldInput | Production_OrderCreateOrConnectWithoutMoldInput[]
    createMany?: Production_OrderCreateManyMoldInputEnvelope
    connect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Mold_PieceUpdateManyWithoutMoldNestedInput = {
    create?: XOR<Mold_PieceCreateWithoutMoldInput, Mold_PieceUncheckedCreateWithoutMoldInput> | Mold_PieceCreateWithoutMoldInput[] | Mold_PieceUncheckedCreateWithoutMoldInput[]
    connectOrCreate?: Mold_PieceCreateOrConnectWithoutMoldInput | Mold_PieceCreateOrConnectWithoutMoldInput[]
    upsert?: Mold_PieceUpsertWithWhereUniqueWithoutMoldInput | Mold_PieceUpsertWithWhereUniqueWithoutMoldInput[]
    createMany?: Mold_PieceCreateManyMoldInputEnvelope
    set?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    disconnect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    delete?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    connect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    update?: Mold_PieceUpdateWithWhereUniqueWithoutMoldInput | Mold_PieceUpdateWithWhereUniqueWithoutMoldInput[]
    updateMany?: Mold_PieceUpdateManyWithWhereWithoutMoldInput | Mold_PieceUpdateManyWithWhereWithoutMoldInput[]
    deleteMany?: Mold_PieceScalarWhereInput | Mold_PieceScalarWhereInput[]
  }

  export type Production_OrderUpdateManyWithoutMoldNestedInput = {
    create?: XOR<Production_OrderCreateWithoutMoldInput, Production_OrderUncheckedCreateWithoutMoldInput> | Production_OrderCreateWithoutMoldInput[] | Production_OrderUncheckedCreateWithoutMoldInput[]
    connectOrCreate?: Production_OrderCreateOrConnectWithoutMoldInput | Production_OrderCreateOrConnectWithoutMoldInput[]
    upsert?: Production_OrderUpsertWithWhereUniqueWithoutMoldInput | Production_OrderUpsertWithWhereUniqueWithoutMoldInput[]
    createMany?: Production_OrderCreateManyMoldInputEnvelope
    set?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    disconnect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    delete?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    connect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    update?: Production_OrderUpdateWithWhereUniqueWithoutMoldInput | Production_OrderUpdateWithWhereUniqueWithoutMoldInput[]
    updateMany?: Production_OrderUpdateManyWithWhereWithoutMoldInput | Production_OrderUpdateManyWithWhereWithoutMoldInput[]
    deleteMany?: Production_OrderScalarWhereInput | Production_OrderScalarWhereInput[]
  }

  export type Mold_PieceUncheckedUpdateManyWithoutMoldNestedInput = {
    create?: XOR<Mold_PieceCreateWithoutMoldInput, Mold_PieceUncheckedCreateWithoutMoldInput> | Mold_PieceCreateWithoutMoldInput[] | Mold_PieceUncheckedCreateWithoutMoldInput[]
    connectOrCreate?: Mold_PieceCreateOrConnectWithoutMoldInput | Mold_PieceCreateOrConnectWithoutMoldInput[]
    upsert?: Mold_PieceUpsertWithWhereUniqueWithoutMoldInput | Mold_PieceUpsertWithWhereUniqueWithoutMoldInput[]
    createMany?: Mold_PieceCreateManyMoldInputEnvelope
    set?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    disconnect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    delete?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    connect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    update?: Mold_PieceUpdateWithWhereUniqueWithoutMoldInput | Mold_PieceUpdateWithWhereUniqueWithoutMoldInput[]
    updateMany?: Mold_PieceUpdateManyWithWhereWithoutMoldInput | Mold_PieceUpdateManyWithWhereWithoutMoldInput[]
    deleteMany?: Mold_PieceScalarWhereInput | Mold_PieceScalarWhereInput[]
  }

  export type Production_OrderUncheckedUpdateManyWithoutMoldNestedInput = {
    create?: XOR<Production_OrderCreateWithoutMoldInput, Production_OrderUncheckedCreateWithoutMoldInput> | Production_OrderCreateWithoutMoldInput[] | Production_OrderUncheckedCreateWithoutMoldInput[]
    connectOrCreate?: Production_OrderCreateOrConnectWithoutMoldInput | Production_OrderCreateOrConnectWithoutMoldInput[]
    upsert?: Production_OrderUpsertWithWhereUniqueWithoutMoldInput | Production_OrderUpsertWithWhereUniqueWithoutMoldInput[]
    createMany?: Production_OrderCreateManyMoldInputEnvelope
    set?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    disconnect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    delete?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    connect?: Production_OrderWhereUniqueInput | Production_OrderWhereUniqueInput[]
    update?: Production_OrderUpdateWithWhereUniqueWithoutMoldInput | Production_OrderUpdateWithWhereUniqueWithoutMoldInput[]
    updateMany?: Production_OrderUpdateManyWithWhereWithoutMoldInput | Production_OrderUpdateManyWithWhereWithoutMoldInput[]
    deleteMany?: Production_OrderScalarWhereInput | Production_OrderScalarWhereInput[]
  }

  export type Mold_PieceCreateNestedManyWithoutPieceInput = {
    create?: XOR<Mold_PieceCreateWithoutPieceInput, Mold_PieceUncheckedCreateWithoutPieceInput> | Mold_PieceCreateWithoutPieceInput[] | Mold_PieceUncheckedCreateWithoutPieceInput[]
    connectOrCreate?: Mold_PieceCreateOrConnectWithoutPieceInput | Mold_PieceCreateOrConnectWithoutPieceInput[]
    createMany?: Mold_PieceCreateManyPieceInputEnvelope
    connect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
  }

  export type Mold_PieceUncheckedCreateNestedManyWithoutPieceInput = {
    create?: XOR<Mold_PieceCreateWithoutPieceInput, Mold_PieceUncheckedCreateWithoutPieceInput> | Mold_PieceCreateWithoutPieceInput[] | Mold_PieceUncheckedCreateWithoutPieceInput[]
    connectOrCreate?: Mold_PieceCreateOrConnectWithoutPieceInput | Mold_PieceCreateOrConnectWithoutPieceInput[]
    createMany?: Mold_PieceCreateManyPieceInputEnvelope
    connect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
  }

  export type Mold_PieceUpdateManyWithoutPieceNestedInput = {
    create?: XOR<Mold_PieceCreateWithoutPieceInput, Mold_PieceUncheckedCreateWithoutPieceInput> | Mold_PieceCreateWithoutPieceInput[] | Mold_PieceUncheckedCreateWithoutPieceInput[]
    connectOrCreate?: Mold_PieceCreateOrConnectWithoutPieceInput | Mold_PieceCreateOrConnectWithoutPieceInput[]
    upsert?: Mold_PieceUpsertWithWhereUniqueWithoutPieceInput | Mold_PieceUpsertWithWhereUniqueWithoutPieceInput[]
    createMany?: Mold_PieceCreateManyPieceInputEnvelope
    set?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    disconnect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    delete?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    connect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    update?: Mold_PieceUpdateWithWhereUniqueWithoutPieceInput | Mold_PieceUpdateWithWhereUniqueWithoutPieceInput[]
    updateMany?: Mold_PieceUpdateManyWithWhereWithoutPieceInput | Mold_PieceUpdateManyWithWhereWithoutPieceInput[]
    deleteMany?: Mold_PieceScalarWhereInput | Mold_PieceScalarWhereInput[]
  }

  export type Mold_PieceUncheckedUpdateManyWithoutPieceNestedInput = {
    create?: XOR<Mold_PieceCreateWithoutPieceInput, Mold_PieceUncheckedCreateWithoutPieceInput> | Mold_PieceCreateWithoutPieceInput[] | Mold_PieceUncheckedCreateWithoutPieceInput[]
    connectOrCreate?: Mold_PieceCreateOrConnectWithoutPieceInput | Mold_PieceCreateOrConnectWithoutPieceInput[]
    upsert?: Mold_PieceUpsertWithWhereUniqueWithoutPieceInput | Mold_PieceUpsertWithWhereUniqueWithoutPieceInput[]
    createMany?: Mold_PieceCreateManyPieceInputEnvelope
    set?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    disconnect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    delete?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    connect?: Mold_PieceWhereUniqueInput | Mold_PieceWhereUniqueInput[]
    update?: Mold_PieceUpdateWithWhereUniqueWithoutPieceInput | Mold_PieceUpdateWithWhereUniqueWithoutPieceInput[]
    updateMany?: Mold_PieceUpdateManyWithWhereWithoutPieceInput | Mold_PieceUpdateManyWithWhereWithoutPieceInput[]
    deleteMany?: Mold_PieceScalarWhereInput | Mold_PieceScalarWhereInput[]
  }

  export type MoldCreateNestedOneWithoutMold_PieceInput = {
    create?: XOR<MoldCreateWithoutMold_PieceInput, MoldUncheckedCreateWithoutMold_PieceInput>
    connectOrCreate?: MoldCreateOrConnectWithoutMold_PieceInput
    connect?: MoldWhereUniqueInput
  }

  export type PieceCreateNestedOneWithoutMold_PieceInput = {
    create?: XOR<PieceCreateWithoutMold_PieceInput, PieceUncheckedCreateWithoutMold_PieceInput>
    connectOrCreate?: PieceCreateOrConnectWithoutMold_PieceInput
    connect?: PieceWhereUniqueInput
  }

  export type MoldUpdateOneRequiredWithoutMold_PieceNestedInput = {
    create?: XOR<MoldCreateWithoutMold_PieceInput, MoldUncheckedCreateWithoutMold_PieceInput>
    connectOrCreate?: MoldCreateOrConnectWithoutMold_PieceInput
    upsert?: MoldUpsertWithoutMold_PieceInput
    connect?: MoldWhereUniqueInput
    update?: XOR<XOR<MoldUpdateToOneWithWhereWithoutMold_PieceInput, MoldUpdateWithoutMold_PieceInput>, MoldUncheckedUpdateWithoutMold_PieceInput>
  }

  export type PieceUpdateOneRequiredWithoutMold_PieceNestedInput = {
    create?: XOR<PieceCreateWithoutMold_PieceInput, PieceUncheckedCreateWithoutMold_PieceInput>
    connectOrCreate?: PieceCreateOrConnectWithoutMold_PieceInput
    upsert?: PieceUpsertWithoutMold_PieceInput
    connect?: PieceWhereUniqueInput
    update?: XOR<XOR<PieceUpdateToOneWithWhereWithoutMold_PieceInput, PieceUpdateWithoutMold_PieceInput>, PieceUncheckedUpdateWithoutMold_PieceInput>
  }

  export type EmployeeCreateNestedOneWithoutProduction_OrderInput = {
    create?: XOR<EmployeeCreateWithoutProduction_OrderInput, EmployeeUncheckedCreateWithoutProduction_OrderInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutProduction_OrderInput
    connect?: EmployeeWhereUniqueInput
  }

  export type MoldCreateNestedOneWithoutProduction_OrderInput = {
    create?: XOR<MoldCreateWithoutProduction_OrderInput, MoldUncheckedCreateWithoutProduction_OrderInput>
    connectOrCreate?: MoldCreateOrConnectWithoutProduction_OrderInput
    connect?: MoldWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmployeeUpdateOneRequiredWithoutProduction_OrderNestedInput = {
    create?: XOR<EmployeeCreateWithoutProduction_OrderInput, EmployeeUncheckedCreateWithoutProduction_OrderInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutProduction_OrderInput
    upsert?: EmployeeUpsertWithoutProduction_OrderInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutProduction_OrderInput, EmployeeUpdateWithoutProduction_OrderInput>, EmployeeUncheckedUpdateWithoutProduction_OrderInput>
  }

  export type MoldUpdateOneRequiredWithoutProduction_OrderNestedInput = {
    create?: XOR<MoldCreateWithoutProduction_OrderInput, MoldUncheckedCreateWithoutProduction_OrderInput>
    connectOrCreate?: MoldCreateOrConnectWithoutProduction_OrderInput
    upsert?: MoldUpsertWithoutProduction_OrderInput
    connect?: MoldWhereUniqueInput
    update?: XOR<XOR<MoldUpdateToOneWithWhereWithoutProduction_OrderInput, MoldUpdateWithoutProduction_OrderInput>, MoldUncheckedUpdateWithoutProduction_OrderInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Production_OrderCreateWithoutEmployeeInput = {
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    mold_quantity: number
    description?: string | null
    mold: MoldCreateNestedOneWithoutProduction_OrderInput
  }

  export type Production_OrderUncheckedCreateWithoutEmployeeInput = {
    production_order_id?: number
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    mold_quantity: number
    mold_fk: number
    description?: string | null
  }

  export type Production_OrderCreateOrConnectWithoutEmployeeInput = {
    where: Production_OrderWhereUniqueInput
    create: XOR<Production_OrderCreateWithoutEmployeeInput, Production_OrderUncheckedCreateWithoutEmployeeInput>
  }

  export type Production_OrderCreateManyEmployeeInputEnvelope = {
    data: Production_OrderCreateManyEmployeeInput | Production_OrderCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type Production_OrderUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Production_OrderWhereUniqueInput
    update: XOR<Production_OrderUpdateWithoutEmployeeInput, Production_OrderUncheckedUpdateWithoutEmployeeInput>
    create: XOR<Production_OrderCreateWithoutEmployeeInput, Production_OrderUncheckedCreateWithoutEmployeeInput>
  }

  export type Production_OrderUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Production_OrderWhereUniqueInput
    data: XOR<Production_OrderUpdateWithoutEmployeeInput, Production_OrderUncheckedUpdateWithoutEmployeeInput>
  }

  export type Production_OrderUpdateManyWithWhereWithoutEmployeeInput = {
    where: Production_OrderScalarWhereInput
    data: XOR<Production_OrderUpdateManyMutationInput, Production_OrderUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type Production_OrderScalarWhereInput = {
    AND?: Production_OrderScalarWhereInput | Production_OrderScalarWhereInput[]
    OR?: Production_OrderScalarWhereInput[]
    NOT?: Production_OrderScalarWhereInput | Production_OrderScalarWhereInput[]
    production_order_id?: IntFilter<"Production_Order"> | number
    created_at?: DateTimeFilter<"Production_Order"> | Date | string
    finished_at?: DateTimeNullableFilter<"Production_Order"> | Date | string | null
    initial_counter?: IntFilter<"Production_Order"> | number
    final_counter?: IntNullableFilter<"Production_Order"> | number | null
    employee_fk?: IntFilter<"Production_Order"> | number
    mold_quantity?: IntFilter<"Production_Order"> | number
    mold_fk?: IntFilter<"Production_Order"> | number
    description?: StringNullableFilter<"Production_Order"> | string | null
  }

  export type Mold_PieceCreateWithoutMoldInput = {
    cavity: number
    piece: PieceCreateNestedOneWithoutMold_PieceInput
  }

  export type Mold_PieceUncheckedCreateWithoutMoldInput = {
    mold_piece_id?: number
    piece_fk: number
    cavity: number
  }

  export type Mold_PieceCreateOrConnectWithoutMoldInput = {
    where: Mold_PieceWhereUniqueInput
    create: XOR<Mold_PieceCreateWithoutMoldInput, Mold_PieceUncheckedCreateWithoutMoldInput>
  }

  export type Mold_PieceCreateManyMoldInputEnvelope = {
    data: Mold_PieceCreateManyMoldInput | Mold_PieceCreateManyMoldInput[]
    skipDuplicates?: boolean
  }

  export type Production_OrderCreateWithoutMoldInput = {
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    mold_quantity: number
    description?: string | null
    employee: EmployeeCreateNestedOneWithoutProduction_OrderInput
  }

  export type Production_OrderUncheckedCreateWithoutMoldInput = {
    production_order_id?: number
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    employee_fk: number
    mold_quantity: number
    description?: string | null
  }

  export type Production_OrderCreateOrConnectWithoutMoldInput = {
    where: Production_OrderWhereUniqueInput
    create: XOR<Production_OrderCreateWithoutMoldInput, Production_OrderUncheckedCreateWithoutMoldInput>
  }

  export type Production_OrderCreateManyMoldInputEnvelope = {
    data: Production_OrderCreateManyMoldInput | Production_OrderCreateManyMoldInput[]
    skipDuplicates?: boolean
  }

  export type Mold_PieceUpsertWithWhereUniqueWithoutMoldInput = {
    where: Mold_PieceWhereUniqueInput
    update: XOR<Mold_PieceUpdateWithoutMoldInput, Mold_PieceUncheckedUpdateWithoutMoldInput>
    create: XOR<Mold_PieceCreateWithoutMoldInput, Mold_PieceUncheckedCreateWithoutMoldInput>
  }

  export type Mold_PieceUpdateWithWhereUniqueWithoutMoldInput = {
    where: Mold_PieceWhereUniqueInput
    data: XOR<Mold_PieceUpdateWithoutMoldInput, Mold_PieceUncheckedUpdateWithoutMoldInput>
  }

  export type Mold_PieceUpdateManyWithWhereWithoutMoldInput = {
    where: Mold_PieceScalarWhereInput
    data: XOR<Mold_PieceUpdateManyMutationInput, Mold_PieceUncheckedUpdateManyWithoutMoldInput>
  }

  export type Mold_PieceScalarWhereInput = {
    AND?: Mold_PieceScalarWhereInput | Mold_PieceScalarWhereInput[]
    OR?: Mold_PieceScalarWhereInput[]
    NOT?: Mold_PieceScalarWhereInput | Mold_PieceScalarWhereInput[]
    mold_piece_id?: IntFilter<"Mold_Piece"> | number
    mold_fk?: IntFilter<"Mold_Piece"> | number
    piece_fk?: IntFilter<"Mold_Piece"> | number
    cavity?: IntFilter<"Mold_Piece"> | number
  }

  export type Production_OrderUpsertWithWhereUniqueWithoutMoldInput = {
    where: Production_OrderWhereUniqueInput
    update: XOR<Production_OrderUpdateWithoutMoldInput, Production_OrderUncheckedUpdateWithoutMoldInput>
    create: XOR<Production_OrderCreateWithoutMoldInput, Production_OrderUncheckedCreateWithoutMoldInput>
  }

  export type Production_OrderUpdateWithWhereUniqueWithoutMoldInput = {
    where: Production_OrderWhereUniqueInput
    data: XOR<Production_OrderUpdateWithoutMoldInput, Production_OrderUncheckedUpdateWithoutMoldInput>
  }

  export type Production_OrderUpdateManyWithWhereWithoutMoldInput = {
    where: Production_OrderScalarWhereInput
    data: XOR<Production_OrderUpdateManyMutationInput, Production_OrderUncheckedUpdateManyWithoutMoldInput>
  }

  export type Mold_PieceCreateWithoutPieceInput = {
    cavity: number
    mold: MoldCreateNestedOneWithoutMold_PieceInput
  }

  export type Mold_PieceUncheckedCreateWithoutPieceInput = {
    mold_piece_id?: number
    mold_fk: number
    cavity: number
  }

  export type Mold_PieceCreateOrConnectWithoutPieceInput = {
    where: Mold_PieceWhereUniqueInput
    create: XOR<Mold_PieceCreateWithoutPieceInput, Mold_PieceUncheckedCreateWithoutPieceInput>
  }

  export type Mold_PieceCreateManyPieceInputEnvelope = {
    data: Mold_PieceCreateManyPieceInput | Mold_PieceCreateManyPieceInput[]
    skipDuplicates?: boolean
  }

  export type Mold_PieceUpsertWithWhereUniqueWithoutPieceInput = {
    where: Mold_PieceWhereUniqueInput
    update: XOR<Mold_PieceUpdateWithoutPieceInput, Mold_PieceUncheckedUpdateWithoutPieceInput>
    create: XOR<Mold_PieceCreateWithoutPieceInput, Mold_PieceUncheckedCreateWithoutPieceInput>
  }

  export type Mold_PieceUpdateWithWhereUniqueWithoutPieceInput = {
    where: Mold_PieceWhereUniqueInput
    data: XOR<Mold_PieceUpdateWithoutPieceInput, Mold_PieceUncheckedUpdateWithoutPieceInput>
  }

  export type Mold_PieceUpdateManyWithWhereWithoutPieceInput = {
    where: Mold_PieceScalarWhereInput
    data: XOR<Mold_PieceUpdateManyMutationInput, Mold_PieceUncheckedUpdateManyWithoutPieceInput>
  }

  export type MoldCreateWithoutMold_PieceInput = {
    name: string
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
    Production_Order?: Production_OrderCreateNestedManyWithoutMoldInput
  }

  export type MoldUncheckedCreateWithoutMold_PieceInput = {
    mold_id?: number
    name: string
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
    Production_Order?: Production_OrderUncheckedCreateNestedManyWithoutMoldInput
  }

  export type MoldCreateOrConnectWithoutMold_PieceInput = {
    where: MoldWhereUniqueInput
    create: XOR<MoldCreateWithoutMold_PieceInput, MoldUncheckedCreateWithoutMold_PieceInput>
  }

  export type PieceCreateWithoutMold_PieceInput = {
    name: string
    size: number
    gross_weight: number
    net_weight: number
    handle_type: string
    splinter_lost_percentage: number
    splinter: number
  }

  export type PieceUncheckedCreateWithoutMold_PieceInput = {
    piece_id?: number
    name: string
    size: number
    gross_weight: number
    net_weight: number
    handle_type: string
    splinter_lost_percentage: number
    splinter: number
  }

  export type PieceCreateOrConnectWithoutMold_PieceInput = {
    where: PieceWhereUniqueInput
    create: XOR<PieceCreateWithoutMold_PieceInput, PieceUncheckedCreateWithoutMold_PieceInput>
  }

  export type MoldUpsertWithoutMold_PieceInput = {
    update: XOR<MoldUpdateWithoutMold_PieceInput, MoldUncheckedUpdateWithoutMold_PieceInput>
    create: XOR<MoldCreateWithoutMold_PieceInput, MoldUncheckedCreateWithoutMold_PieceInput>
    where?: MoldWhereInput
  }

  export type MoldUpdateToOneWithWhereWithoutMold_PieceInput = {
    where?: MoldWhereInput
    data: XOR<MoldUpdateWithoutMold_PieceInput, MoldUncheckedUpdateWithoutMold_PieceInput>
  }

  export type MoldUpdateWithoutMold_PieceInput = {
    name?: StringFieldUpdateOperationsInput | string
    total_weight?: FloatFieldUpdateOperationsInput | number
    channel_return_weight?: FloatFieldUpdateOperationsInput | number
    channel_lost_percentage?: FloatFieldUpdateOperationsInput | number
    mold_aluminium_loss?: FloatFieldUpdateOperationsInput | number
    Production_Order?: Production_OrderUpdateManyWithoutMoldNestedInput
  }

  export type MoldUncheckedUpdateWithoutMold_PieceInput = {
    mold_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    total_weight?: FloatFieldUpdateOperationsInput | number
    channel_return_weight?: FloatFieldUpdateOperationsInput | number
    channel_lost_percentage?: FloatFieldUpdateOperationsInput | number
    mold_aluminium_loss?: FloatFieldUpdateOperationsInput | number
    Production_Order?: Production_OrderUncheckedUpdateManyWithoutMoldNestedInput
  }

  export type PieceUpsertWithoutMold_PieceInput = {
    update: XOR<PieceUpdateWithoutMold_PieceInput, PieceUncheckedUpdateWithoutMold_PieceInput>
    create: XOR<PieceCreateWithoutMold_PieceInput, PieceUncheckedCreateWithoutMold_PieceInput>
    where?: PieceWhereInput
  }

  export type PieceUpdateToOneWithWhereWithoutMold_PieceInput = {
    where?: PieceWhereInput
    data: XOR<PieceUpdateWithoutMold_PieceInput, PieceUncheckedUpdateWithoutMold_PieceInput>
  }

  export type PieceUpdateWithoutMold_PieceInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    gross_weight?: FloatFieldUpdateOperationsInput | number
    net_weight?: FloatFieldUpdateOperationsInput | number
    handle_type?: StringFieldUpdateOperationsInput | string
    splinter_lost_percentage?: FloatFieldUpdateOperationsInput | number
    splinter?: FloatFieldUpdateOperationsInput | number
  }

  export type PieceUncheckedUpdateWithoutMold_PieceInput = {
    piece_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    gross_weight?: FloatFieldUpdateOperationsInput | number
    net_weight?: FloatFieldUpdateOperationsInput | number
    handle_type?: StringFieldUpdateOperationsInput | string
    splinter_lost_percentage?: FloatFieldUpdateOperationsInput | number
    splinter?: FloatFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateWithoutProduction_OrderInput = {
    name: string
    password: string
    sector: string
  }

  export type EmployeeUncheckedCreateWithoutProduction_OrderInput = {
    employee_id?: number
    name: string
    password: string
    sector: string
  }

  export type EmployeeCreateOrConnectWithoutProduction_OrderInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutProduction_OrderInput, EmployeeUncheckedCreateWithoutProduction_OrderInput>
  }

  export type MoldCreateWithoutProduction_OrderInput = {
    name: string
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
    Mold_Piece?: Mold_PieceCreateNestedManyWithoutMoldInput
  }

  export type MoldUncheckedCreateWithoutProduction_OrderInput = {
    mold_id?: number
    name: string
    total_weight: number
    channel_return_weight: number
    channel_lost_percentage: number
    mold_aluminium_loss: number
    Mold_Piece?: Mold_PieceUncheckedCreateNestedManyWithoutMoldInput
  }

  export type MoldCreateOrConnectWithoutProduction_OrderInput = {
    where: MoldWhereUniqueInput
    create: XOR<MoldCreateWithoutProduction_OrderInput, MoldUncheckedCreateWithoutProduction_OrderInput>
  }

  export type EmployeeUpsertWithoutProduction_OrderInput = {
    update: XOR<EmployeeUpdateWithoutProduction_OrderInput, EmployeeUncheckedUpdateWithoutProduction_OrderInput>
    create: XOR<EmployeeCreateWithoutProduction_OrderInput, EmployeeUncheckedCreateWithoutProduction_OrderInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutProduction_OrderInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutProduction_OrderInput, EmployeeUncheckedUpdateWithoutProduction_OrderInput>
  }

  export type EmployeeUpdateWithoutProduction_OrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateWithoutProduction_OrderInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
  }

  export type MoldUpsertWithoutProduction_OrderInput = {
    update: XOR<MoldUpdateWithoutProduction_OrderInput, MoldUncheckedUpdateWithoutProduction_OrderInput>
    create: XOR<MoldCreateWithoutProduction_OrderInput, MoldUncheckedCreateWithoutProduction_OrderInput>
    where?: MoldWhereInput
  }

  export type MoldUpdateToOneWithWhereWithoutProduction_OrderInput = {
    where?: MoldWhereInput
    data: XOR<MoldUpdateWithoutProduction_OrderInput, MoldUncheckedUpdateWithoutProduction_OrderInput>
  }

  export type MoldUpdateWithoutProduction_OrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    total_weight?: FloatFieldUpdateOperationsInput | number
    channel_return_weight?: FloatFieldUpdateOperationsInput | number
    channel_lost_percentage?: FloatFieldUpdateOperationsInput | number
    mold_aluminium_loss?: FloatFieldUpdateOperationsInput | number
    Mold_Piece?: Mold_PieceUpdateManyWithoutMoldNestedInput
  }

  export type MoldUncheckedUpdateWithoutProduction_OrderInput = {
    mold_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    total_weight?: FloatFieldUpdateOperationsInput | number
    channel_return_weight?: FloatFieldUpdateOperationsInput | number
    channel_lost_percentage?: FloatFieldUpdateOperationsInput | number
    mold_aluminium_loss?: FloatFieldUpdateOperationsInput | number
    Mold_Piece?: Mold_PieceUncheckedUpdateManyWithoutMoldNestedInput
  }

  export type Production_OrderCreateManyEmployeeInput = {
    production_order_id?: number
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    mold_quantity: number
    mold_fk: number
    description?: string | null
  }

  export type Production_OrderUpdateWithoutEmployeeInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    mold_quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mold?: MoldUpdateOneRequiredWithoutProduction_OrderNestedInput
  }

  export type Production_OrderUncheckedUpdateWithoutEmployeeInput = {
    production_order_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    mold_quantity?: IntFieldUpdateOperationsInput | number
    mold_fk?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Production_OrderUncheckedUpdateManyWithoutEmployeeInput = {
    production_order_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    mold_quantity?: IntFieldUpdateOperationsInput | number
    mold_fk?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Mold_PieceCreateManyMoldInput = {
    mold_piece_id?: number
    piece_fk: number
    cavity: number
  }

  export type Production_OrderCreateManyMoldInput = {
    production_order_id?: number
    created_at: Date | string
    finished_at?: Date | string | null
    initial_counter: number
    final_counter?: number | null
    employee_fk: number
    mold_quantity: number
    description?: string | null
  }

  export type Mold_PieceUpdateWithoutMoldInput = {
    cavity?: IntFieldUpdateOperationsInput | number
    piece?: PieceUpdateOneRequiredWithoutMold_PieceNestedInput
  }

  export type Mold_PieceUncheckedUpdateWithoutMoldInput = {
    mold_piece_id?: IntFieldUpdateOperationsInput | number
    piece_fk?: IntFieldUpdateOperationsInput | number
    cavity?: IntFieldUpdateOperationsInput | number
  }

  export type Mold_PieceUncheckedUpdateManyWithoutMoldInput = {
    mold_piece_id?: IntFieldUpdateOperationsInput | number
    piece_fk?: IntFieldUpdateOperationsInput | number
    cavity?: IntFieldUpdateOperationsInput | number
  }

  export type Production_OrderUpdateWithoutMoldInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    mold_quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutProduction_OrderNestedInput
  }

  export type Production_OrderUncheckedUpdateWithoutMoldInput = {
    production_order_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    employee_fk?: IntFieldUpdateOperationsInput | number
    mold_quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Production_OrderUncheckedUpdateManyWithoutMoldInput = {
    production_order_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    initial_counter?: IntFieldUpdateOperationsInput | number
    final_counter?: NullableIntFieldUpdateOperationsInput | number | null
    employee_fk?: IntFieldUpdateOperationsInput | number
    mold_quantity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Mold_PieceCreateManyPieceInput = {
    mold_piece_id?: number
    mold_fk: number
    cavity: number
  }

  export type Mold_PieceUpdateWithoutPieceInput = {
    cavity?: IntFieldUpdateOperationsInput | number
    mold?: MoldUpdateOneRequiredWithoutMold_PieceNestedInput
  }

  export type Mold_PieceUncheckedUpdateWithoutPieceInput = {
    mold_piece_id?: IntFieldUpdateOperationsInput | number
    mold_fk?: IntFieldUpdateOperationsInput | number
    cavity?: IntFieldUpdateOperationsInput | number
  }

  export type Mold_PieceUncheckedUpdateManyWithoutPieceInput = {
    mold_piece_id?: IntFieldUpdateOperationsInput | number
    mold_fk?: IntFieldUpdateOperationsInput | number
    cavity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MoldDefaultArgs instead
     */
    export type MoldArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MoldDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PieceDefaultArgs instead
     */
    export type PieceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PieceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Mold_PieceDefaultArgs instead
     */
    export type Mold_PieceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Mold_PieceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Production_OrderDefaultArgs instead
     */
    export type Production_OrderArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Production_OrderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}