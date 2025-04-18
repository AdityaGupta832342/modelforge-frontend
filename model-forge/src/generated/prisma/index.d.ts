
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SequentialModel
 * 
 */
export type SequentialModel = $Result.DefaultSelection<Prisma.$SequentialModelPayload>
/**
 * Model Layer
 * 
 */
export type Layer = $Result.DefaultSelection<Prisma.$LayerPayload>
/**
 * Model LayerConnection
 * 
 */
export type LayerConnection = $Result.DefaultSelection<Prisma.$LayerConnectionPayload>
/**
 * Model ModelVersion
 * 
 */
export type ModelVersion = $Result.DefaultSelection<Prisma.$ModelVersionPayload>
/**
 * Model TrainingSession
 * 
 */
export type TrainingSession = $Result.DefaultSelection<Prisma.$TrainingSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SequentialModels
 * const sequentialModels = await prisma.sequentialModel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SequentialModels
   * const sequentialModels = await prisma.sequentialModel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sequentialModel`: Exposes CRUD operations for the **SequentialModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SequentialModels
    * const sequentialModels = await prisma.sequentialModel.findMany()
    * ```
    */
  get sequentialModel(): Prisma.SequentialModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layer`: Exposes CRUD operations for the **Layer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Layers
    * const layers = await prisma.layer.findMany()
    * ```
    */
  get layer(): Prisma.LayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layerConnection`: Exposes CRUD operations for the **LayerConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayerConnections
    * const layerConnections = await prisma.layerConnection.findMany()
    * ```
    */
  get layerConnection(): Prisma.LayerConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelVersion`: Exposes CRUD operations for the **ModelVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelVersions
    * const modelVersions = await prisma.modelVersion.findMany()
    * ```
    */
  get modelVersion(): Prisma.ModelVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainingSession`: Exposes CRUD operations for the **TrainingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingSessions
    * const trainingSessions = await prisma.trainingSession.findMany()
    * ```
    */
  get trainingSession(): Prisma.TrainingSessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    SequentialModel: 'SequentialModel',
    Layer: 'Layer',
    LayerConnection: 'LayerConnection',
    ModelVersion: 'ModelVersion',
    TrainingSession: 'TrainingSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sequentialModel" | "layer" | "layerConnection" | "modelVersion" | "trainingSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SequentialModel: {
        payload: Prisma.$SequentialModelPayload<ExtArgs>
        fields: Prisma.SequentialModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SequentialModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SequentialModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>
          }
          findFirst: {
            args: Prisma.SequentialModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SequentialModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>
          }
          findMany: {
            args: Prisma.SequentialModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>[]
          }
          create: {
            args: Prisma.SequentialModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>
          }
          createMany: {
            args: Prisma.SequentialModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SequentialModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>[]
          }
          delete: {
            args: Prisma.SequentialModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>
          }
          update: {
            args: Prisma.SequentialModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>
          }
          deleteMany: {
            args: Prisma.SequentialModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SequentialModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SequentialModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>[]
          }
          upsert: {
            args: Prisma.SequentialModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequentialModelPayload>
          }
          aggregate: {
            args: Prisma.SequentialModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSequentialModel>
          }
          groupBy: {
            args: Prisma.SequentialModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<SequentialModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.SequentialModelCountArgs<ExtArgs>
            result: $Utils.Optional<SequentialModelCountAggregateOutputType> | number
          }
        }
      }
      Layer: {
        payload: Prisma.$LayerPayload<ExtArgs>
        fields: Prisma.LayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          findFirst: {
            args: Prisma.LayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          findMany: {
            args: Prisma.LayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>[]
          }
          create: {
            args: Prisma.LayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          createMany: {
            args: Prisma.LayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>[]
          }
          delete: {
            args: Prisma.LayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          update: {
            args: Prisma.LayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          deleteMany: {
            args: Prisma.LayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>[]
          }
          upsert: {
            args: Prisma.LayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          aggregate: {
            args: Prisma.LayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayer>
          }
          groupBy: {
            args: Prisma.LayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayerCountArgs<ExtArgs>
            result: $Utils.Optional<LayerCountAggregateOutputType> | number
          }
        }
      }
      LayerConnection: {
        payload: Prisma.$LayerConnectionPayload<ExtArgs>
        fields: Prisma.LayerConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayerConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayerConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>
          }
          findFirst: {
            args: Prisma.LayerConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayerConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>
          }
          findMany: {
            args: Prisma.LayerConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>[]
          }
          create: {
            args: Prisma.LayerConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>
          }
          createMany: {
            args: Prisma.LayerConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayerConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>[]
          }
          delete: {
            args: Prisma.LayerConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>
          }
          update: {
            args: Prisma.LayerConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>
          }
          deleteMany: {
            args: Prisma.LayerConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayerConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayerConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>[]
          }
          upsert: {
            args: Prisma.LayerConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerConnectionPayload>
          }
          aggregate: {
            args: Prisma.LayerConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayerConnection>
          }
          groupBy: {
            args: Prisma.LayerConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayerConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayerConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<LayerConnectionCountAggregateOutputType> | number
          }
        }
      }
      ModelVersion: {
        payload: Prisma.$ModelVersionPayload<ExtArgs>
        fields: Prisma.ModelVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          findFirst: {
            args: Prisma.ModelVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          findMany: {
            args: Prisma.ModelVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>[]
          }
          create: {
            args: Prisma.ModelVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          createMany: {
            args: Prisma.ModelVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>[]
          }
          delete: {
            args: Prisma.ModelVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          update: {
            args: Prisma.ModelVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          deleteMany: {
            args: Prisma.ModelVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>[]
          }
          upsert: {
            args: Prisma.ModelVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          aggregate: {
            args: Prisma.ModelVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelVersion>
          }
          groupBy: {
            args: Prisma.ModelVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ModelVersionCountAggregateOutputType> | number
          }
        }
      }
      TrainingSession: {
        payload: Prisma.$TrainingSessionPayload<ExtArgs>
        fields: Prisma.TrainingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          findFirst: {
            args: Prisma.TrainingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          findMany: {
            args: Prisma.TrainingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>[]
          }
          create: {
            args: Prisma.TrainingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          createMany: {
            args: Prisma.TrainingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>[]
          }
          delete: {
            args: Prisma.TrainingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          update: {
            args: Prisma.TrainingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          deleteMany: {
            args: Prisma.TrainingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>[]
          }
          upsert: {
            args: Prisma.TrainingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          aggregate: {
            args: Prisma.TrainingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingSession>
          }
          groupBy: {
            args: Prisma.TrainingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sequentialModel?: SequentialModelOmit
    layer?: LayerOmit
    layerConnection?: LayerConnectionOmit
    modelVersion?: ModelVersionOmit
    trainingSession?: TrainingSessionOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type SequentialModelCountOutputType
   */

  export type SequentialModelCountOutputType = {
    layers: number
    versions: number
    trainings: number
  }

  export type SequentialModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layers?: boolean | SequentialModelCountOutputTypeCountLayersArgs
    versions?: boolean | SequentialModelCountOutputTypeCountVersionsArgs
    trainings?: boolean | SequentialModelCountOutputTypeCountTrainingsArgs
  }

  // Custom InputTypes
  /**
   * SequentialModelCountOutputType without action
   */
  export type SequentialModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModelCountOutputType
     */
    select?: SequentialModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SequentialModelCountOutputType without action
   */
  export type SequentialModelCountOutputTypeCountLayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerWhereInput
  }

  /**
   * SequentialModelCountOutputType without action
   */
  export type SequentialModelCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelVersionWhereInput
  }

  /**
   * SequentialModelCountOutputType without action
   */
  export type SequentialModelCountOutputTypeCountTrainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingSessionWhereInput
  }


  /**
   * Count Type LayerCountOutputType
   */

  export type LayerCountOutputType = {
    fromConnections: number
    toConnections: number
  }

  export type LayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromConnections?: boolean | LayerCountOutputTypeCountFromConnectionsArgs
    toConnections?: boolean | LayerCountOutputTypeCountToConnectionsArgs
  }

  // Custom InputTypes
  /**
   * LayerCountOutputType without action
   */
  export type LayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerCountOutputType
     */
    select?: LayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LayerCountOutputType without action
   */
  export type LayerCountOutputTypeCountFromConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerConnectionWhereInput
  }

  /**
   * LayerCountOutputType without action
   */
  export type LayerCountOutputTypeCountToConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerConnectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SequentialModel
   */

  export type AggregateSequentialModel = {
    _count: SequentialModelCountAggregateOutputType | null
    _min: SequentialModelMinAggregateOutputType | null
    _max: SequentialModelMaxAggregateOutputType | null
  }

  export type SequentialModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    enabled: boolean | null
    public: boolean | null
    userId: string | null
  }

  export type SequentialModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    enabled: boolean | null
    public: boolean | null
    userId: string | null
  }

  export type SequentialModelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    enabled: number
    public: number
    userId: number
    _all: number
  }


  export type SequentialModelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    enabled?: true
    public?: true
    userId?: true
  }

  export type SequentialModelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    enabled?: true
    public?: true
    userId?: true
  }

  export type SequentialModelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    enabled?: true
    public?: true
    userId?: true
    _all?: true
  }

  export type SequentialModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequentialModel to aggregate.
     */
    where?: SequentialModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequentialModels to fetch.
     */
    orderBy?: SequentialModelOrderByWithRelationInput | SequentialModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SequentialModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequentialModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequentialModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SequentialModels
    **/
    _count?: true | SequentialModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequentialModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequentialModelMaxAggregateInputType
  }

  export type GetSequentialModelAggregateType<T extends SequentialModelAggregateArgs> = {
        [P in keyof T & keyof AggregateSequentialModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequentialModel[P]>
      : GetScalarType<T[P], AggregateSequentialModel[P]>
  }




  export type SequentialModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequentialModelWhereInput
    orderBy?: SequentialModelOrderByWithAggregationInput | SequentialModelOrderByWithAggregationInput[]
    by: SequentialModelScalarFieldEnum[] | SequentialModelScalarFieldEnum
    having?: SequentialModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequentialModelCountAggregateInputType | true
    _min?: SequentialModelMinAggregateInputType
    _max?: SequentialModelMaxAggregateInputType
  }

  export type SequentialModelGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    enabled: boolean
    public: boolean
    userId: string
    _count: SequentialModelCountAggregateOutputType | null
    _min: SequentialModelMinAggregateOutputType | null
    _max: SequentialModelMaxAggregateOutputType | null
  }

  type GetSequentialModelGroupByPayload<T extends SequentialModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SequentialModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SequentialModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SequentialModelGroupByOutputType[P]>
            : GetScalarType<T[P], SequentialModelGroupByOutputType[P]>
        }
      >
    >


  export type SequentialModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enabled?: boolean
    public?: boolean
    userId?: boolean
    layers?: boolean | SequentialModel$layersArgs<ExtArgs>
    versions?: boolean | SequentialModel$versionsArgs<ExtArgs>
    trainings?: boolean | SequentialModel$trainingsArgs<ExtArgs>
    _count?: boolean | SequentialModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequentialModel"]>

  export type SequentialModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enabled?: boolean
    public?: boolean
    userId?: boolean
  }, ExtArgs["result"]["sequentialModel"]>

  export type SequentialModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enabled?: boolean
    public?: boolean
    userId?: boolean
  }, ExtArgs["result"]["sequentialModel"]>

  export type SequentialModelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enabled?: boolean
    public?: boolean
    userId?: boolean
  }

  export type SequentialModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "enabled" | "public" | "userId", ExtArgs["result"]["sequentialModel"]>
  export type SequentialModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layers?: boolean | SequentialModel$layersArgs<ExtArgs>
    versions?: boolean | SequentialModel$versionsArgs<ExtArgs>
    trainings?: boolean | SequentialModel$trainingsArgs<ExtArgs>
    _count?: boolean | SequentialModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SequentialModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SequentialModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SequentialModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SequentialModel"
    objects: {
      layers: Prisma.$LayerPayload<ExtArgs>[]
      versions: Prisma.$ModelVersionPayload<ExtArgs>[]
      trainings: Prisma.$TrainingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      enabled: boolean
      public: boolean
      userId: string
    }, ExtArgs["result"]["sequentialModel"]>
    composites: {}
  }

  type SequentialModelGetPayload<S extends boolean | null | undefined | SequentialModelDefaultArgs> = $Result.GetResult<Prisma.$SequentialModelPayload, S>

  type SequentialModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SequentialModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SequentialModelCountAggregateInputType | true
    }

  export interface SequentialModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SequentialModel'], meta: { name: 'SequentialModel' } }
    /**
     * Find zero or one SequentialModel that matches the filter.
     * @param {SequentialModelFindUniqueArgs} args - Arguments to find a SequentialModel
     * @example
     * // Get one SequentialModel
     * const sequentialModel = await prisma.sequentialModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SequentialModelFindUniqueArgs>(args: SelectSubset<T, SequentialModelFindUniqueArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SequentialModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SequentialModelFindUniqueOrThrowArgs} args - Arguments to find a SequentialModel
     * @example
     * // Get one SequentialModel
     * const sequentialModel = await prisma.sequentialModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SequentialModelFindUniqueOrThrowArgs>(args: SelectSubset<T, SequentialModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequentialModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequentialModelFindFirstArgs} args - Arguments to find a SequentialModel
     * @example
     * // Get one SequentialModel
     * const sequentialModel = await prisma.sequentialModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SequentialModelFindFirstArgs>(args?: SelectSubset<T, SequentialModelFindFirstArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequentialModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequentialModelFindFirstOrThrowArgs} args - Arguments to find a SequentialModel
     * @example
     * // Get one SequentialModel
     * const sequentialModel = await prisma.sequentialModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SequentialModelFindFirstOrThrowArgs>(args?: SelectSubset<T, SequentialModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SequentialModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequentialModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SequentialModels
     * const sequentialModels = await prisma.sequentialModel.findMany()
     * 
     * // Get first 10 SequentialModels
     * const sequentialModels = await prisma.sequentialModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sequentialModelWithIdOnly = await prisma.sequentialModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SequentialModelFindManyArgs>(args?: SelectSubset<T, SequentialModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SequentialModel.
     * @param {SequentialModelCreateArgs} args - Arguments to create a SequentialModel.
     * @example
     * // Create one SequentialModel
     * const SequentialModel = await prisma.sequentialModel.create({
     *   data: {
     *     // ... data to create a SequentialModel
     *   }
     * })
     * 
     */
    create<T extends SequentialModelCreateArgs>(args: SelectSubset<T, SequentialModelCreateArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SequentialModels.
     * @param {SequentialModelCreateManyArgs} args - Arguments to create many SequentialModels.
     * @example
     * // Create many SequentialModels
     * const sequentialModel = await prisma.sequentialModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SequentialModelCreateManyArgs>(args?: SelectSubset<T, SequentialModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SequentialModels and returns the data saved in the database.
     * @param {SequentialModelCreateManyAndReturnArgs} args - Arguments to create many SequentialModels.
     * @example
     * // Create many SequentialModels
     * const sequentialModel = await prisma.sequentialModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SequentialModels and only return the `id`
     * const sequentialModelWithIdOnly = await prisma.sequentialModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SequentialModelCreateManyAndReturnArgs>(args?: SelectSubset<T, SequentialModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SequentialModel.
     * @param {SequentialModelDeleteArgs} args - Arguments to delete one SequentialModel.
     * @example
     * // Delete one SequentialModel
     * const SequentialModel = await prisma.sequentialModel.delete({
     *   where: {
     *     // ... filter to delete one SequentialModel
     *   }
     * })
     * 
     */
    delete<T extends SequentialModelDeleteArgs>(args: SelectSubset<T, SequentialModelDeleteArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SequentialModel.
     * @param {SequentialModelUpdateArgs} args - Arguments to update one SequentialModel.
     * @example
     * // Update one SequentialModel
     * const sequentialModel = await prisma.sequentialModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SequentialModelUpdateArgs>(args: SelectSubset<T, SequentialModelUpdateArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SequentialModels.
     * @param {SequentialModelDeleteManyArgs} args - Arguments to filter SequentialModels to delete.
     * @example
     * // Delete a few SequentialModels
     * const { count } = await prisma.sequentialModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SequentialModelDeleteManyArgs>(args?: SelectSubset<T, SequentialModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequentialModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequentialModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SequentialModels
     * const sequentialModel = await prisma.sequentialModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SequentialModelUpdateManyArgs>(args: SelectSubset<T, SequentialModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequentialModels and returns the data updated in the database.
     * @param {SequentialModelUpdateManyAndReturnArgs} args - Arguments to update many SequentialModels.
     * @example
     * // Update many SequentialModels
     * const sequentialModel = await prisma.sequentialModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SequentialModels and only return the `id`
     * const sequentialModelWithIdOnly = await prisma.sequentialModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SequentialModelUpdateManyAndReturnArgs>(args: SelectSubset<T, SequentialModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SequentialModel.
     * @param {SequentialModelUpsertArgs} args - Arguments to update or create a SequentialModel.
     * @example
     * // Update or create a SequentialModel
     * const sequentialModel = await prisma.sequentialModel.upsert({
     *   create: {
     *     // ... data to create a SequentialModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SequentialModel we want to update
     *   }
     * })
     */
    upsert<T extends SequentialModelUpsertArgs>(args: SelectSubset<T, SequentialModelUpsertArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SequentialModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequentialModelCountArgs} args - Arguments to filter SequentialModels to count.
     * @example
     * // Count the number of SequentialModels
     * const count = await prisma.sequentialModel.count({
     *   where: {
     *     // ... the filter for the SequentialModels we want to count
     *   }
     * })
    **/
    count<T extends SequentialModelCountArgs>(
      args?: Subset<T, SequentialModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequentialModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SequentialModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequentialModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SequentialModelAggregateArgs>(args: Subset<T, SequentialModelAggregateArgs>): Prisma.PrismaPromise<GetSequentialModelAggregateType<T>>

    /**
     * Group by SequentialModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequentialModelGroupByArgs} args - Group by arguments.
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
      T extends SequentialModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequentialModelGroupByArgs['orderBy'] }
        : { orderBy?: SequentialModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SequentialModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequentialModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SequentialModel model
   */
  readonly fields: SequentialModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SequentialModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SequentialModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    layers<T extends SequentialModel$layersArgs<ExtArgs> = {}>(args?: Subset<T, SequentialModel$layersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versions<T extends SequentialModel$versionsArgs<ExtArgs> = {}>(args?: Subset<T, SequentialModel$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trainings<T extends SequentialModel$trainingsArgs<ExtArgs> = {}>(args?: Subset<T, SequentialModel$trainingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SequentialModel model
   */
  interface SequentialModelFieldRefs {
    readonly id: FieldRef<"SequentialModel", 'String'>
    readonly name: FieldRef<"SequentialModel", 'String'>
    readonly description: FieldRef<"SequentialModel", 'String'>
    readonly createdAt: FieldRef<"SequentialModel", 'DateTime'>
    readonly updatedAt: FieldRef<"SequentialModel", 'DateTime'>
    readonly enabled: FieldRef<"SequentialModel", 'Boolean'>
    readonly public: FieldRef<"SequentialModel", 'Boolean'>
    readonly userId: FieldRef<"SequentialModel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SequentialModel findUnique
   */
  export type SequentialModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * Filter, which SequentialModel to fetch.
     */
    where: SequentialModelWhereUniqueInput
  }

  /**
   * SequentialModel findUniqueOrThrow
   */
  export type SequentialModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * Filter, which SequentialModel to fetch.
     */
    where: SequentialModelWhereUniqueInput
  }

  /**
   * SequentialModel findFirst
   */
  export type SequentialModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * Filter, which SequentialModel to fetch.
     */
    where?: SequentialModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequentialModels to fetch.
     */
    orderBy?: SequentialModelOrderByWithRelationInput | SequentialModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequentialModels.
     */
    cursor?: SequentialModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequentialModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequentialModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequentialModels.
     */
    distinct?: SequentialModelScalarFieldEnum | SequentialModelScalarFieldEnum[]
  }

  /**
   * SequentialModel findFirstOrThrow
   */
  export type SequentialModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * Filter, which SequentialModel to fetch.
     */
    where?: SequentialModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequentialModels to fetch.
     */
    orderBy?: SequentialModelOrderByWithRelationInput | SequentialModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequentialModels.
     */
    cursor?: SequentialModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequentialModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequentialModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequentialModels.
     */
    distinct?: SequentialModelScalarFieldEnum | SequentialModelScalarFieldEnum[]
  }

  /**
   * SequentialModel findMany
   */
  export type SequentialModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * Filter, which SequentialModels to fetch.
     */
    where?: SequentialModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequentialModels to fetch.
     */
    orderBy?: SequentialModelOrderByWithRelationInput | SequentialModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SequentialModels.
     */
    cursor?: SequentialModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequentialModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequentialModels.
     */
    skip?: number
    distinct?: SequentialModelScalarFieldEnum | SequentialModelScalarFieldEnum[]
  }

  /**
   * SequentialModel create
   */
  export type SequentialModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * The data needed to create a SequentialModel.
     */
    data: XOR<SequentialModelCreateInput, SequentialModelUncheckedCreateInput>
  }

  /**
   * SequentialModel createMany
   */
  export type SequentialModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SequentialModels.
     */
    data: SequentialModelCreateManyInput | SequentialModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SequentialModel createManyAndReturn
   */
  export type SequentialModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * The data used to create many SequentialModels.
     */
    data: SequentialModelCreateManyInput | SequentialModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SequentialModel update
   */
  export type SequentialModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * The data needed to update a SequentialModel.
     */
    data: XOR<SequentialModelUpdateInput, SequentialModelUncheckedUpdateInput>
    /**
     * Choose, which SequentialModel to update.
     */
    where: SequentialModelWhereUniqueInput
  }

  /**
   * SequentialModel updateMany
   */
  export type SequentialModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SequentialModels.
     */
    data: XOR<SequentialModelUpdateManyMutationInput, SequentialModelUncheckedUpdateManyInput>
    /**
     * Filter which SequentialModels to update
     */
    where?: SequentialModelWhereInput
    /**
     * Limit how many SequentialModels to update.
     */
    limit?: number
  }

  /**
   * SequentialModel updateManyAndReturn
   */
  export type SequentialModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * The data used to update SequentialModels.
     */
    data: XOR<SequentialModelUpdateManyMutationInput, SequentialModelUncheckedUpdateManyInput>
    /**
     * Filter which SequentialModels to update
     */
    where?: SequentialModelWhereInput
    /**
     * Limit how many SequentialModels to update.
     */
    limit?: number
  }

  /**
   * SequentialModel upsert
   */
  export type SequentialModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * The filter to search for the SequentialModel to update in case it exists.
     */
    where: SequentialModelWhereUniqueInput
    /**
     * In case the SequentialModel found by the `where` argument doesn't exist, create a new SequentialModel with this data.
     */
    create: XOR<SequentialModelCreateInput, SequentialModelUncheckedCreateInput>
    /**
     * In case the SequentialModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SequentialModelUpdateInput, SequentialModelUncheckedUpdateInput>
  }

  /**
   * SequentialModel delete
   */
  export type SequentialModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
    /**
     * Filter which SequentialModel to delete.
     */
    where: SequentialModelWhereUniqueInput
  }

  /**
   * SequentialModel deleteMany
   */
  export type SequentialModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequentialModels to delete
     */
    where?: SequentialModelWhereInput
    /**
     * Limit how many SequentialModels to delete.
     */
    limit?: number
  }

  /**
   * SequentialModel.layers
   */
  export type SequentialModel$layersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    where?: LayerWhereInput
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    cursor?: LayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * SequentialModel.versions
   */
  export type SequentialModel$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    where?: ModelVersionWhereInput
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    cursor?: ModelVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelVersionScalarFieldEnum | ModelVersionScalarFieldEnum[]
  }

  /**
   * SequentialModel.trainings
   */
  export type SequentialModel$trainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    where?: TrainingSessionWhereInput
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    cursor?: TrainingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingSessionScalarFieldEnum | TrainingSessionScalarFieldEnum[]
  }

  /**
   * SequentialModel without action
   */
  export type SequentialModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequentialModel
     */
    select?: SequentialModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequentialModel
     */
    omit?: SequentialModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequentialModelInclude<ExtArgs> | null
  }


  /**
   * Model Layer
   */

  export type AggregateLayer = {
    _count: LayerCountAggregateOutputType | null
    _avg: LayerAvgAggregateOutputType | null
    _sum: LayerSumAggregateOutputType | null
    _min: LayerMinAggregateOutputType | null
    _max: LayerMaxAggregateOutputType | null
  }

  export type LayerAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type LayerSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type LayerMinAggregateOutputType = {
    id: number | null
    modelId: string | null
    type: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayerMaxAggregateOutputType = {
    id: number | null
    modelId: string | null
    type: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayerCountAggregateOutputType = {
    id: number
    modelId: number
    type: number
    config: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LayerAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type LayerSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type LayerMinAggregateInputType = {
    id?: true
    modelId?: true
    type?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayerMaxAggregateInputType = {
    id?: true
    modelId?: true
    type?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayerCountAggregateInputType = {
    id?: true
    modelId?: true
    type?: true
    config?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layer to aggregate.
     */
    where?: LayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layers to fetch.
     */
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Layers
    **/
    _count?: true | LayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayerMaxAggregateInputType
  }

  export type GetLayerAggregateType<T extends LayerAggregateArgs> = {
        [P in keyof T & keyof AggregateLayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayer[P]>
      : GetScalarType<T[P], AggregateLayer[P]>
  }




  export type LayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerWhereInput
    orderBy?: LayerOrderByWithAggregationInput | LayerOrderByWithAggregationInput[]
    by: LayerScalarFieldEnum[] | LayerScalarFieldEnum
    having?: LayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayerCountAggregateInputType | true
    _avg?: LayerAvgAggregateInputType
    _sum?: LayerSumAggregateInputType
    _min?: LayerMinAggregateInputType
    _max?: LayerMaxAggregateInputType
  }

  export type LayerGroupByOutputType = {
    id: number
    modelId: string
    type: string
    config: JsonValue
    order: number
    createdAt: Date
    updatedAt: Date
    _count: LayerCountAggregateOutputType | null
    _avg: LayerAvgAggregateOutputType | null
    _sum: LayerSumAggregateOutputType | null
    _min: LayerMinAggregateOutputType | null
    _max: LayerMaxAggregateOutputType | null
  }

  type GetLayerGroupByPayload<T extends LayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayerGroupByOutputType[P]>
            : GetScalarType<T[P], LayerGroupByOutputType[P]>
        }
      >
    >


  export type LayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    type?: boolean
    config?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sequentialModel?: boolean | SequentialModelDefaultArgs<ExtArgs>
    fromConnections?: boolean | Layer$fromConnectionsArgs<ExtArgs>
    toConnections?: boolean | Layer$toConnectionsArgs<ExtArgs>
    _count?: boolean | LayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layer"]>

  export type LayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    type?: boolean
    config?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sequentialModel?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layer"]>

  export type LayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    type?: boolean
    config?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sequentialModel?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layer"]>

  export type LayerSelectScalar = {
    id?: boolean
    modelId?: boolean
    type?: boolean
    config?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelId" | "type" | "config" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["layer"]>
  export type LayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequentialModel?: boolean | SequentialModelDefaultArgs<ExtArgs>
    fromConnections?: boolean | Layer$fromConnectionsArgs<ExtArgs>
    toConnections?: boolean | Layer$toConnectionsArgs<ExtArgs>
    _count?: boolean | LayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequentialModel?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }
  export type LayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequentialModel?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }

  export type $LayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Layer"
    objects: {
      sequentialModel: Prisma.$SequentialModelPayload<ExtArgs>
      fromConnections: Prisma.$LayerConnectionPayload<ExtArgs>[]
      toConnections: Prisma.$LayerConnectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelId: string
      type: string
      config: Prisma.JsonValue
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["layer"]>
    composites: {}
  }

  type LayerGetPayload<S extends boolean | null | undefined | LayerDefaultArgs> = $Result.GetResult<Prisma.$LayerPayload, S>

  type LayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayerCountAggregateInputType | true
    }

  export interface LayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Layer'], meta: { name: 'Layer' } }
    /**
     * Find zero or one Layer that matches the filter.
     * @param {LayerFindUniqueArgs} args - Arguments to find a Layer
     * @example
     * // Get one Layer
     * const layer = await prisma.layer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayerFindUniqueArgs>(args: SelectSubset<T, LayerFindUniqueArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Layer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayerFindUniqueOrThrowArgs} args - Arguments to find a Layer
     * @example
     * // Get one Layer
     * const layer = await prisma.layer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayerFindUniqueOrThrowArgs>(args: SelectSubset<T, LayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerFindFirstArgs} args - Arguments to find a Layer
     * @example
     * // Get one Layer
     * const layer = await prisma.layer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayerFindFirstArgs>(args?: SelectSubset<T, LayerFindFirstArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerFindFirstOrThrowArgs} args - Arguments to find a Layer
     * @example
     * // Get one Layer
     * const layer = await prisma.layer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayerFindFirstOrThrowArgs>(args?: SelectSubset<T, LayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Layers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Layers
     * const layers = await prisma.layer.findMany()
     * 
     * // Get first 10 Layers
     * const layers = await prisma.layer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layerWithIdOnly = await prisma.layer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayerFindManyArgs>(args?: SelectSubset<T, LayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Layer.
     * @param {LayerCreateArgs} args - Arguments to create a Layer.
     * @example
     * // Create one Layer
     * const Layer = await prisma.layer.create({
     *   data: {
     *     // ... data to create a Layer
     *   }
     * })
     * 
     */
    create<T extends LayerCreateArgs>(args: SelectSubset<T, LayerCreateArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Layers.
     * @param {LayerCreateManyArgs} args - Arguments to create many Layers.
     * @example
     * // Create many Layers
     * const layer = await prisma.layer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayerCreateManyArgs>(args?: SelectSubset<T, LayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Layers and returns the data saved in the database.
     * @param {LayerCreateManyAndReturnArgs} args - Arguments to create many Layers.
     * @example
     * // Create many Layers
     * const layer = await prisma.layer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Layers and only return the `id`
     * const layerWithIdOnly = await prisma.layer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayerCreateManyAndReturnArgs>(args?: SelectSubset<T, LayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Layer.
     * @param {LayerDeleteArgs} args - Arguments to delete one Layer.
     * @example
     * // Delete one Layer
     * const Layer = await prisma.layer.delete({
     *   where: {
     *     // ... filter to delete one Layer
     *   }
     * })
     * 
     */
    delete<T extends LayerDeleteArgs>(args: SelectSubset<T, LayerDeleteArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Layer.
     * @param {LayerUpdateArgs} args - Arguments to update one Layer.
     * @example
     * // Update one Layer
     * const layer = await prisma.layer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayerUpdateArgs>(args: SelectSubset<T, LayerUpdateArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Layers.
     * @param {LayerDeleteManyArgs} args - Arguments to filter Layers to delete.
     * @example
     * // Delete a few Layers
     * const { count } = await prisma.layer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayerDeleteManyArgs>(args?: SelectSubset<T, LayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Layers
     * const layer = await prisma.layer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayerUpdateManyArgs>(args: SelectSubset<T, LayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layers and returns the data updated in the database.
     * @param {LayerUpdateManyAndReturnArgs} args - Arguments to update many Layers.
     * @example
     * // Update many Layers
     * const layer = await prisma.layer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Layers and only return the `id`
     * const layerWithIdOnly = await prisma.layer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LayerUpdateManyAndReturnArgs>(args: SelectSubset<T, LayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Layer.
     * @param {LayerUpsertArgs} args - Arguments to update or create a Layer.
     * @example
     * // Update or create a Layer
     * const layer = await prisma.layer.upsert({
     *   create: {
     *     // ... data to create a Layer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Layer we want to update
     *   }
     * })
     */
    upsert<T extends LayerUpsertArgs>(args: SelectSubset<T, LayerUpsertArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Layers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerCountArgs} args - Arguments to filter Layers to count.
     * @example
     * // Count the number of Layers
     * const count = await prisma.layer.count({
     *   where: {
     *     // ... the filter for the Layers we want to count
     *   }
     * })
    **/
    count<T extends LayerCountArgs>(
      args?: Subset<T, LayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Layer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayerAggregateArgs>(args: Subset<T, LayerAggregateArgs>): Prisma.PrismaPromise<GetLayerAggregateType<T>>

    /**
     * Group by Layer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupByArgs} args - Group by arguments.
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
      T extends LayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayerGroupByArgs['orderBy'] }
        : { orderBy?: LayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Layer model
   */
  readonly fields: LayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Layer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sequentialModel<T extends SequentialModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SequentialModelDefaultArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromConnections<T extends Layer$fromConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, Layer$fromConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toConnections<T extends Layer$toConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, Layer$toConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Layer model
   */
  interface LayerFieldRefs {
    readonly id: FieldRef<"Layer", 'Int'>
    readonly modelId: FieldRef<"Layer", 'String'>
    readonly type: FieldRef<"Layer", 'String'>
    readonly config: FieldRef<"Layer", 'Json'>
    readonly order: FieldRef<"Layer", 'Int'>
    readonly createdAt: FieldRef<"Layer", 'DateTime'>
    readonly updatedAt: FieldRef<"Layer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Layer findUnique
   */
  export type LayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layer to fetch.
     */
    where: LayerWhereUniqueInput
  }

  /**
   * Layer findUniqueOrThrow
   */
  export type LayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layer to fetch.
     */
    where: LayerWhereUniqueInput
  }

  /**
   * Layer findFirst
   */
  export type LayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layer to fetch.
     */
    where?: LayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layers to fetch.
     */
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layers.
     */
    cursor?: LayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layers.
     */
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * Layer findFirstOrThrow
   */
  export type LayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layer to fetch.
     */
    where?: LayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layers to fetch.
     */
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layers.
     */
    cursor?: LayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layers.
     */
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * Layer findMany
   */
  export type LayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layers to fetch.
     */
    where?: LayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layers to fetch.
     */
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Layers.
     */
    cursor?: LayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layers.
     */
    skip?: number
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * Layer create
   */
  export type LayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Layer.
     */
    data: XOR<LayerCreateInput, LayerUncheckedCreateInput>
  }

  /**
   * Layer createMany
   */
  export type LayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Layers.
     */
    data: LayerCreateManyInput | LayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Layer createManyAndReturn
   */
  export type LayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * The data used to create many Layers.
     */
    data: LayerCreateManyInput | LayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Layer update
   */
  export type LayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Layer.
     */
    data: XOR<LayerUpdateInput, LayerUncheckedUpdateInput>
    /**
     * Choose, which Layer to update.
     */
    where: LayerWhereUniqueInput
  }

  /**
   * Layer updateMany
   */
  export type LayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Layers.
     */
    data: XOR<LayerUpdateManyMutationInput, LayerUncheckedUpdateManyInput>
    /**
     * Filter which Layers to update
     */
    where?: LayerWhereInput
    /**
     * Limit how many Layers to update.
     */
    limit?: number
  }

  /**
   * Layer updateManyAndReturn
   */
  export type LayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * The data used to update Layers.
     */
    data: XOR<LayerUpdateManyMutationInput, LayerUncheckedUpdateManyInput>
    /**
     * Filter which Layers to update
     */
    where?: LayerWhereInput
    /**
     * Limit how many Layers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Layer upsert
   */
  export type LayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Layer to update in case it exists.
     */
    where: LayerWhereUniqueInput
    /**
     * In case the Layer found by the `where` argument doesn't exist, create a new Layer with this data.
     */
    create: XOR<LayerCreateInput, LayerUncheckedCreateInput>
    /**
     * In case the Layer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayerUpdateInput, LayerUncheckedUpdateInput>
  }

  /**
   * Layer delete
   */
  export type LayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter which Layer to delete.
     */
    where: LayerWhereUniqueInput
  }

  /**
   * Layer deleteMany
   */
  export type LayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layers to delete
     */
    where?: LayerWhereInput
    /**
     * Limit how many Layers to delete.
     */
    limit?: number
  }

  /**
   * Layer.fromConnections
   */
  export type Layer$fromConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    where?: LayerConnectionWhereInput
    orderBy?: LayerConnectionOrderByWithRelationInput | LayerConnectionOrderByWithRelationInput[]
    cursor?: LayerConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayerConnectionScalarFieldEnum | LayerConnectionScalarFieldEnum[]
  }

  /**
   * Layer.toConnections
   */
  export type Layer$toConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    where?: LayerConnectionWhereInput
    orderBy?: LayerConnectionOrderByWithRelationInput | LayerConnectionOrderByWithRelationInput[]
    cursor?: LayerConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayerConnectionScalarFieldEnum | LayerConnectionScalarFieldEnum[]
  }

  /**
   * Layer without action
   */
  export type LayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
  }


  /**
   * Model LayerConnection
   */

  export type AggregateLayerConnection = {
    _count: LayerConnectionCountAggregateOutputType | null
    _avg: LayerConnectionAvgAggregateOutputType | null
    _sum: LayerConnectionSumAggregateOutputType | null
    _min: LayerConnectionMinAggregateOutputType | null
    _max: LayerConnectionMaxAggregateOutputType | null
  }

  export type LayerConnectionAvgAggregateOutputType = {
    id: number | null
    fromLayerId: number | null
    toLayerId: number | null
  }

  export type LayerConnectionSumAggregateOutputType = {
    id: number | null
    fromLayerId: number | null
    toLayerId: number | null
  }

  export type LayerConnectionMinAggregateOutputType = {
    id: number | null
    fromLayerId: number | null
    toLayerId: number | null
  }

  export type LayerConnectionMaxAggregateOutputType = {
    id: number | null
    fromLayerId: number | null
    toLayerId: number | null
  }

  export type LayerConnectionCountAggregateOutputType = {
    id: number
    fromLayerId: number
    toLayerId: number
    _all: number
  }


  export type LayerConnectionAvgAggregateInputType = {
    id?: true
    fromLayerId?: true
    toLayerId?: true
  }

  export type LayerConnectionSumAggregateInputType = {
    id?: true
    fromLayerId?: true
    toLayerId?: true
  }

  export type LayerConnectionMinAggregateInputType = {
    id?: true
    fromLayerId?: true
    toLayerId?: true
  }

  export type LayerConnectionMaxAggregateInputType = {
    id?: true
    fromLayerId?: true
    toLayerId?: true
  }

  export type LayerConnectionCountAggregateInputType = {
    id?: true
    fromLayerId?: true
    toLayerId?: true
    _all?: true
  }

  export type LayerConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerConnection to aggregate.
     */
    where?: LayerConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerConnections to fetch.
     */
    orderBy?: LayerConnectionOrderByWithRelationInput | LayerConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayerConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayerConnections
    **/
    _count?: true | LayerConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayerConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayerConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayerConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayerConnectionMaxAggregateInputType
  }

  export type GetLayerConnectionAggregateType<T extends LayerConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateLayerConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayerConnection[P]>
      : GetScalarType<T[P], AggregateLayerConnection[P]>
  }




  export type LayerConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerConnectionWhereInput
    orderBy?: LayerConnectionOrderByWithAggregationInput | LayerConnectionOrderByWithAggregationInput[]
    by: LayerConnectionScalarFieldEnum[] | LayerConnectionScalarFieldEnum
    having?: LayerConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayerConnectionCountAggregateInputType | true
    _avg?: LayerConnectionAvgAggregateInputType
    _sum?: LayerConnectionSumAggregateInputType
    _min?: LayerConnectionMinAggregateInputType
    _max?: LayerConnectionMaxAggregateInputType
  }

  export type LayerConnectionGroupByOutputType = {
    id: number
    fromLayerId: number
    toLayerId: number
    _count: LayerConnectionCountAggregateOutputType | null
    _avg: LayerConnectionAvgAggregateOutputType | null
    _sum: LayerConnectionSumAggregateOutputType | null
    _min: LayerConnectionMinAggregateOutputType | null
    _max: LayerConnectionMaxAggregateOutputType | null
  }

  type GetLayerConnectionGroupByPayload<T extends LayerConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayerConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayerConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayerConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], LayerConnectionGroupByOutputType[P]>
        }
      >
    >


  export type LayerConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromLayerId?: boolean
    toLayerId?: boolean
    fromLayer?: boolean | LayerDefaultArgs<ExtArgs>
    toLayer?: boolean | LayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layerConnection"]>

  export type LayerConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromLayerId?: boolean
    toLayerId?: boolean
    fromLayer?: boolean | LayerDefaultArgs<ExtArgs>
    toLayer?: boolean | LayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layerConnection"]>

  export type LayerConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromLayerId?: boolean
    toLayerId?: boolean
    fromLayer?: boolean | LayerDefaultArgs<ExtArgs>
    toLayer?: boolean | LayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layerConnection"]>

  export type LayerConnectionSelectScalar = {
    id?: boolean
    fromLayerId?: boolean
    toLayerId?: boolean
  }

  export type LayerConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromLayerId" | "toLayerId", ExtArgs["result"]["layerConnection"]>
  export type LayerConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromLayer?: boolean | LayerDefaultArgs<ExtArgs>
    toLayer?: boolean | LayerDefaultArgs<ExtArgs>
  }
  export type LayerConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromLayer?: boolean | LayerDefaultArgs<ExtArgs>
    toLayer?: boolean | LayerDefaultArgs<ExtArgs>
  }
  export type LayerConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromLayer?: boolean | LayerDefaultArgs<ExtArgs>
    toLayer?: boolean | LayerDefaultArgs<ExtArgs>
  }

  export type $LayerConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayerConnection"
    objects: {
      fromLayer: Prisma.$LayerPayload<ExtArgs>
      toLayer: Prisma.$LayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromLayerId: number
      toLayerId: number
    }, ExtArgs["result"]["layerConnection"]>
    composites: {}
  }

  type LayerConnectionGetPayload<S extends boolean | null | undefined | LayerConnectionDefaultArgs> = $Result.GetResult<Prisma.$LayerConnectionPayload, S>

  type LayerConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayerConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayerConnectionCountAggregateInputType | true
    }

  export interface LayerConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayerConnection'], meta: { name: 'LayerConnection' } }
    /**
     * Find zero or one LayerConnection that matches the filter.
     * @param {LayerConnectionFindUniqueArgs} args - Arguments to find a LayerConnection
     * @example
     * // Get one LayerConnection
     * const layerConnection = await prisma.layerConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayerConnectionFindUniqueArgs>(args: SelectSubset<T, LayerConnectionFindUniqueArgs<ExtArgs>>): Prisma__LayerConnectionClient<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LayerConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayerConnectionFindUniqueOrThrowArgs} args - Arguments to find a LayerConnection
     * @example
     * // Get one LayerConnection
     * const layerConnection = await prisma.layerConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayerConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, LayerConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayerConnectionClient<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayerConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerConnectionFindFirstArgs} args - Arguments to find a LayerConnection
     * @example
     * // Get one LayerConnection
     * const layerConnection = await prisma.layerConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayerConnectionFindFirstArgs>(args?: SelectSubset<T, LayerConnectionFindFirstArgs<ExtArgs>>): Prisma__LayerConnectionClient<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayerConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerConnectionFindFirstOrThrowArgs} args - Arguments to find a LayerConnection
     * @example
     * // Get one LayerConnection
     * const layerConnection = await prisma.layerConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayerConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, LayerConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayerConnectionClient<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LayerConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayerConnections
     * const layerConnections = await prisma.layerConnection.findMany()
     * 
     * // Get first 10 LayerConnections
     * const layerConnections = await prisma.layerConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layerConnectionWithIdOnly = await prisma.layerConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayerConnectionFindManyArgs>(args?: SelectSubset<T, LayerConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LayerConnection.
     * @param {LayerConnectionCreateArgs} args - Arguments to create a LayerConnection.
     * @example
     * // Create one LayerConnection
     * const LayerConnection = await prisma.layerConnection.create({
     *   data: {
     *     // ... data to create a LayerConnection
     *   }
     * })
     * 
     */
    create<T extends LayerConnectionCreateArgs>(args: SelectSubset<T, LayerConnectionCreateArgs<ExtArgs>>): Prisma__LayerConnectionClient<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LayerConnections.
     * @param {LayerConnectionCreateManyArgs} args - Arguments to create many LayerConnections.
     * @example
     * // Create many LayerConnections
     * const layerConnection = await prisma.layerConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayerConnectionCreateManyArgs>(args?: SelectSubset<T, LayerConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LayerConnections and returns the data saved in the database.
     * @param {LayerConnectionCreateManyAndReturnArgs} args - Arguments to create many LayerConnections.
     * @example
     * // Create many LayerConnections
     * const layerConnection = await prisma.layerConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LayerConnections and only return the `id`
     * const layerConnectionWithIdOnly = await prisma.layerConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayerConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, LayerConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LayerConnection.
     * @param {LayerConnectionDeleteArgs} args - Arguments to delete one LayerConnection.
     * @example
     * // Delete one LayerConnection
     * const LayerConnection = await prisma.layerConnection.delete({
     *   where: {
     *     // ... filter to delete one LayerConnection
     *   }
     * })
     * 
     */
    delete<T extends LayerConnectionDeleteArgs>(args: SelectSubset<T, LayerConnectionDeleteArgs<ExtArgs>>): Prisma__LayerConnectionClient<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LayerConnection.
     * @param {LayerConnectionUpdateArgs} args - Arguments to update one LayerConnection.
     * @example
     * // Update one LayerConnection
     * const layerConnection = await prisma.layerConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayerConnectionUpdateArgs>(args: SelectSubset<T, LayerConnectionUpdateArgs<ExtArgs>>): Prisma__LayerConnectionClient<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LayerConnections.
     * @param {LayerConnectionDeleteManyArgs} args - Arguments to filter LayerConnections to delete.
     * @example
     * // Delete a few LayerConnections
     * const { count } = await prisma.layerConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayerConnectionDeleteManyArgs>(args?: SelectSubset<T, LayerConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayerConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayerConnections
     * const layerConnection = await prisma.layerConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayerConnectionUpdateManyArgs>(args: SelectSubset<T, LayerConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayerConnections and returns the data updated in the database.
     * @param {LayerConnectionUpdateManyAndReturnArgs} args - Arguments to update many LayerConnections.
     * @example
     * // Update many LayerConnections
     * const layerConnection = await prisma.layerConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LayerConnections and only return the `id`
     * const layerConnectionWithIdOnly = await prisma.layerConnection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LayerConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, LayerConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LayerConnection.
     * @param {LayerConnectionUpsertArgs} args - Arguments to update or create a LayerConnection.
     * @example
     * // Update or create a LayerConnection
     * const layerConnection = await prisma.layerConnection.upsert({
     *   create: {
     *     // ... data to create a LayerConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayerConnection we want to update
     *   }
     * })
     */
    upsert<T extends LayerConnectionUpsertArgs>(args: SelectSubset<T, LayerConnectionUpsertArgs<ExtArgs>>): Prisma__LayerConnectionClient<$Result.GetResult<Prisma.$LayerConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LayerConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerConnectionCountArgs} args - Arguments to filter LayerConnections to count.
     * @example
     * // Count the number of LayerConnections
     * const count = await prisma.layerConnection.count({
     *   where: {
     *     // ... the filter for the LayerConnections we want to count
     *   }
     * })
    **/
    count<T extends LayerConnectionCountArgs>(
      args?: Subset<T, LayerConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayerConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayerConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayerConnectionAggregateArgs>(args: Subset<T, LayerConnectionAggregateArgs>): Prisma.PrismaPromise<GetLayerConnectionAggregateType<T>>

    /**
     * Group by LayerConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerConnectionGroupByArgs} args - Group by arguments.
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
      T extends LayerConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayerConnectionGroupByArgs['orderBy'] }
        : { orderBy?: LayerConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayerConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayerConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayerConnection model
   */
  readonly fields: LayerConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayerConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayerConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromLayer<T extends LayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayerDefaultArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toLayer<T extends LayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayerDefaultArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LayerConnection model
   */
  interface LayerConnectionFieldRefs {
    readonly id: FieldRef<"LayerConnection", 'Int'>
    readonly fromLayerId: FieldRef<"LayerConnection", 'Int'>
    readonly toLayerId: FieldRef<"LayerConnection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LayerConnection findUnique
   */
  export type LayerConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerConnection to fetch.
     */
    where: LayerConnectionWhereUniqueInput
  }

  /**
   * LayerConnection findUniqueOrThrow
   */
  export type LayerConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerConnection to fetch.
     */
    where: LayerConnectionWhereUniqueInput
  }

  /**
   * LayerConnection findFirst
   */
  export type LayerConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerConnection to fetch.
     */
    where?: LayerConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerConnections to fetch.
     */
    orderBy?: LayerConnectionOrderByWithRelationInput | LayerConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerConnections.
     */
    cursor?: LayerConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerConnections.
     */
    distinct?: LayerConnectionScalarFieldEnum | LayerConnectionScalarFieldEnum[]
  }

  /**
   * LayerConnection findFirstOrThrow
   */
  export type LayerConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerConnection to fetch.
     */
    where?: LayerConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerConnections to fetch.
     */
    orderBy?: LayerConnectionOrderByWithRelationInput | LayerConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerConnections.
     */
    cursor?: LayerConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerConnections.
     */
    distinct?: LayerConnectionScalarFieldEnum | LayerConnectionScalarFieldEnum[]
  }

  /**
   * LayerConnection findMany
   */
  export type LayerConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * Filter, which LayerConnections to fetch.
     */
    where?: LayerConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerConnections to fetch.
     */
    orderBy?: LayerConnectionOrderByWithRelationInput | LayerConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayerConnections.
     */
    cursor?: LayerConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerConnections.
     */
    skip?: number
    distinct?: LayerConnectionScalarFieldEnum | LayerConnectionScalarFieldEnum[]
  }

  /**
   * LayerConnection create
   */
  export type LayerConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a LayerConnection.
     */
    data: XOR<LayerConnectionCreateInput, LayerConnectionUncheckedCreateInput>
  }

  /**
   * LayerConnection createMany
   */
  export type LayerConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayerConnections.
     */
    data: LayerConnectionCreateManyInput | LayerConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LayerConnection createManyAndReturn
   */
  export type LayerConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many LayerConnections.
     */
    data: LayerConnectionCreateManyInput | LayerConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LayerConnection update
   */
  export type LayerConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a LayerConnection.
     */
    data: XOR<LayerConnectionUpdateInput, LayerConnectionUncheckedUpdateInput>
    /**
     * Choose, which LayerConnection to update.
     */
    where: LayerConnectionWhereUniqueInput
  }

  /**
   * LayerConnection updateMany
   */
  export type LayerConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayerConnections.
     */
    data: XOR<LayerConnectionUpdateManyMutationInput, LayerConnectionUncheckedUpdateManyInput>
    /**
     * Filter which LayerConnections to update
     */
    where?: LayerConnectionWhereInput
    /**
     * Limit how many LayerConnections to update.
     */
    limit?: number
  }

  /**
   * LayerConnection updateManyAndReturn
   */
  export type LayerConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * The data used to update LayerConnections.
     */
    data: XOR<LayerConnectionUpdateManyMutationInput, LayerConnectionUncheckedUpdateManyInput>
    /**
     * Filter which LayerConnections to update
     */
    where?: LayerConnectionWhereInput
    /**
     * Limit how many LayerConnections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LayerConnection upsert
   */
  export type LayerConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the LayerConnection to update in case it exists.
     */
    where: LayerConnectionWhereUniqueInput
    /**
     * In case the LayerConnection found by the `where` argument doesn't exist, create a new LayerConnection with this data.
     */
    create: XOR<LayerConnectionCreateInput, LayerConnectionUncheckedCreateInput>
    /**
     * In case the LayerConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayerConnectionUpdateInput, LayerConnectionUncheckedUpdateInput>
  }

  /**
   * LayerConnection delete
   */
  export type LayerConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
    /**
     * Filter which LayerConnection to delete.
     */
    where: LayerConnectionWhereUniqueInput
  }

  /**
   * LayerConnection deleteMany
   */
  export type LayerConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerConnections to delete
     */
    where?: LayerConnectionWhereInput
    /**
     * Limit how many LayerConnections to delete.
     */
    limit?: number
  }

  /**
   * LayerConnection without action
   */
  export type LayerConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerConnection
     */
    select?: LayerConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerConnection
     */
    omit?: LayerConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerConnectionInclude<ExtArgs> | null
  }


  /**
   * Model ModelVersion
   */

  export type AggregateModelVersion = {
    _count: ModelVersionCountAggregateOutputType | null
    _avg: ModelVersionAvgAggregateOutputType | null
    _sum: ModelVersionSumAggregateOutputType | null
    _min: ModelVersionMinAggregateOutputType | null
    _max: ModelVersionMaxAggregateOutputType | null
  }

  export type ModelVersionAvgAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type ModelVersionSumAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type ModelVersionMinAggregateOutputType = {
    id: number | null
    modelId: string | null
    version: number | null
    createdAt: Date | null
  }

  export type ModelVersionMaxAggregateOutputType = {
    id: number | null
    modelId: string | null
    version: number | null
    createdAt: Date | null
  }

  export type ModelVersionCountAggregateOutputType = {
    id: number
    modelId: number
    version: number
    snapshot: number
    createdAt: number
    _all: number
  }


  export type ModelVersionAvgAggregateInputType = {
    id?: true
    version?: true
  }

  export type ModelVersionSumAggregateInputType = {
    id?: true
    version?: true
  }

  export type ModelVersionMinAggregateInputType = {
    id?: true
    modelId?: true
    version?: true
    createdAt?: true
  }

  export type ModelVersionMaxAggregateInputType = {
    id?: true
    modelId?: true
    version?: true
    createdAt?: true
  }

  export type ModelVersionCountAggregateInputType = {
    id?: true
    modelId?: true
    version?: true
    snapshot?: true
    createdAt?: true
    _all?: true
  }

  export type ModelVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelVersion to aggregate.
     */
    where?: ModelVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVersions to fetch.
     */
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelVersions
    **/
    _count?: true | ModelVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelVersionMaxAggregateInputType
  }

  export type GetModelVersionAggregateType<T extends ModelVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateModelVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelVersion[P]>
      : GetScalarType<T[P], AggregateModelVersion[P]>
  }




  export type ModelVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelVersionWhereInput
    orderBy?: ModelVersionOrderByWithAggregationInput | ModelVersionOrderByWithAggregationInput[]
    by: ModelVersionScalarFieldEnum[] | ModelVersionScalarFieldEnum
    having?: ModelVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelVersionCountAggregateInputType | true
    _avg?: ModelVersionAvgAggregateInputType
    _sum?: ModelVersionSumAggregateInputType
    _min?: ModelVersionMinAggregateInputType
    _max?: ModelVersionMaxAggregateInputType
  }

  export type ModelVersionGroupByOutputType = {
    id: number
    modelId: string
    version: number
    snapshot: JsonValue
    createdAt: Date
    _count: ModelVersionCountAggregateOutputType | null
    _avg: ModelVersionAvgAggregateOutputType | null
    _sum: ModelVersionSumAggregateOutputType | null
    _min: ModelVersionMinAggregateOutputType | null
    _max: ModelVersionMaxAggregateOutputType | null
  }

  type GetModelVersionGroupByPayload<T extends ModelVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ModelVersionGroupByOutputType[P]>
        }
      >
    >


  export type ModelVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    version?: boolean
    snapshot?: boolean
    createdAt?: boolean
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelVersion"]>

  export type ModelVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    version?: boolean
    snapshot?: boolean
    createdAt?: boolean
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelVersion"]>

  export type ModelVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    version?: boolean
    snapshot?: boolean
    createdAt?: boolean
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelVersion"]>

  export type ModelVersionSelectScalar = {
    id?: boolean
    modelId?: boolean
    version?: boolean
    snapshot?: boolean
    createdAt?: boolean
  }

  export type ModelVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelId" | "version" | "snapshot" | "createdAt", ExtArgs["result"]["modelVersion"]>
  export type ModelVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }
  export type ModelVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }
  export type ModelVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }

  export type $ModelVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelVersion"
    objects: {
      model: Prisma.$SequentialModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelId: string
      version: number
      snapshot: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["modelVersion"]>
    composites: {}
  }

  type ModelVersionGetPayload<S extends boolean | null | undefined | ModelVersionDefaultArgs> = $Result.GetResult<Prisma.$ModelVersionPayload, S>

  type ModelVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelVersionCountAggregateInputType | true
    }

  export interface ModelVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelVersion'], meta: { name: 'ModelVersion' } }
    /**
     * Find zero or one ModelVersion that matches the filter.
     * @param {ModelVersionFindUniqueArgs} args - Arguments to find a ModelVersion
     * @example
     * // Get one ModelVersion
     * const modelVersion = await prisma.modelVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelVersionFindUniqueArgs>(args: SelectSubset<T, ModelVersionFindUniqueArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelVersionFindUniqueOrThrowArgs} args - Arguments to find a ModelVersion
     * @example
     * // Get one ModelVersion
     * const modelVersion = await prisma.modelVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionFindFirstArgs} args - Arguments to find a ModelVersion
     * @example
     * // Get one ModelVersion
     * const modelVersion = await prisma.modelVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelVersionFindFirstArgs>(args?: SelectSubset<T, ModelVersionFindFirstArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionFindFirstOrThrowArgs} args - Arguments to find a ModelVersion
     * @example
     * // Get one ModelVersion
     * const modelVersion = await prisma.modelVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelVersions
     * const modelVersions = await prisma.modelVersion.findMany()
     * 
     * // Get first 10 ModelVersions
     * const modelVersions = await prisma.modelVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelVersionWithIdOnly = await prisma.modelVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelVersionFindManyArgs>(args?: SelectSubset<T, ModelVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelVersion.
     * @param {ModelVersionCreateArgs} args - Arguments to create a ModelVersion.
     * @example
     * // Create one ModelVersion
     * const ModelVersion = await prisma.modelVersion.create({
     *   data: {
     *     // ... data to create a ModelVersion
     *   }
     * })
     * 
     */
    create<T extends ModelVersionCreateArgs>(args: SelectSubset<T, ModelVersionCreateArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelVersions.
     * @param {ModelVersionCreateManyArgs} args - Arguments to create many ModelVersions.
     * @example
     * // Create many ModelVersions
     * const modelVersion = await prisma.modelVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelVersionCreateManyArgs>(args?: SelectSubset<T, ModelVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelVersions and returns the data saved in the database.
     * @param {ModelVersionCreateManyAndReturnArgs} args - Arguments to create many ModelVersions.
     * @example
     * // Create many ModelVersions
     * const modelVersion = await prisma.modelVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelVersions and only return the `id`
     * const modelVersionWithIdOnly = await prisma.modelVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModelVersion.
     * @param {ModelVersionDeleteArgs} args - Arguments to delete one ModelVersion.
     * @example
     * // Delete one ModelVersion
     * const ModelVersion = await prisma.modelVersion.delete({
     *   where: {
     *     // ... filter to delete one ModelVersion
     *   }
     * })
     * 
     */
    delete<T extends ModelVersionDeleteArgs>(args: SelectSubset<T, ModelVersionDeleteArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelVersion.
     * @param {ModelVersionUpdateArgs} args - Arguments to update one ModelVersion.
     * @example
     * // Update one ModelVersion
     * const modelVersion = await prisma.modelVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelVersionUpdateArgs>(args: SelectSubset<T, ModelVersionUpdateArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelVersions.
     * @param {ModelVersionDeleteManyArgs} args - Arguments to filter ModelVersions to delete.
     * @example
     * // Delete a few ModelVersions
     * const { count } = await prisma.modelVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelVersionDeleteManyArgs>(args?: SelectSubset<T, ModelVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelVersions
     * const modelVersion = await prisma.modelVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelVersionUpdateManyArgs>(args: SelectSubset<T, ModelVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelVersions and returns the data updated in the database.
     * @param {ModelVersionUpdateManyAndReturnArgs} args - Arguments to update many ModelVersions.
     * @example
     * // Update many ModelVersions
     * const modelVersion = await prisma.modelVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelVersions and only return the `id`
     * const modelVersionWithIdOnly = await prisma.modelVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModelVersion.
     * @param {ModelVersionUpsertArgs} args - Arguments to update or create a ModelVersion.
     * @example
     * // Update or create a ModelVersion
     * const modelVersion = await prisma.modelVersion.upsert({
     *   create: {
     *     // ... data to create a ModelVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelVersion we want to update
     *   }
     * })
     */
    upsert<T extends ModelVersionUpsertArgs>(args: SelectSubset<T, ModelVersionUpsertArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionCountArgs} args - Arguments to filter ModelVersions to count.
     * @example
     * // Count the number of ModelVersions
     * const count = await prisma.modelVersion.count({
     *   where: {
     *     // ... the filter for the ModelVersions we want to count
     *   }
     * })
    **/
    count<T extends ModelVersionCountArgs>(
      args?: Subset<T, ModelVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelVersionAggregateArgs>(args: Subset<T, ModelVersionAggregateArgs>): Prisma.PrismaPromise<GetModelVersionAggregateType<T>>

    /**
     * Group by ModelVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionGroupByArgs} args - Group by arguments.
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
      T extends ModelVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelVersionGroupByArgs['orderBy'] }
        : { orderBy?: ModelVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelVersion model
   */
  readonly fields: ModelVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends SequentialModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SequentialModelDefaultArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelVersion model
   */
  interface ModelVersionFieldRefs {
    readonly id: FieldRef<"ModelVersion", 'Int'>
    readonly modelId: FieldRef<"ModelVersion", 'String'>
    readonly version: FieldRef<"ModelVersion", 'Int'>
    readonly snapshot: FieldRef<"ModelVersion", 'Json'>
    readonly createdAt: FieldRef<"ModelVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelVersion findUnique
   */
  export type ModelVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersion to fetch.
     */
    where: ModelVersionWhereUniqueInput
  }

  /**
   * ModelVersion findUniqueOrThrow
   */
  export type ModelVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersion to fetch.
     */
    where: ModelVersionWhereUniqueInput
  }

  /**
   * ModelVersion findFirst
   */
  export type ModelVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersion to fetch.
     */
    where?: ModelVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVersions to fetch.
     */
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelVersions.
     */
    cursor?: ModelVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelVersions.
     */
    distinct?: ModelVersionScalarFieldEnum | ModelVersionScalarFieldEnum[]
  }

  /**
   * ModelVersion findFirstOrThrow
   */
  export type ModelVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersion to fetch.
     */
    where?: ModelVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVersions to fetch.
     */
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelVersions.
     */
    cursor?: ModelVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelVersions.
     */
    distinct?: ModelVersionScalarFieldEnum | ModelVersionScalarFieldEnum[]
  }

  /**
   * ModelVersion findMany
   */
  export type ModelVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersions to fetch.
     */
    where?: ModelVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVersions to fetch.
     */
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelVersions.
     */
    cursor?: ModelVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVersions.
     */
    skip?: number
    distinct?: ModelVersionScalarFieldEnum | ModelVersionScalarFieldEnum[]
  }

  /**
   * ModelVersion create
   */
  export type ModelVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelVersion.
     */
    data: XOR<ModelVersionCreateInput, ModelVersionUncheckedCreateInput>
  }

  /**
   * ModelVersion createMany
   */
  export type ModelVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelVersions.
     */
    data: ModelVersionCreateManyInput | ModelVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelVersion createManyAndReturn
   */
  export type ModelVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * The data used to create many ModelVersions.
     */
    data: ModelVersionCreateManyInput | ModelVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelVersion update
   */
  export type ModelVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelVersion.
     */
    data: XOR<ModelVersionUpdateInput, ModelVersionUncheckedUpdateInput>
    /**
     * Choose, which ModelVersion to update.
     */
    where: ModelVersionWhereUniqueInput
  }

  /**
   * ModelVersion updateMany
   */
  export type ModelVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelVersions.
     */
    data: XOR<ModelVersionUpdateManyMutationInput, ModelVersionUncheckedUpdateManyInput>
    /**
     * Filter which ModelVersions to update
     */
    where?: ModelVersionWhereInput
    /**
     * Limit how many ModelVersions to update.
     */
    limit?: number
  }

  /**
   * ModelVersion updateManyAndReturn
   */
  export type ModelVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * The data used to update ModelVersions.
     */
    data: XOR<ModelVersionUpdateManyMutationInput, ModelVersionUncheckedUpdateManyInput>
    /**
     * Filter which ModelVersions to update
     */
    where?: ModelVersionWhereInput
    /**
     * Limit how many ModelVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelVersion upsert
   */
  export type ModelVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelVersion to update in case it exists.
     */
    where: ModelVersionWhereUniqueInput
    /**
     * In case the ModelVersion found by the `where` argument doesn't exist, create a new ModelVersion with this data.
     */
    create: XOR<ModelVersionCreateInput, ModelVersionUncheckedCreateInput>
    /**
     * In case the ModelVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelVersionUpdateInput, ModelVersionUncheckedUpdateInput>
  }

  /**
   * ModelVersion delete
   */
  export type ModelVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter which ModelVersion to delete.
     */
    where: ModelVersionWhereUniqueInput
  }

  /**
   * ModelVersion deleteMany
   */
  export type ModelVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelVersions to delete
     */
    where?: ModelVersionWhereInput
    /**
     * Limit how many ModelVersions to delete.
     */
    limit?: number
  }

  /**
   * ModelVersion without action
   */
  export type ModelVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
  }


  /**
   * Model TrainingSession
   */

  export type AggregateTrainingSession = {
    _count: TrainingSessionCountAggregateOutputType | null
    _avg: TrainingSessionAvgAggregateOutputType | null
    _sum: TrainingSessionSumAggregateOutputType | null
    _min: TrainingSessionMinAggregateOutputType | null
    _max: TrainingSessionMaxAggregateOutputType | null
  }

  export type TrainingSessionAvgAggregateOutputType = {
    id: number | null
    cost: number | null
  }

  export type TrainingSessionSumAggregateOutputType = {
    id: number | null
    cost: number | null
  }

  export type TrainingSessionMinAggregateOutputType = {
    id: number | null
    modelId: string | null
    status: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type TrainingSessionMaxAggregateOutputType = {
    id: number | null
    modelId: string | null
    status: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type TrainingSessionCountAggregateOutputType = {
    id: number
    modelId: number
    status: number
    metrics: number
    cost: number
    createdAt: number
    _all: number
  }


  export type TrainingSessionAvgAggregateInputType = {
    id?: true
    cost?: true
  }

  export type TrainingSessionSumAggregateInputType = {
    id?: true
    cost?: true
  }

  export type TrainingSessionMinAggregateInputType = {
    id?: true
    modelId?: true
    status?: true
    cost?: true
    createdAt?: true
  }

  export type TrainingSessionMaxAggregateInputType = {
    id?: true
    modelId?: true
    status?: true
    cost?: true
    createdAt?: true
  }

  export type TrainingSessionCountAggregateInputType = {
    id?: true
    modelId?: true
    status?: true
    metrics?: true
    cost?: true
    createdAt?: true
    _all?: true
  }

  export type TrainingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingSession to aggregate.
     */
    where?: TrainingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingSessions to fetch.
     */
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingSessions
    **/
    _count?: true | TrainingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingSessionMaxAggregateInputType
  }

  export type GetTrainingSessionAggregateType<T extends TrainingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingSession[P]>
      : GetScalarType<T[P], AggregateTrainingSession[P]>
  }




  export type TrainingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingSessionWhereInput
    orderBy?: TrainingSessionOrderByWithAggregationInput | TrainingSessionOrderByWithAggregationInput[]
    by: TrainingSessionScalarFieldEnum[] | TrainingSessionScalarFieldEnum
    having?: TrainingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingSessionCountAggregateInputType | true
    _avg?: TrainingSessionAvgAggregateInputType
    _sum?: TrainingSessionSumAggregateInputType
    _min?: TrainingSessionMinAggregateInputType
    _max?: TrainingSessionMaxAggregateInputType
  }

  export type TrainingSessionGroupByOutputType = {
    id: number
    modelId: string
    status: string
    metrics: JsonValue | null
    cost: number | null
    createdAt: Date
    _count: TrainingSessionCountAggregateOutputType | null
    _avg: TrainingSessionAvgAggregateOutputType | null
    _sum: TrainingSessionSumAggregateOutputType | null
    _min: TrainingSessionMinAggregateOutputType | null
    _max: TrainingSessionMaxAggregateOutputType | null
  }

  type GetTrainingSessionGroupByPayload<T extends TrainingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingSessionGroupByOutputType[P]>
        }
      >
    >


  export type TrainingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    status?: boolean
    metrics?: boolean
    cost?: boolean
    createdAt?: boolean
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingSession"]>

  export type TrainingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    status?: boolean
    metrics?: boolean
    cost?: boolean
    createdAt?: boolean
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingSession"]>

  export type TrainingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    status?: boolean
    metrics?: boolean
    cost?: boolean
    createdAt?: boolean
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingSession"]>

  export type TrainingSessionSelectScalar = {
    id?: boolean
    modelId?: boolean
    status?: boolean
    metrics?: boolean
    cost?: boolean
    createdAt?: boolean
  }

  export type TrainingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelId" | "status" | "metrics" | "cost" | "createdAt", ExtArgs["result"]["trainingSession"]>
  export type TrainingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }
  export type TrainingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }
  export type TrainingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | SequentialModelDefaultArgs<ExtArgs>
  }

  export type $TrainingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingSession"
    objects: {
      model: Prisma.$SequentialModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelId: string
      status: string
      metrics: Prisma.JsonValue | null
      cost: number | null
      createdAt: Date
    }, ExtArgs["result"]["trainingSession"]>
    composites: {}
  }

  type TrainingSessionGetPayload<S extends boolean | null | undefined | TrainingSessionDefaultArgs> = $Result.GetResult<Prisma.$TrainingSessionPayload, S>

  type TrainingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingSessionCountAggregateInputType | true
    }

  export interface TrainingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingSession'], meta: { name: 'TrainingSession' } }
    /**
     * Find zero or one TrainingSession that matches the filter.
     * @param {TrainingSessionFindUniqueArgs} args - Arguments to find a TrainingSession
     * @example
     * // Get one TrainingSession
     * const trainingSession = await prisma.trainingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingSessionFindUniqueArgs>(args: SelectSubset<T, TrainingSessionFindUniqueArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingSessionFindUniqueOrThrowArgs} args - Arguments to find a TrainingSession
     * @example
     * // Get one TrainingSession
     * const trainingSession = await prisma.trainingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionFindFirstArgs} args - Arguments to find a TrainingSession
     * @example
     * // Get one TrainingSession
     * const trainingSession = await prisma.trainingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingSessionFindFirstArgs>(args?: SelectSubset<T, TrainingSessionFindFirstArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionFindFirstOrThrowArgs} args - Arguments to find a TrainingSession
     * @example
     * // Get one TrainingSession
     * const trainingSession = await prisma.trainingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingSessions
     * const trainingSessions = await prisma.trainingSession.findMany()
     * 
     * // Get first 10 TrainingSessions
     * const trainingSessions = await prisma.trainingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingSessionWithIdOnly = await prisma.trainingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingSessionFindManyArgs>(args?: SelectSubset<T, TrainingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainingSession.
     * @param {TrainingSessionCreateArgs} args - Arguments to create a TrainingSession.
     * @example
     * // Create one TrainingSession
     * const TrainingSession = await prisma.trainingSession.create({
     *   data: {
     *     // ... data to create a TrainingSession
     *   }
     * })
     * 
     */
    create<T extends TrainingSessionCreateArgs>(args: SelectSubset<T, TrainingSessionCreateArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainingSessions.
     * @param {TrainingSessionCreateManyArgs} args - Arguments to create many TrainingSessions.
     * @example
     * // Create many TrainingSessions
     * const trainingSession = await prisma.trainingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingSessionCreateManyArgs>(args?: SelectSubset<T, TrainingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingSessions and returns the data saved in the database.
     * @param {TrainingSessionCreateManyAndReturnArgs} args - Arguments to create many TrainingSessions.
     * @example
     * // Create many TrainingSessions
     * const trainingSession = await prisma.trainingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingSessions and only return the `id`
     * const trainingSessionWithIdOnly = await prisma.trainingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainingSession.
     * @param {TrainingSessionDeleteArgs} args - Arguments to delete one TrainingSession.
     * @example
     * // Delete one TrainingSession
     * const TrainingSession = await prisma.trainingSession.delete({
     *   where: {
     *     // ... filter to delete one TrainingSession
     *   }
     * })
     * 
     */
    delete<T extends TrainingSessionDeleteArgs>(args: SelectSubset<T, TrainingSessionDeleteArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainingSession.
     * @param {TrainingSessionUpdateArgs} args - Arguments to update one TrainingSession.
     * @example
     * // Update one TrainingSession
     * const trainingSession = await prisma.trainingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingSessionUpdateArgs>(args: SelectSubset<T, TrainingSessionUpdateArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainingSessions.
     * @param {TrainingSessionDeleteManyArgs} args - Arguments to filter TrainingSessions to delete.
     * @example
     * // Delete a few TrainingSessions
     * const { count } = await prisma.trainingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingSessionDeleteManyArgs>(args?: SelectSubset<T, TrainingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingSessions
     * const trainingSession = await prisma.trainingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingSessionUpdateManyArgs>(args: SelectSubset<T, TrainingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingSessions and returns the data updated in the database.
     * @param {TrainingSessionUpdateManyAndReturnArgs} args - Arguments to update many TrainingSessions.
     * @example
     * // Update many TrainingSessions
     * const trainingSession = await prisma.trainingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingSessions and only return the `id`
     * const trainingSessionWithIdOnly = await prisma.trainingSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainingSession.
     * @param {TrainingSessionUpsertArgs} args - Arguments to update or create a TrainingSession.
     * @example
     * // Update or create a TrainingSession
     * const trainingSession = await prisma.trainingSession.upsert({
     *   create: {
     *     // ... data to create a TrainingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingSession we want to update
     *   }
     * })
     */
    upsert<T extends TrainingSessionUpsertArgs>(args: SelectSubset<T, TrainingSessionUpsertArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionCountArgs} args - Arguments to filter TrainingSessions to count.
     * @example
     * // Count the number of TrainingSessions
     * const count = await prisma.trainingSession.count({
     *   where: {
     *     // ... the filter for the TrainingSessions we want to count
     *   }
     * })
    **/
    count<T extends TrainingSessionCountArgs>(
      args?: Subset<T, TrainingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingSessionAggregateArgs>(args: Subset<T, TrainingSessionAggregateArgs>): Prisma.PrismaPromise<GetTrainingSessionAggregateType<T>>

    /**
     * Group by TrainingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionGroupByArgs} args - Group by arguments.
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
      T extends TrainingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingSessionGroupByArgs['orderBy'] }
        : { orderBy?: TrainingSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingSession model
   */
  readonly fields: TrainingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends SequentialModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SequentialModelDefaultArgs<ExtArgs>>): Prisma__SequentialModelClient<$Result.GetResult<Prisma.$SequentialModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingSession model
   */
  interface TrainingSessionFieldRefs {
    readonly id: FieldRef<"TrainingSession", 'Int'>
    readonly modelId: FieldRef<"TrainingSession", 'String'>
    readonly status: FieldRef<"TrainingSession", 'String'>
    readonly metrics: FieldRef<"TrainingSession", 'Json'>
    readonly cost: FieldRef<"TrainingSession", 'Float'>
    readonly createdAt: FieldRef<"TrainingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainingSession findUnique
   */
  export type TrainingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSession to fetch.
     */
    where: TrainingSessionWhereUniqueInput
  }

  /**
   * TrainingSession findUniqueOrThrow
   */
  export type TrainingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSession to fetch.
     */
    where: TrainingSessionWhereUniqueInput
  }

  /**
   * TrainingSession findFirst
   */
  export type TrainingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSession to fetch.
     */
    where?: TrainingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingSessions to fetch.
     */
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingSessions.
     */
    cursor?: TrainingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingSessions.
     */
    distinct?: TrainingSessionScalarFieldEnum | TrainingSessionScalarFieldEnum[]
  }

  /**
   * TrainingSession findFirstOrThrow
   */
  export type TrainingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSession to fetch.
     */
    where?: TrainingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingSessions to fetch.
     */
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingSessions.
     */
    cursor?: TrainingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingSessions.
     */
    distinct?: TrainingSessionScalarFieldEnum | TrainingSessionScalarFieldEnum[]
  }

  /**
   * TrainingSession findMany
   */
  export type TrainingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSessions to fetch.
     */
    where?: TrainingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingSessions to fetch.
     */
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingSessions.
     */
    cursor?: TrainingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingSessions.
     */
    skip?: number
    distinct?: TrainingSessionScalarFieldEnum | TrainingSessionScalarFieldEnum[]
  }

  /**
   * TrainingSession create
   */
  export type TrainingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingSession.
     */
    data: XOR<TrainingSessionCreateInput, TrainingSessionUncheckedCreateInput>
  }

  /**
   * TrainingSession createMany
   */
  export type TrainingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingSessions.
     */
    data: TrainingSessionCreateManyInput | TrainingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingSession createManyAndReturn
   */
  export type TrainingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingSessions.
     */
    data: TrainingSessionCreateManyInput | TrainingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingSession update
   */
  export type TrainingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingSession.
     */
    data: XOR<TrainingSessionUpdateInput, TrainingSessionUncheckedUpdateInput>
    /**
     * Choose, which TrainingSession to update.
     */
    where: TrainingSessionWhereUniqueInput
  }

  /**
   * TrainingSession updateMany
   */
  export type TrainingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingSessions.
     */
    data: XOR<TrainingSessionUpdateManyMutationInput, TrainingSessionUncheckedUpdateManyInput>
    /**
     * Filter which TrainingSessions to update
     */
    where?: TrainingSessionWhereInput
    /**
     * Limit how many TrainingSessions to update.
     */
    limit?: number
  }

  /**
   * TrainingSession updateManyAndReturn
   */
  export type TrainingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * The data used to update TrainingSessions.
     */
    data: XOR<TrainingSessionUpdateManyMutationInput, TrainingSessionUncheckedUpdateManyInput>
    /**
     * Filter which TrainingSessions to update
     */
    where?: TrainingSessionWhereInput
    /**
     * Limit how many TrainingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingSession upsert
   */
  export type TrainingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingSession to update in case it exists.
     */
    where: TrainingSessionWhereUniqueInput
    /**
     * In case the TrainingSession found by the `where` argument doesn't exist, create a new TrainingSession with this data.
     */
    create: XOR<TrainingSessionCreateInput, TrainingSessionUncheckedCreateInput>
    /**
     * In case the TrainingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingSessionUpdateInput, TrainingSessionUncheckedUpdateInput>
  }

  /**
   * TrainingSession delete
   */
  export type TrainingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter which TrainingSession to delete.
     */
    where: TrainingSessionWhereUniqueInput
  }

  /**
   * TrainingSession deleteMany
   */
  export type TrainingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingSessions to delete
     */
    where?: TrainingSessionWhereInput
    /**
     * Limit how many TrainingSessions to delete.
     */
    limit?: number
  }

  /**
   * TrainingSession without action
   */
  export type TrainingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
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


  export const SequentialModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    enabled: 'enabled',
    public: 'public',
    userId: 'userId'
  };

  export type SequentialModelScalarFieldEnum = (typeof SequentialModelScalarFieldEnum)[keyof typeof SequentialModelScalarFieldEnum]


  export const LayerScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    type: 'type',
    config: 'config',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LayerScalarFieldEnum = (typeof LayerScalarFieldEnum)[keyof typeof LayerScalarFieldEnum]


  export const LayerConnectionScalarFieldEnum: {
    id: 'id',
    fromLayerId: 'fromLayerId',
    toLayerId: 'toLayerId'
  };

  export type LayerConnectionScalarFieldEnum = (typeof LayerConnectionScalarFieldEnum)[keyof typeof LayerConnectionScalarFieldEnum]


  export const ModelVersionScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    version: 'version',
    snapshot: 'snapshot',
    createdAt: 'createdAt'
  };

  export type ModelVersionScalarFieldEnum = (typeof ModelVersionScalarFieldEnum)[keyof typeof ModelVersionScalarFieldEnum]


  export const TrainingSessionScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    status: 'status',
    metrics: 'metrics',
    cost: 'cost',
    createdAt: 'createdAt'
  };

  export type TrainingSessionScalarFieldEnum = (typeof TrainingSessionScalarFieldEnum)[keyof typeof TrainingSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SequentialModelWhereInput = {
    AND?: SequentialModelWhereInput | SequentialModelWhereInput[]
    OR?: SequentialModelWhereInput[]
    NOT?: SequentialModelWhereInput | SequentialModelWhereInput[]
    id?: UuidFilter<"SequentialModel"> | string
    name?: StringFilter<"SequentialModel"> | string
    description?: StringFilter<"SequentialModel"> | string
    createdAt?: DateTimeFilter<"SequentialModel"> | Date | string
    updatedAt?: DateTimeFilter<"SequentialModel"> | Date | string
    enabled?: BoolFilter<"SequentialModel"> | boolean
    public?: BoolFilter<"SequentialModel"> | boolean
    userId?: StringFilter<"SequentialModel"> | string
    layers?: LayerListRelationFilter
    versions?: ModelVersionListRelationFilter
    trainings?: TrainingSessionListRelationFilter
  }

  export type SequentialModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
    public?: SortOrder
    userId?: SortOrder
    layers?: LayerOrderByRelationAggregateInput
    versions?: ModelVersionOrderByRelationAggregateInput
    trainings?: TrainingSessionOrderByRelationAggregateInput
  }

  export type SequentialModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: SequentialModelNameUserIdCompoundUniqueInput
    AND?: SequentialModelWhereInput | SequentialModelWhereInput[]
    OR?: SequentialModelWhereInput[]
    NOT?: SequentialModelWhereInput | SequentialModelWhereInput[]
    name?: StringFilter<"SequentialModel"> | string
    description?: StringFilter<"SequentialModel"> | string
    createdAt?: DateTimeFilter<"SequentialModel"> | Date | string
    updatedAt?: DateTimeFilter<"SequentialModel"> | Date | string
    enabled?: BoolFilter<"SequentialModel"> | boolean
    public?: BoolFilter<"SequentialModel"> | boolean
    userId?: StringFilter<"SequentialModel"> | string
    layers?: LayerListRelationFilter
    versions?: ModelVersionListRelationFilter
    trainings?: TrainingSessionListRelationFilter
  }, "id" | "name_userId">

  export type SequentialModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
    public?: SortOrder
    userId?: SortOrder
    _count?: SequentialModelCountOrderByAggregateInput
    _max?: SequentialModelMaxOrderByAggregateInput
    _min?: SequentialModelMinOrderByAggregateInput
  }

  export type SequentialModelScalarWhereWithAggregatesInput = {
    AND?: SequentialModelScalarWhereWithAggregatesInput | SequentialModelScalarWhereWithAggregatesInput[]
    OR?: SequentialModelScalarWhereWithAggregatesInput[]
    NOT?: SequentialModelScalarWhereWithAggregatesInput | SequentialModelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SequentialModel"> | string
    name?: StringWithAggregatesFilter<"SequentialModel"> | string
    description?: StringWithAggregatesFilter<"SequentialModel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SequentialModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SequentialModel"> | Date | string
    enabled?: BoolWithAggregatesFilter<"SequentialModel"> | boolean
    public?: BoolWithAggregatesFilter<"SequentialModel"> | boolean
    userId?: StringWithAggregatesFilter<"SequentialModel"> | string
  }

  export type LayerWhereInput = {
    AND?: LayerWhereInput | LayerWhereInput[]
    OR?: LayerWhereInput[]
    NOT?: LayerWhereInput | LayerWhereInput[]
    id?: IntFilter<"Layer"> | number
    modelId?: UuidFilter<"Layer"> | string
    type?: StringFilter<"Layer"> | string
    config?: JsonFilter<"Layer">
    order?: IntFilter<"Layer"> | number
    createdAt?: DateTimeFilter<"Layer"> | Date | string
    updatedAt?: DateTimeFilter<"Layer"> | Date | string
    sequentialModel?: XOR<SequentialModelScalarRelationFilter, SequentialModelWhereInput>
    fromConnections?: LayerConnectionListRelationFilter
    toConnections?: LayerConnectionListRelationFilter
  }

  export type LayerOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    type?: SortOrder
    config?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sequentialModel?: SequentialModelOrderByWithRelationInput
    fromConnections?: LayerConnectionOrderByRelationAggregateInput
    toConnections?: LayerConnectionOrderByRelationAggregateInput
  }

  export type LayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LayerWhereInput | LayerWhereInput[]
    OR?: LayerWhereInput[]
    NOT?: LayerWhereInput | LayerWhereInput[]
    modelId?: UuidFilter<"Layer"> | string
    type?: StringFilter<"Layer"> | string
    config?: JsonFilter<"Layer">
    order?: IntFilter<"Layer"> | number
    createdAt?: DateTimeFilter<"Layer"> | Date | string
    updatedAt?: DateTimeFilter<"Layer"> | Date | string
    sequentialModel?: XOR<SequentialModelScalarRelationFilter, SequentialModelWhereInput>
    fromConnections?: LayerConnectionListRelationFilter
    toConnections?: LayerConnectionListRelationFilter
  }, "id">

  export type LayerOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    type?: SortOrder
    config?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LayerCountOrderByAggregateInput
    _avg?: LayerAvgOrderByAggregateInput
    _max?: LayerMaxOrderByAggregateInput
    _min?: LayerMinOrderByAggregateInput
    _sum?: LayerSumOrderByAggregateInput
  }

  export type LayerScalarWhereWithAggregatesInput = {
    AND?: LayerScalarWhereWithAggregatesInput | LayerScalarWhereWithAggregatesInput[]
    OR?: LayerScalarWhereWithAggregatesInput[]
    NOT?: LayerScalarWhereWithAggregatesInput | LayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Layer"> | number
    modelId?: UuidWithAggregatesFilter<"Layer"> | string
    type?: StringWithAggregatesFilter<"Layer"> | string
    config?: JsonWithAggregatesFilter<"Layer">
    order?: IntWithAggregatesFilter<"Layer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Layer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Layer"> | Date | string
  }

  export type LayerConnectionWhereInput = {
    AND?: LayerConnectionWhereInput | LayerConnectionWhereInput[]
    OR?: LayerConnectionWhereInput[]
    NOT?: LayerConnectionWhereInput | LayerConnectionWhereInput[]
    id?: IntFilter<"LayerConnection"> | number
    fromLayerId?: IntFilter<"LayerConnection"> | number
    toLayerId?: IntFilter<"LayerConnection"> | number
    fromLayer?: XOR<LayerScalarRelationFilter, LayerWhereInput>
    toLayer?: XOR<LayerScalarRelationFilter, LayerWhereInput>
  }

  export type LayerConnectionOrderByWithRelationInput = {
    id?: SortOrder
    fromLayerId?: SortOrder
    toLayerId?: SortOrder
    fromLayer?: LayerOrderByWithRelationInput
    toLayer?: LayerOrderByWithRelationInput
  }

  export type LayerConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LayerConnectionWhereInput | LayerConnectionWhereInput[]
    OR?: LayerConnectionWhereInput[]
    NOT?: LayerConnectionWhereInput | LayerConnectionWhereInput[]
    fromLayerId?: IntFilter<"LayerConnection"> | number
    toLayerId?: IntFilter<"LayerConnection"> | number
    fromLayer?: XOR<LayerScalarRelationFilter, LayerWhereInput>
    toLayer?: XOR<LayerScalarRelationFilter, LayerWhereInput>
  }, "id">

  export type LayerConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    fromLayerId?: SortOrder
    toLayerId?: SortOrder
    _count?: LayerConnectionCountOrderByAggregateInput
    _avg?: LayerConnectionAvgOrderByAggregateInput
    _max?: LayerConnectionMaxOrderByAggregateInput
    _min?: LayerConnectionMinOrderByAggregateInput
    _sum?: LayerConnectionSumOrderByAggregateInput
  }

  export type LayerConnectionScalarWhereWithAggregatesInput = {
    AND?: LayerConnectionScalarWhereWithAggregatesInput | LayerConnectionScalarWhereWithAggregatesInput[]
    OR?: LayerConnectionScalarWhereWithAggregatesInput[]
    NOT?: LayerConnectionScalarWhereWithAggregatesInput | LayerConnectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LayerConnection"> | number
    fromLayerId?: IntWithAggregatesFilter<"LayerConnection"> | number
    toLayerId?: IntWithAggregatesFilter<"LayerConnection"> | number
  }

  export type ModelVersionWhereInput = {
    AND?: ModelVersionWhereInput | ModelVersionWhereInput[]
    OR?: ModelVersionWhereInput[]
    NOT?: ModelVersionWhereInput | ModelVersionWhereInput[]
    id?: IntFilter<"ModelVersion"> | number
    modelId?: UuidFilter<"ModelVersion"> | string
    version?: IntFilter<"ModelVersion"> | number
    snapshot?: JsonFilter<"ModelVersion">
    createdAt?: DateTimeFilter<"ModelVersion"> | Date | string
    model?: XOR<SequentialModelScalarRelationFilter, SequentialModelWhereInput>
  }

  export type ModelVersionOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    version?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    model?: SequentialModelOrderByWithRelationInput
  }

  export type ModelVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModelVersionWhereInput | ModelVersionWhereInput[]
    OR?: ModelVersionWhereInput[]
    NOT?: ModelVersionWhereInput | ModelVersionWhereInput[]
    modelId?: UuidFilter<"ModelVersion"> | string
    version?: IntFilter<"ModelVersion"> | number
    snapshot?: JsonFilter<"ModelVersion">
    createdAt?: DateTimeFilter<"ModelVersion"> | Date | string
    model?: XOR<SequentialModelScalarRelationFilter, SequentialModelWhereInput>
  }, "id">

  export type ModelVersionOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    version?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    _count?: ModelVersionCountOrderByAggregateInput
    _avg?: ModelVersionAvgOrderByAggregateInput
    _max?: ModelVersionMaxOrderByAggregateInput
    _min?: ModelVersionMinOrderByAggregateInput
    _sum?: ModelVersionSumOrderByAggregateInput
  }

  export type ModelVersionScalarWhereWithAggregatesInput = {
    AND?: ModelVersionScalarWhereWithAggregatesInput | ModelVersionScalarWhereWithAggregatesInput[]
    OR?: ModelVersionScalarWhereWithAggregatesInput[]
    NOT?: ModelVersionScalarWhereWithAggregatesInput | ModelVersionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModelVersion"> | number
    modelId?: UuidWithAggregatesFilter<"ModelVersion"> | string
    version?: IntWithAggregatesFilter<"ModelVersion"> | number
    snapshot?: JsonWithAggregatesFilter<"ModelVersion">
    createdAt?: DateTimeWithAggregatesFilter<"ModelVersion"> | Date | string
  }

  export type TrainingSessionWhereInput = {
    AND?: TrainingSessionWhereInput | TrainingSessionWhereInput[]
    OR?: TrainingSessionWhereInput[]
    NOT?: TrainingSessionWhereInput | TrainingSessionWhereInput[]
    id?: IntFilter<"TrainingSession"> | number
    modelId?: UuidFilter<"TrainingSession"> | string
    status?: StringFilter<"TrainingSession"> | string
    metrics?: JsonNullableFilter<"TrainingSession">
    cost?: FloatNullableFilter<"TrainingSession"> | number | null
    createdAt?: DateTimeFilter<"TrainingSession"> | Date | string
    model?: XOR<SequentialModelScalarRelationFilter, SequentialModelWhereInput>
  }

  export type TrainingSessionOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    metrics?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    model?: SequentialModelOrderByWithRelationInput
  }

  export type TrainingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrainingSessionWhereInput | TrainingSessionWhereInput[]
    OR?: TrainingSessionWhereInput[]
    NOT?: TrainingSessionWhereInput | TrainingSessionWhereInput[]
    modelId?: UuidFilter<"TrainingSession"> | string
    status?: StringFilter<"TrainingSession"> | string
    metrics?: JsonNullableFilter<"TrainingSession">
    cost?: FloatNullableFilter<"TrainingSession"> | number | null
    createdAt?: DateTimeFilter<"TrainingSession"> | Date | string
    model?: XOR<SequentialModelScalarRelationFilter, SequentialModelWhereInput>
  }, "id">

  export type TrainingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    metrics?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TrainingSessionCountOrderByAggregateInput
    _avg?: TrainingSessionAvgOrderByAggregateInput
    _max?: TrainingSessionMaxOrderByAggregateInput
    _min?: TrainingSessionMinOrderByAggregateInput
    _sum?: TrainingSessionSumOrderByAggregateInput
  }

  export type TrainingSessionScalarWhereWithAggregatesInput = {
    AND?: TrainingSessionScalarWhereWithAggregatesInput | TrainingSessionScalarWhereWithAggregatesInput[]
    OR?: TrainingSessionScalarWhereWithAggregatesInput[]
    NOT?: TrainingSessionScalarWhereWithAggregatesInput | TrainingSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrainingSession"> | number
    modelId?: UuidWithAggregatesFilter<"TrainingSession"> | string
    status?: StringWithAggregatesFilter<"TrainingSession"> | string
    metrics?: JsonNullableWithAggregatesFilter<"TrainingSession">
    cost?: FloatNullableWithAggregatesFilter<"TrainingSession"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TrainingSession"> | Date | string
  }

  export type SequentialModelCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
    layers?: LayerCreateNestedManyWithoutSequentialModelInput
    versions?: ModelVersionCreateNestedManyWithoutModelInput
    trainings?: TrainingSessionCreateNestedManyWithoutModelInput
  }

  export type SequentialModelUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
    layers?: LayerUncheckedCreateNestedManyWithoutSequentialModelInput
    versions?: ModelVersionUncheckedCreateNestedManyWithoutModelInput
    trainings?: TrainingSessionUncheckedCreateNestedManyWithoutModelInput
  }

  export type SequentialModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    layers?: LayerUpdateManyWithoutSequentialModelNestedInput
    versions?: ModelVersionUpdateManyWithoutModelNestedInput
    trainings?: TrainingSessionUpdateManyWithoutModelNestedInput
  }

  export type SequentialModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    layers?: LayerUncheckedUpdateManyWithoutSequentialModelNestedInput
    versions?: ModelVersionUncheckedUpdateManyWithoutModelNestedInput
    trainings?: TrainingSessionUncheckedUpdateManyWithoutModelNestedInput
  }

  export type SequentialModelCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
  }

  export type SequentialModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SequentialModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LayerCreateInput = {
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sequentialModel: SequentialModelCreateNestedOneWithoutLayersInput
    fromConnections?: LayerConnectionCreateNestedManyWithoutFromLayerInput
    toConnections?: LayerConnectionCreateNestedManyWithoutToLayerInput
  }

  export type LayerUncheckedCreateInput = {
    id?: number
    modelId: string
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromConnections?: LayerConnectionUncheckedCreateNestedManyWithoutFromLayerInput
    toConnections?: LayerConnectionUncheckedCreateNestedManyWithoutToLayerInput
  }

  export type LayerUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequentialModel?: SequentialModelUpdateOneRequiredWithoutLayersNestedInput
    fromConnections?: LayerConnectionUpdateManyWithoutFromLayerNestedInput
    toConnections?: LayerConnectionUpdateManyWithoutToLayerNestedInput
  }

  export type LayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromConnections?: LayerConnectionUncheckedUpdateManyWithoutFromLayerNestedInput
    toConnections?: LayerConnectionUncheckedUpdateManyWithoutToLayerNestedInput
  }

  export type LayerCreateManyInput = {
    id?: number
    modelId: string
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayerUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayerConnectionCreateInput = {
    fromLayer: LayerCreateNestedOneWithoutFromConnectionsInput
    toLayer: LayerCreateNestedOneWithoutToConnectionsInput
  }

  export type LayerConnectionUncheckedCreateInput = {
    id?: number
    fromLayerId: number
    toLayerId: number
  }

  export type LayerConnectionUpdateInput = {
    fromLayer?: LayerUpdateOneRequiredWithoutFromConnectionsNestedInput
    toLayer?: LayerUpdateOneRequiredWithoutToConnectionsNestedInput
  }

  export type LayerConnectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromLayerId?: IntFieldUpdateOperationsInput | number
    toLayerId?: IntFieldUpdateOperationsInput | number
  }

  export type LayerConnectionCreateManyInput = {
    id?: number
    fromLayerId: number
    toLayerId: number
  }

  export type LayerConnectionUpdateManyMutationInput = {

  }

  export type LayerConnectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromLayerId?: IntFieldUpdateOperationsInput | number
    toLayerId?: IntFieldUpdateOperationsInput | number
  }

  export type ModelVersionCreateInput = {
    version: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    model: SequentialModelCreateNestedOneWithoutVersionsInput
  }

  export type ModelVersionUncheckedCreateInput = {
    id?: number
    modelId: string
    version: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ModelVersionUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: SequentialModelUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type ModelVersionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelVersionCreateManyInput = {
    id?: number
    modelId: string
    version: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ModelVersionUpdateManyMutationInput = {
    version?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelVersionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingSessionCreateInput = {
    status: string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: number | null
    createdAt?: Date | string
    model: SequentialModelCreateNestedOneWithoutTrainingsInput
  }

  export type TrainingSessionUncheckedCreateInput = {
    id?: number
    modelId: string
    status: string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: number | null
    createdAt?: Date | string
  }

  export type TrainingSessionUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: SequentialModelUpdateOneRequiredWithoutTrainingsNestedInput
  }

  export type TrainingSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingSessionCreateManyInput = {
    id?: number
    modelId: string
    status: string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: number | null
    createdAt?: Date | string
  }

  export type TrainingSessionUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LayerListRelationFilter = {
    every?: LayerWhereInput
    some?: LayerWhereInput
    none?: LayerWhereInput
  }

  export type ModelVersionListRelationFilter = {
    every?: ModelVersionWhereInput
    some?: ModelVersionWhereInput
    none?: ModelVersionWhereInput
  }

  export type TrainingSessionListRelationFilter = {
    every?: TrainingSessionWhereInput
    some?: TrainingSessionWhereInput
    none?: TrainingSessionWhereInput
  }

  export type LayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SequentialModelNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type SequentialModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
    public?: SortOrder
    userId?: SortOrder
  }

  export type SequentialModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
    public?: SortOrder
    userId?: SortOrder
  }

  export type SequentialModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
    public?: SortOrder
    userId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SequentialModelScalarRelationFilter = {
    is?: SequentialModelWhereInput
    isNot?: SequentialModelWhereInput
  }

  export type LayerConnectionListRelationFilter = {
    every?: LayerConnectionWhereInput
    some?: LayerConnectionWhereInput
    none?: LayerConnectionWhereInput
  }

  export type LayerConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LayerCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    type?: SortOrder
    config?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayerAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type LayerMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayerMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayerSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type LayerScalarRelationFilter = {
    is?: LayerWhereInput
    isNot?: LayerWhereInput
  }

  export type LayerConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    fromLayerId?: SortOrder
    toLayerId?: SortOrder
  }

  export type LayerConnectionAvgOrderByAggregateInput = {
    id?: SortOrder
    fromLayerId?: SortOrder
    toLayerId?: SortOrder
  }

  export type LayerConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    fromLayerId?: SortOrder
    toLayerId?: SortOrder
  }

  export type LayerConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    fromLayerId?: SortOrder
    toLayerId?: SortOrder
  }

  export type LayerConnectionSumOrderByAggregateInput = {
    id?: SortOrder
    fromLayerId?: SortOrder
    toLayerId?: SortOrder
  }

  export type ModelVersionCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    version?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelVersionAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type ModelVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelVersionMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelVersionSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrainingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    metrics?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
  }

  export type TrainingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingSessionSumOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type LayerCreateNestedManyWithoutSequentialModelInput = {
    create?: XOR<LayerCreateWithoutSequentialModelInput, LayerUncheckedCreateWithoutSequentialModelInput> | LayerCreateWithoutSequentialModelInput[] | LayerUncheckedCreateWithoutSequentialModelInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutSequentialModelInput | LayerCreateOrConnectWithoutSequentialModelInput[]
    createMany?: LayerCreateManySequentialModelInputEnvelope
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
  }

  export type ModelVersionCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelVersionCreateWithoutModelInput, ModelVersionUncheckedCreateWithoutModelInput> | ModelVersionCreateWithoutModelInput[] | ModelVersionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelVersionCreateOrConnectWithoutModelInput | ModelVersionCreateOrConnectWithoutModelInput[]
    createMany?: ModelVersionCreateManyModelInputEnvelope
    connect?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
  }

  export type TrainingSessionCreateNestedManyWithoutModelInput = {
    create?: XOR<TrainingSessionCreateWithoutModelInput, TrainingSessionUncheckedCreateWithoutModelInput> | TrainingSessionCreateWithoutModelInput[] | TrainingSessionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutModelInput | TrainingSessionCreateOrConnectWithoutModelInput[]
    createMany?: TrainingSessionCreateManyModelInputEnvelope
    connect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
  }

  export type LayerUncheckedCreateNestedManyWithoutSequentialModelInput = {
    create?: XOR<LayerCreateWithoutSequentialModelInput, LayerUncheckedCreateWithoutSequentialModelInput> | LayerCreateWithoutSequentialModelInput[] | LayerUncheckedCreateWithoutSequentialModelInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutSequentialModelInput | LayerCreateOrConnectWithoutSequentialModelInput[]
    createMany?: LayerCreateManySequentialModelInputEnvelope
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
  }

  export type ModelVersionUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelVersionCreateWithoutModelInput, ModelVersionUncheckedCreateWithoutModelInput> | ModelVersionCreateWithoutModelInput[] | ModelVersionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelVersionCreateOrConnectWithoutModelInput | ModelVersionCreateOrConnectWithoutModelInput[]
    createMany?: ModelVersionCreateManyModelInputEnvelope
    connect?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
  }

  export type TrainingSessionUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<TrainingSessionCreateWithoutModelInput, TrainingSessionUncheckedCreateWithoutModelInput> | TrainingSessionCreateWithoutModelInput[] | TrainingSessionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutModelInput | TrainingSessionCreateOrConnectWithoutModelInput[]
    createMany?: TrainingSessionCreateManyModelInputEnvelope
    connect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LayerUpdateManyWithoutSequentialModelNestedInput = {
    create?: XOR<LayerCreateWithoutSequentialModelInput, LayerUncheckedCreateWithoutSequentialModelInput> | LayerCreateWithoutSequentialModelInput[] | LayerUncheckedCreateWithoutSequentialModelInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutSequentialModelInput | LayerCreateOrConnectWithoutSequentialModelInput[]
    upsert?: LayerUpsertWithWhereUniqueWithoutSequentialModelInput | LayerUpsertWithWhereUniqueWithoutSequentialModelInput[]
    createMany?: LayerCreateManySequentialModelInputEnvelope
    set?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    disconnect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    delete?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    update?: LayerUpdateWithWhereUniqueWithoutSequentialModelInput | LayerUpdateWithWhereUniqueWithoutSequentialModelInput[]
    updateMany?: LayerUpdateManyWithWhereWithoutSequentialModelInput | LayerUpdateManyWithWhereWithoutSequentialModelInput[]
    deleteMany?: LayerScalarWhereInput | LayerScalarWhereInput[]
  }

  export type ModelVersionUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelVersionCreateWithoutModelInput, ModelVersionUncheckedCreateWithoutModelInput> | ModelVersionCreateWithoutModelInput[] | ModelVersionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelVersionCreateOrConnectWithoutModelInput | ModelVersionCreateOrConnectWithoutModelInput[]
    upsert?: ModelVersionUpsertWithWhereUniqueWithoutModelInput | ModelVersionUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ModelVersionCreateManyModelInputEnvelope
    set?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
    disconnect?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
    delete?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
    connect?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
    update?: ModelVersionUpdateWithWhereUniqueWithoutModelInput | ModelVersionUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ModelVersionUpdateManyWithWhereWithoutModelInput | ModelVersionUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ModelVersionScalarWhereInput | ModelVersionScalarWhereInput[]
  }

  export type TrainingSessionUpdateManyWithoutModelNestedInput = {
    create?: XOR<TrainingSessionCreateWithoutModelInput, TrainingSessionUncheckedCreateWithoutModelInput> | TrainingSessionCreateWithoutModelInput[] | TrainingSessionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutModelInput | TrainingSessionCreateOrConnectWithoutModelInput[]
    upsert?: TrainingSessionUpsertWithWhereUniqueWithoutModelInput | TrainingSessionUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: TrainingSessionCreateManyModelInputEnvelope
    set?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    disconnect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    delete?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    connect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    update?: TrainingSessionUpdateWithWhereUniqueWithoutModelInput | TrainingSessionUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: TrainingSessionUpdateManyWithWhereWithoutModelInput | TrainingSessionUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: TrainingSessionScalarWhereInput | TrainingSessionScalarWhereInput[]
  }

  export type LayerUncheckedUpdateManyWithoutSequentialModelNestedInput = {
    create?: XOR<LayerCreateWithoutSequentialModelInput, LayerUncheckedCreateWithoutSequentialModelInput> | LayerCreateWithoutSequentialModelInput[] | LayerUncheckedCreateWithoutSequentialModelInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutSequentialModelInput | LayerCreateOrConnectWithoutSequentialModelInput[]
    upsert?: LayerUpsertWithWhereUniqueWithoutSequentialModelInput | LayerUpsertWithWhereUniqueWithoutSequentialModelInput[]
    createMany?: LayerCreateManySequentialModelInputEnvelope
    set?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    disconnect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    delete?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    update?: LayerUpdateWithWhereUniqueWithoutSequentialModelInput | LayerUpdateWithWhereUniqueWithoutSequentialModelInput[]
    updateMany?: LayerUpdateManyWithWhereWithoutSequentialModelInput | LayerUpdateManyWithWhereWithoutSequentialModelInput[]
    deleteMany?: LayerScalarWhereInput | LayerScalarWhereInput[]
  }

  export type ModelVersionUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelVersionCreateWithoutModelInput, ModelVersionUncheckedCreateWithoutModelInput> | ModelVersionCreateWithoutModelInput[] | ModelVersionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelVersionCreateOrConnectWithoutModelInput | ModelVersionCreateOrConnectWithoutModelInput[]
    upsert?: ModelVersionUpsertWithWhereUniqueWithoutModelInput | ModelVersionUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ModelVersionCreateManyModelInputEnvelope
    set?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
    disconnect?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
    delete?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
    connect?: ModelVersionWhereUniqueInput | ModelVersionWhereUniqueInput[]
    update?: ModelVersionUpdateWithWhereUniqueWithoutModelInput | ModelVersionUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ModelVersionUpdateManyWithWhereWithoutModelInput | ModelVersionUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ModelVersionScalarWhereInput | ModelVersionScalarWhereInput[]
  }

  export type TrainingSessionUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<TrainingSessionCreateWithoutModelInput, TrainingSessionUncheckedCreateWithoutModelInput> | TrainingSessionCreateWithoutModelInput[] | TrainingSessionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutModelInput | TrainingSessionCreateOrConnectWithoutModelInput[]
    upsert?: TrainingSessionUpsertWithWhereUniqueWithoutModelInput | TrainingSessionUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: TrainingSessionCreateManyModelInputEnvelope
    set?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    disconnect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    delete?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    connect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    update?: TrainingSessionUpdateWithWhereUniqueWithoutModelInput | TrainingSessionUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: TrainingSessionUpdateManyWithWhereWithoutModelInput | TrainingSessionUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: TrainingSessionScalarWhereInput | TrainingSessionScalarWhereInput[]
  }

  export type SequentialModelCreateNestedOneWithoutLayersInput = {
    create?: XOR<SequentialModelCreateWithoutLayersInput, SequentialModelUncheckedCreateWithoutLayersInput>
    connectOrCreate?: SequentialModelCreateOrConnectWithoutLayersInput
    connect?: SequentialModelWhereUniqueInput
  }

  export type LayerConnectionCreateNestedManyWithoutFromLayerInput = {
    create?: XOR<LayerConnectionCreateWithoutFromLayerInput, LayerConnectionUncheckedCreateWithoutFromLayerInput> | LayerConnectionCreateWithoutFromLayerInput[] | LayerConnectionUncheckedCreateWithoutFromLayerInput[]
    connectOrCreate?: LayerConnectionCreateOrConnectWithoutFromLayerInput | LayerConnectionCreateOrConnectWithoutFromLayerInput[]
    createMany?: LayerConnectionCreateManyFromLayerInputEnvelope
    connect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
  }

  export type LayerConnectionCreateNestedManyWithoutToLayerInput = {
    create?: XOR<LayerConnectionCreateWithoutToLayerInput, LayerConnectionUncheckedCreateWithoutToLayerInput> | LayerConnectionCreateWithoutToLayerInput[] | LayerConnectionUncheckedCreateWithoutToLayerInput[]
    connectOrCreate?: LayerConnectionCreateOrConnectWithoutToLayerInput | LayerConnectionCreateOrConnectWithoutToLayerInput[]
    createMany?: LayerConnectionCreateManyToLayerInputEnvelope
    connect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
  }

  export type LayerConnectionUncheckedCreateNestedManyWithoutFromLayerInput = {
    create?: XOR<LayerConnectionCreateWithoutFromLayerInput, LayerConnectionUncheckedCreateWithoutFromLayerInput> | LayerConnectionCreateWithoutFromLayerInput[] | LayerConnectionUncheckedCreateWithoutFromLayerInput[]
    connectOrCreate?: LayerConnectionCreateOrConnectWithoutFromLayerInput | LayerConnectionCreateOrConnectWithoutFromLayerInput[]
    createMany?: LayerConnectionCreateManyFromLayerInputEnvelope
    connect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
  }

  export type LayerConnectionUncheckedCreateNestedManyWithoutToLayerInput = {
    create?: XOR<LayerConnectionCreateWithoutToLayerInput, LayerConnectionUncheckedCreateWithoutToLayerInput> | LayerConnectionCreateWithoutToLayerInput[] | LayerConnectionUncheckedCreateWithoutToLayerInput[]
    connectOrCreate?: LayerConnectionCreateOrConnectWithoutToLayerInput | LayerConnectionCreateOrConnectWithoutToLayerInput[]
    createMany?: LayerConnectionCreateManyToLayerInputEnvelope
    connect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SequentialModelUpdateOneRequiredWithoutLayersNestedInput = {
    create?: XOR<SequentialModelCreateWithoutLayersInput, SequentialModelUncheckedCreateWithoutLayersInput>
    connectOrCreate?: SequentialModelCreateOrConnectWithoutLayersInput
    upsert?: SequentialModelUpsertWithoutLayersInput
    connect?: SequentialModelWhereUniqueInput
    update?: XOR<XOR<SequentialModelUpdateToOneWithWhereWithoutLayersInput, SequentialModelUpdateWithoutLayersInput>, SequentialModelUncheckedUpdateWithoutLayersInput>
  }

  export type LayerConnectionUpdateManyWithoutFromLayerNestedInput = {
    create?: XOR<LayerConnectionCreateWithoutFromLayerInput, LayerConnectionUncheckedCreateWithoutFromLayerInput> | LayerConnectionCreateWithoutFromLayerInput[] | LayerConnectionUncheckedCreateWithoutFromLayerInput[]
    connectOrCreate?: LayerConnectionCreateOrConnectWithoutFromLayerInput | LayerConnectionCreateOrConnectWithoutFromLayerInput[]
    upsert?: LayerConnectionUpsertWithWhereUniqueWithoutFromLayerInput | LayerConnectionUpsertWithWhereUniqueWithoutFromLayerInput[]
    createMany?: LayerConnectionCreateManyFromLayerInputEnvelope
    set?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    disconnect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    delete?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    connect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    update?: LayerConnectionUpdateWithWhereUniqueWithoutFromLayerInput | LayerConnectionUpdateWithWhereUniqueWithoutFromLayerInput[]
    updateMany?: LayerConnectionUpdateManyWithWhereWithoutFromLayerInput | LayerConnectionUpdateManyWithWhereWithoutFromLayerInput[]
    deleteMany?: LayerConnectionScalarWhereInput | LayerConnectionScalarWhereInput[]
  }

  export type LayerConnectionUpdateManyWithoutToLayerNestedInput = {
    create?: XOR<LayerConnectionCreateWithoutToLayerInput, LayerConnectionUncheckedCreateWithoutToLayerInput> | LayerConnectionCreateWithoutToLayerInput[] | LayerConnectionUncheckedCreateWithoutToLayerInput[]
    connectOrCreate?: LayerConnectionCreateOrConnectWithoutToLayerInput | LayerConnectionCreateOrConnectWithoutToLayerInput[]
    upsert?: LayerConnectionUpsertWithWhereUniqueWithoutToLayerInput | LayerConnectionUpsertWithWhereUniqueWithoutToLayerInput[]
    createMany?: LayerConnectionCreateManyToLayerInputEnvelope
    set?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    disconnect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    delete?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    connect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    update?: LayerConnectionUpdateWithWhereUniqueWithoutToLayerInput | LayerConnectionUpdateWithWhereUniqueWithoutToLayerInput[]
    updateMany?: LayerConnectionUpdateManyWithWhereWithoutToLayerInput | LayerConnectionUpdateManyWithWhereWithoutToLayerInput[]
    deleteMany?: LayerConnectionScalarWhereInput | LayerConnectionScalarWhereInput[]
  }

  export type LayerConnectionUncheckedUpdateManyWithoutFromLayerNestedInput = {
    create?: XOR<LayerConnectionCreateWithoutFromLayerInput, LayerConnectionUncheckedCreateWithoutFromLayerInput> | LayerConnectionCreateWithoutFromLayerInput[] | LayerConnectionUncheckedCreateWithoutFromLayerInput[]
    connectOrCreate?: LayerConnectionCreateOrConnectWithoutFromLayerInput | LayerConnectionCreateOrConnectWithoutFromLayerInput[]
    upsert?: LayerConnectionUpsertWithWhereUniqueWithoutFromLayerInput | LayerConnectionUpsertWithWhereUniqueWithoutFromLayerInput[]
    createMany?: LayerConnectionCreateManyFromLayerInputEnvelope
    set?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    disconnect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    delete?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    connect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    update?: LayerConnectionUpdateWithWhereUniqueWithoutFromLayerInput | LayerConnectionUpdateWithWhereUniqueWithoutFromLayerInput[]
    updateMany?: LayerConnectionUpdateManyWithWhereWithoutFromLayerInput | LayerConnectionUpdateManyWithWhereWithoutFromLayerInput[]
    deleteMany?: LayerConnectionScalarWhereInput | LayerConnectionScalarWhereInput[]
  }

  export type LayerConnectionUncheckedUpdateManyWithoutToLayerNestedInput = {
    create?: XOR<LayerConnectionCreateWithoutToLayerInput, LayerConnectionUncheckedCreateWithoutToLayerInput> | LayerConnectionCreateWithoutToLayerInput[] | LayerConnectionUncheckedCreateWithoutToLayerInput[]
    connectOrCreate?: LayerConnectionCreateOrConnectWithoutToLayerInput | LayerConnectionCreateOrConnectWithoutToLayerInput[]
    upsert?: LayerConnectionUpsertWithWhereUniqueWithoutToLayerInput | LayerConnectionUpsertWithWhereUniqueWithoutToLayerInput[]
    createMany?: LayerConnectionCreateManyToLayerInputEnvelope
    set?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    disconnect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    delete?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    connect?: LayerConnectionWhereUniqueInput | LayerConnectionWhereUniqueInput[]
    update?: LayerConnectionUpdateWithWhereUniqueWithoutToLayerInput | LayerConnectionUpdateWithWhereUniqueWithoutToLayerInput[]
    updateMany?: LayerConnectionUpdateManyWithWhereWithoutToLayerInput | LayerConnectionUpdateManyWithWhereWithoutToLayerInput[]
    deleteMany?: LayerConnectionScalarWhereInput | LayerConnectionScalarWhereInput[]
  }

  export type LayerCreateNestedOneWithoutFromConnectionsInput = {
    create?: XOR<LayerCreateWithoutFromConnectionsInput, LayerUncheckedCreateWithoutFromConnectionsInput>
    connectOrCreate?: LayerCreateOrConnectWithoutFromConnectionsInput
    connect?: LayerWhereUniqueInput
  }

  export type LayerCreateNestedOneWithoutToConnectionsInput = {
    create?: XOR<LayerCreateWithoutToConnectionsInput, LayerUncheckedCreateWithoutToConnectionsInput>
    connectOrCreate?: LayerCreateOrConnectWithoutToConnectionsInput
    connect?: LayerWhereUniqueInput
  }

  export type LayerUpdateOneRequiredWithoutFromConnectionsNestedInput = {
    create?: XOR<LayerCreateWithoutFromConnectionsInput, LayerUncheckedCreateWithoutFromConnectionsInput>
    connectOrCreate?: LayerCreateOrConnectWithoutFromConnectionsInput
    upsert?: LayerUpsertWithoutFromConnectionsInput
    connect?: LayerWhereUniqueInput
    update?: XOR<XOR<LayerUpdateToOneWithWhereWithoutFromConnectionsInput, LayerUpdateWithoutFromConnectionsInput>, LayerUncheckedUpdateWithoutFromConnectionsInput>
  }

  export type LayerUpdateOneRequiredWithoutToConnectionsNestedInput = {
    create?: XOR<LayerCreateWithoutToConnectionsInput, LayerUncheckedCreateWithoutToConnectionsInput>
    connectOrCreate?: LayerCreateOrConnectWithoutToConnectionsInput
    upsert?: LayerUpsertWithoutToConnectionsInput
    connect?: LayerWhereUniqueInput
    update?: XOR<XOR<LayerUpdateToOneWithWhereWithoutToConnectionsInput, LayerUpdateWithoutToConnectionsInput>, LayerUncheckedUpdateWithoutToConnectionsInput>
  }

  export type SequentialModelCreateNestedOneWithoutVersionsInput = {
    create?: XOR<SequentialModelCreateWithoutVersionsInput, SequentialModelUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: SequentialModelCreateOrConnectWithoutVersionsInput
    connect?: SequentialModelWhereUniqueInput
  }

  export type SequentialModelUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<SequentialModelCreateWithoutVersionsInput, SequentialModelUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: SequentialModelCreateOrConnectWithoutVersionsInput
    upsert?: SequentialModelUpsertWithoutVersionsInput
    connect?: SequentialModelWhereUniqueInput
    update?: XOR<XOR<SequentialModelUpdateToOneWithWhereWithoutVersionsInput, SequentialModelUpdateWithoutVersionsInput>, SequentialModelUncheckedUpdateWithoutVersionsInput>
  }

  export type SequentialModelCreateNestedOneWithoutTrainingsInput = {
    create?: XOR<SequentialModelCreateWithoutTrainingsInput, SequentialModelUncheckedCreateWithoutTrainingsInput>
    connectOrCreate?: SequentialModelCreateOrConnectWithoutTrainingsInput
    connect?: SequentialModelWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SequentialModelUpdateOneRequiredWithoutTrainingsNestedInput = {
    create?: XOR<SequentialModelCreateWithoutTrainingsInput, SequentialModelUncheckedCreateWithoutTrainingsInput>
    connectOrCreate?: SequentialModelCreateOrConnectWithoutTrainingsInput
    upsert?: SequentialModelUpsertWithoutTrainingsInput
    connect?: SequentialModelWhereUniqueInput
    update?: XOR<XOR<SequentialModelUpdateToOneWithWhereWithoutTrainingsInput, SequentialModelUpdateWithoutTrainingsInput>, SequentialModelUncheckedUpdateWithoutTrainingsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type LayerCreateWithoutSequentialModelInput = {
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromConnections?: LayerConnectionCreateNestedManyWithoutFromLayerInput
    toConnections?: LayerConnectionCreateNestedManyWithoutToLayerInput
  }

  export type LayerUncheckedCreateWithoutSequentialModelInput = {
    id?: number
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromConnections?: LayerConnectionUncheckedCreateNestedManyWithoutFromLayerInput
    toConnections?: LayerConnectionUncheckedCreateNestedManyWithoutToLayerInput
  }

  export type LayerCreateOrConnectWithoutSequentialModelInput = {
    where: LayerWhereUniqueInput
    create: XOR<LayerCreateWithoutSequentialModelInput, LayerUncheckedCreateWithoutSequentialModelInput>
  }

  export type LayerCreateManySequentialModelInputEnvelope = {
    data: LayerCreateManySequentialModelInput | LayerCreateManySequentialModelInput[]
    skipDuplicates?: boolean
  }

  export type ModelVersionCreateWithoutModelInput = {
    version: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ModelVersionUncheckedCreateWithoutModelInput = {
    id?: number
    version: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ModelVersionCreateOrConnectWithoutModelInput = {
    where: ModelVersionWhereUniqueInput
    create: XOR<ModelVersionCreateWithoutModelInput, ModelVersionUncheckedCreateWithoutModelInput>
  }

  export type ModelVersionCreateManyModelInputEnvelope = {
    data: ModelVersionCreateManyModelInput | ModelVersionCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type TrainingSessionCreateWithoutModelInput = {
    status: string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: number | null
    createdAt?: Date | string
  }

  export type TrainingSessionUncheckedCreateWithoutModelInput = {
    id?: number
    status: string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: number | null
    createdAt?: Date | string
  }

  export type TrainingSessionCreateOrConnectWithoutModelInput = {
    where: TrainingSessionWhereUniqueInput
    create: XOR<TrainingSessionCreateWithoutModelInput, TrainingSessionUncheckedCreateWithoutModelInput>
  }

  export type TrainingSessionCreateManyModelInputEnvelope = {
    data: TrainingSessionCreateManyModelInput | TrainingSessionCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type LayerUpsertWithWhereUniqueWithoutSequentialModelInput = {
    where: LayerWhereUniqueInput
    update: XOR<LayerUpdateWithoutSequentialModelInput, LayerUncheckedUpdateWithoutSequentialModelInput>
    create: XOR<LayerCreateWithoutSequentialModelInput, LayerUncheckedCreateWithoutSequentialModelInput>
  }

  export type LayerUpdateWithWhereUniqueWithoutSequentialModelInput = {
    where: LayerWhereUniqueInput
    data: XOR<LayerUpdateWithoutSequentialModelInput, LayerUncheckedUpdateWithoutSequentialModelInput>
  }

  export type LayerUpdateManyWithWhereWithoutSequentialModelInput = {
    where: LayerScalarWhereInput
    data: XOR<LayerUpdateManyMutationInput, LayerUncheckedUpdateManyWithoutSequentialModelInput>
  }

  export type LayerScalarWhereInput = {
    AND?: LayerScalarWhereInput | LayerScalarWhereInput[]
    OR?: LayerScalarWhereInput[]
    NOT?: LayerScalarWhereInput | LayerScalarWhereInput[]
    id?: IntFilter<"Layer"> | number
    modelId?: UuidFilter<"Layer"> | string
    type?: StringFilter<"Layer"> | string
    config?: JsonFilter<"Layer">
    order?: IntFilter<"Layer"> | number
    createdAt?: DateTimeFilter<"Layer"> | Date | string
    updatedAt?: DateTimeFilter<"Layer"> | Date | string
  }

  export type ModelVersionUpsertWithWhereUniqueWithoutModelInput = {
    where: ModelVersionWhereUniqueInput
    update: XOR<ModelVersionUpdateWithoutModelInput, ModelVersionUncheckedUpdateWithoutModelInput>
    create: XOR<ModelVersionCreateWithoutModelInput, ModelVersionUncheckedCreateWithoutModelInput>
  }

  export type ModelVersionUpdateWithWhereUniqueWithoutModelInput = {
    where: ModelVersionWhereUniqueInput
    data: XOR<ModelVersionUpdateWithoutModelInput, ModelVersionUncheckedUpdateWithoutModelInput>
  }

  export type ModelVersionUpdateManyWithWhereWithoutModelInput = {
    where: ModelVersionScalarWhereInput
    data: XOR<ModelVersionUpdateManyMutationInput, ModelVersionUncheckedUpdateManyWithoutModelInput>
  }

  export type ModelVersionScalarWhereInput = {
    AND?: ModelVersionScalarWhereInput | ModelVersionScalarWhereInput[]
    OR?: ModelVersionScalarWhereInput[]
    NOT?: ModelVersionScalarWhereInput | ModelVersionScalarWhereInput[]
    id?: IntFilter<"ModelVersion"> | number
    modelId?: UuidFilter<"ModelVersion"> | string
    version?: IntFilter<"ModelVersion"> | number
    snapshot?: JsonFilter<"ModelVersion">
    createdAt?: DateTimeFilter<"ModelVersion"> | Date | string
  }

  export type TrainingSessionUpsertWithWhereUniqueWithoutModelInput = {
    where: TrainingSessionWhereUniqueInput
    update: XOR<TrainingSessionUpdateWithoutModelInput, TrainingSessionUncheckedUpdateWithoutModelInput>
    create: XOR<TrainingSessionCreateWithoutModelInput, TrainingSessionUncheckedCreateWithoutModelInput>
  }

  export type TrainingSessionUpdateWithWhereUniqueWithoutModelInput = {
    where: TrainingSessionWhereUniqueInput
    data: XOR<TrainingSessionUpdateWithoutModelInput, TrainingSessionUncheckedUpdateWithoutModelInput>
  }

  export type TrainingSessionUpdateManyWithWhereWithoutModelInput = {
    where: TrainingSessionScalarWhereInput
    data: XOR<TrainingSessionUpdateManyMutationInput, TrainingSessionUncheckedUpdateManyWithoutModelInput>
  }

  export type TrainingSessionScalarWhereInput = {
    AND?: TrainingSessionScalarWhereInput | TrainingSessionScalarWhereInput[]
    OR?: TrainingSessionScalarWhereInput[]
    NOT?: TrainingSessionScalarWhereInput | TrainingSessionScalarWhereInput[]
    id?: IntFilter<"TrainingSession"> | number
    modelId?: UuidFilter<"TrainingSession"> | string
    status?: StringFilter<"TrainingSession"> | string
    metrics?: JsonNullableFilter<"TrainingSession">
    cost?: FloatNullableFilter<"TrainingSession"> | number | null
    createdAt?: DateTimeFilter<"TrainingSession"> | Date | string
  }

  export type SequentialModelCreateWithoutLayersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
    versions?: ModelVersionCreateNestedManyWithoutModelInput
    trainings?: TrainingSessionCreateNestedManyWithoutModelInput
  }

  export type SequentialModelUncheckedCreateWithoutLayersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
    versions?: ModelVersionUncheckedCreateNestedManyWithoutModelInput
    trainings?: TrainingSessionUncheckedCreateNestedManyWithoutModelInput
  }

  export type SequentialModelCreateOrConnectWithoutLayersInput = {
    where: SequentialModelWhereUniqueInput
    create: XOR<SequentialModelCreateWithoutLayersInput, SequentialModelUncheckedCreateWithoutLayersInput>
  }

  export type LayerConnectionCreateWithoutFromLayerInput = {
    toLayer: LayerCreateNestedOneWithoutToConnectionsInput
  }

  export type LayerConnectionUncheckedCreateWithoutFromLayerInput = {
    id?: number
    toLayerId: number
  }

  export type LayerConnectionCreateOrConnectWithoutFromLayerInput = {
    where: LayerConnectionWhereUniqueInput
    create: XOR<LayerConnectionCreateWithoutFromLayerInput, LayerConnectionUncheckedCreateWithoutFromLayerInput>
  }

  export type LayerConnectionCreateManyFromLayerInputEnvelope = {
    data: LayerConnectionCreateManyFromLayerInput | LayerConnectionCreateManyFromLayerInput[]
    skipDuplicates?: boolean
  }

  export type LayerConnectionCreateWithoutToLayerInput = {
    fromLayer: LayerCreateNestedOneWithoutFromConnectionsInput
  }

  export type LayerConnectionUncheckedCreateWithoutToLayerInput = {
    id?: number
    fromLayerId: number
  }

  export type LayerConnectionCreateOrConnectWithoutToLayerInput = {
    where: LayerConnectionWhereUniqueInput
    create: XOR<LayerConnectionCreateWithoutToLayerInput, LayerConnectionUncheckedCreateWithoutToLayerInput>
  }

  export type LayerConnectionCreateManyToLayerInputEnvelope = {
    data: LayerConnectionCreateManyToLayerInput | LayerConnectionCreateManyToLayerInput[]
    skipDuplicates?: boolean
  }

  export type SequentialModelUpsertWithoutLayersInput = {
    update: XOR<SequentialModelUpdateWithoutLayersInput, SequentialModelUncheckedUpdateWithoutLayersInput>
    create: XOR<SequentialModelCreateWithoutLayersInput, SequentialModelUncheckedCreateWithoutLayersInput>
    where?: SequentialModelWhereInput
  }

  export type SequentialModelUpdateToOneWithWhereWithoutLayersInput = {
    where?: SequentialModelWhereInput
    data: XOR<SequentialModelUpdateWithoutLayersInput, SequentialModelUncheckedUpdateWithoutLayersInput>
  }

  export type SequentialModelUpdateWithoutLayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    versions?: ModelVersionUpdateManyWithoutModelNestedInput
    trainings?: TrainingSessionUpdateManyWithoutModelNestedInput
  }

  export type SequentialModelUncheckedUpdateWithoutLayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    versions?: ModelVersionUncheckedUpdateManyWithoutModelNestedInput
    trainings?: TrainingSessionUncheckedUpdateManyWithoutModelNestedInput
  }

  export type LayerConnectionUpsertWithWhereUniqueWithoutFromLayerInput = {
    where: LayerConnectionWhereUniqueInput
    update: XOR<LayerConnectionUpdateWithoutFromLayerInput, LayerConnectionUncheckedUpdateWithoutFromLayerInput>
    create: XOR<LayerConnectionCreateWithoutFromLayerInput, LayerConnectionUncheckedCreateWithoutFromLayerInput>
  }

  export type LayerConnectionUpdateWithWhereUniqueWithoutFromLayerInput = {
    where: LayerConnectionWhereUniqueInput
    data: XOR<LayerConnectionUpdateWithoutFromLayerInput, LayerConnectionUncheckedUpdateWithoutFromLayerInput>
  }

  export type LayerConnectionUpdateManyWithWhereWithoutFromLayerInput = {
    where: LayerConnectionScalarWhereInput
    data: XOR<LayerConnectionUpdateManyMutationInput, LayerConnectionUncheckedUpdateManyWithoutFromLayerInput>
  }

  export type LayerConnectionScalarWhereInput = {
    AND?: LayerConnectionScalarWhereInput | LayerConnectionScalarWhereInput[]
    OR?: LayerConnectionScalarWhereInput[]
    NOT?: LayerConnectionScalarWhereInput | LayerConnectionScalarWhereInput[]
    id?: IntFilter<"LayerConnection"> | number
    fromLayerId?: IntFilter<"LayerConnection"> | number
    toLayerId?: IntFilter<"LayerConnection"> | number
  }

  export type LayerConnectionUpsertWithWhereUniqueWithoutToLayerInput = {
    where: LayerConnectionWhereUniqueInput
    update: XOR<LayerConnectionUpdateWithoutToLayerInput, LayerConnectionUncheckedUpdateWithoutToLayerInput>
    create: XOR<LayerConnectionCreateWithoutToLayerInput, LayerConnectionUncheckedCreateWithoutToLayerInput>
  }

  export type LayerConnectionUpdateWithWhereUniqueWithoutToLayerInput = {
    where: LayerConnectionWhereUniqueInput
    data: XOR<LayerConnectionUpdateWithoutToLayerInput, LayerConnectionUncheckedUpdateWithoutToLayerInput>
  }

  export type LayerConnectionUpdateManyWithWhereWithoutToLayerInput = {
    where: LayerConnectionScalarWhereInput
    data: XOR<LayerConnectionUpdateManyMutationInput, LayerConnectionUncheckedUpdateManyWithoutToLayerInput>
  }

  export type LayerCreateWithoutFromConnectionsInput = {
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sequentialModel: SequentialModelCreateNestedOneWithoutLayersInput
    toConnections?: LayerConnectionCreateNestedManyWithoutToLayerInput
  }

  export type LayerUncheckedCreateWithoutFromConnectionsInput = {
    id?: number
    modelId: string
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    toConnections?: LayerConnectionUncheckedCreateNestedManyWithoutToLayerInput
  }

  export type LayerCreateOrConnectWithoutFromConnectionsInput = {
    where: LayerWhereUniqueInput
    create: XOR<LayerCreateWithoutFromConnectionsInput, LayerUncheckedCreateWithoutFromConnectionsInput>
  }

  export type LayerCreateWithoutToConnectionsInput = {
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sequentialModel: SequentialModelCreateNestedOneWithoutLayersInput
    fromConnections?: LayerConnectionCreateNestedManyWithoutFromLayerInput
  }

  export type LayerUncheckedCreateWithoutToConnectionsInput = {
    id?: number
    modelId: string
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromConnections?: LayerConnectionUncheckedCreateNestedManyWithoutFromLayerInput
  }

  export type LayerCreateOrConnectWithoutToConnectionsInput = {
    where: LayerWhereUniqueInput
    create: XOR<LayerCreateWithoutToConnectionsInput, LayerUncheckedCreateWithoutToConnectionsInput>
  }

  export type LayerUpsertWithoutFromConnectionsInput = {
    update: XOR<LayerUpdateWithoutFromConnectionsInput, LayerUncheckedUpdateWithoutFromConnectionsInput>
    create: XOR<LayerCreateWithoutFromConnectionsInput, LayerUncheckedCreateWithoutFromConnectionsInput>
    where?: LayerWhereInput
  }

  export type LayerUpdateToOneWithWhereWithoutFromConnectionsInput = {
    where?: LayerWhereInput
    data: XOR<LayerUpdateWithoutFromConnectionsInput, LayerUncheckedUpdateWithoutFromConnectionsInput>
  }

  export type LayerUpdateWithoutFromConnectionsInput = {
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequentialModel?: SequentialModelUpdateOneRequiredWithoutLayersNestedInput
    toConnections?: LayerConnectionUpdateManyWithoutToLayerNestedInput
  }

  export type LayerUncheckedUpdateWithoutFromConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toConnections?: LayerConnectionUncheckedUpdateManyWithoutToLayerNestedInput
  }

  export type LayerUpsertWithoutToConnectionsInput = {
    update: XOR<LayerUpdateWithoutToConnectionsInput, LayerUncheckedUpdateWithoutToConnectionsInput>
    create: XOR<LayerCreateWithoutToConnectionsInput, LayerUncheckedCreateWithoutToConnectionsInput>
    where?: LayerWhereInput
  }

  export type LayerUpdateToOneWithWhereWithoutToConnectionsInput = {
    where?: LayerWhereInput
    data: XOR<LayerUpdateWithoutToConnectionsInput, LayerUncheckedUpdateWithoutToConnectionsInput>
  }

  export type LayerUpdateWithoutToConnectionsInput = {
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequentialModel?: SequentialModelUpdateOneRequiredWithoutLayersNestedInput
    fromConnections?: LayerConnectionUpdateManyWithoutFromLayerNestedInput
  }

  export type LayerUncheckedUpdateWithoutToConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromConnections?: LayerConnectionUncheckedUpdateManyWithoutFromLayerNestedInput
  }

  export type SequentialModelCreateWithoutVersionsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
    layers?: LayerCreateNestedManyWithoutSequentialModelInput
    trainings?: TrainingSessionCreateNestedManyWithoutModelInput
  }

  export type SequentialModelUncheckedCreateWithoutVersionsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
    layers?: LayerUncheckedCreateNestedManyWithoutSequentialModelInput
    trainings?: TrainingSessionUncheckedCreateNestedManyWithoutModelInput
  }

  export type SequentialModelCreateOrConnectWithoutVersionsInput = {
    where: SequentialModelWhereUniqueInput
    create: XOR<SequentialModelCreateWithoutVersionsInput, SequentialModelUncheckedCreateWithoutVersionsInput>
  }

  export type SequentialModelUpsertWithoutVersionsInput = {
    update: XOR<SequentialModelUpdateWithoutVersionsInput, SequentialModelUncheckedUpdateWithoutVersionsInput>
    create: XOR<SequentialModelCreateWithoutVersionsInput, SequentialModelUncheckedCreateWithoutVersionsInput>
    where?: SequentialModelWhereInput
  }

  export type SequentialModelUpdateToOneWithWhereWithoutVersionsInput = {
    where?: SequentialModelWhereInput
    data: XOR<SequentialModelUpdateWithoutVersionsInput, SequentialModelUncheckedUpdateWithoutVersionsInput>
  }

  export type SequentialModelUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    layers?: LayerUpdateManyWithoutSequentialModelNestedInput
    trainings?: TrainingSessionUpdateManyWithoutModelNestedInput
  }

  export type SequentialModelUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    layers?: LayerUncheckedUpdateManyWithoutSequentialModelNestedInput
    trainings?: TrainingSessionUncheckedUpdateManyWithoutModelNestedInput
  }

  export type SequentialModelCreateWithoutTrainingsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
    layers?: LayerCreateNestedManyWithoutSequentialModelInput
    versions?: ModelVersionCreateNestedManyWithoutModelInput
  }

  export type SequentialModelUncheckedCreateWithoutTrainingsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    public?: boolean
    userId: string
    layers?: LayerUncheckedCreateNestedManyWithoutSequentialModelInput
    versions?: ModelVersionUncheckedCreateNestedManyWithoutModelInput
  }

  export type SequentialModelCreateOrConnectWithoutTrainingsInput = {
    where: SequentialModelWhereUniqueInput
    create: XOR<SequentialModelCreateWithoutTrainingsInput, SequentialModelUncheckedCreateWithoutTrainingsInput>
  }

  export type SequentialModelUpsertWithoutTrainingsInput = {
    update: XOR<SequentialModelUpdateWithoutTrainingsInput, SequentialModelUncheckedUpdateWithoutTrainingsInput>
    create: XOR<SequentialModelCreateWithoutTrainingsInput, SequentialModelUncheckedCreateWithoutTrainingsInput>
    where?: SequentialModelWhereInput
  }

  export type SequentialModelUpdateToOneWithWhereWithoutTrainingsInput = {
    where?: SequentialModelWhereInput
    data: XOR<SequentialModelUpdateWithoutTrainingsInput, SequentialModelUncheckedUpdateWithoutTrainingsInput>
  }

  export type SequentialModelUpdateWithoutTrainingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    layers?: LayerUpdateManyWithoutSequentialModelNestedInput
    versions?: ModelVersionUpdateManyWithoutModelNestedInput
  }

  export type SequentialModelUncheckedUpdateWithoutTrainingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    layers?: LayerUncheckedUpdateManyWithoutSequentialModelNestedInput
    versions?: ModelVersionUncheckedUpdateManyWithoutModelNestedInput
  }

  export type LayerCreateManySequentialModelInput = {
    id?: number
    type: string
    config: JsonNullValueInput | InputJsonValue
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelVersionCreateManyModelInput = {
    id?: number
    version: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TrainingSessionCreateManyModelInput = {
    id?: number
    status: string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: number | null
    createdAt?: Date | string
  }

  export type LayerUpdateWithoutSequentialModelInput = {
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromConnections?: LayerConnectionUpdateManyWithoutFromLayerNestedInput
    toConnections?: LayerConnectionUpdateManyWithoutToLayerNestedInput
  }

  export type LayerUncheckedUpdateWithoutSequentialModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromConnections?: LayerConnectionUncheckedUpdateManyWithoutFromLayerNestedInput
    toConnections?: LayerConnectionUncheckedUpdateManyWithoutToLayerNestedInput
  }

  export type LayerUncheckedUpdateManyWithoutSequentialModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelVersionUpdateWithoutModelInput = {
    version?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelVersionUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelVersionUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingSessionUpdateWithoutModelInput = {
    status?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingSessionUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingSessionUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayerConnectionCreateManyFromLayerInput = {
    id?: number
    toLayerId: number
  }

  export type LayerConnectionCreateManyToLayerInput = {
    id?: number
    fromLayerId: number
  }

  export type LayerConnectionUpdateWithoutFromLayerInput = {
    toLayer?: LayerUpdateOneRequiredWithoutToConnectionsNestedInput
  }

  export type LayerConnectionUncheckedUpdateWithoutFromLayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    toLayerId?: IntFieldUpdateOperationsInput | number
  }

  export type LayerConnectionUncheckedUpdateManyWithoutFromLayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    toLayerId?: IntFieldUpdateOperationsInput | number
  }

  export type LayerConnectionUpdateWithoutToLayerInput = {
    fromLayer?: LayerUpdateOneRequiredWithoutFromConnectionsNestedInput
  }

  export type LayerConnectionUncheckedUpdateWithoutToLayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromLayerId?: IntFieldUpdateOperationsInput | number
  }

  export type LayerConnectionUncheckedUpdateManyWithoutToLayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromLayerId?: IntFieldUpdateOperationsInput | number
  }



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