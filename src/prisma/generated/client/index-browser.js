
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EmployeeScalarFieldEnum = {
  employee_id: 'employee_id',
  name: 'name',
  password: 'password',
  sector: 'sector'
};

exports.Prisma.MoldScalarFieldEnum = {
  mold_id: 'mold_id',
  name: 'name',
  total_weight: 'total_weight',
  channel_return_weight: 'channel_return_weight',
  channel_lost_percentage: 'channel_lost_percentage',
  mold_aluminium_loss: 'mold_aluminium_loss'
};

exports.Prisma.PieceScalarFieldEnum = {
  piece_id: 'piece_id',
  name: 'name',
  size: 'size',
  gross_weight: 'gross_weight',
  net_weight: 'net_weight',
  handle_type: 'handle_type',
  splinter_lost_percentage: 'splinter_lost_percentage',
  splinter: 'splinter'
};

exports.Prisma.Mold_PieceScalarFieldEnum = {
  mold_piece_id: 'mold_piece_id',
  mold_fk: 'mold_fk',
  piece_fk: 'piece_fk',
  cavity: 'cavity'
};

exports.Prisma.Production_OrderScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Employee: 'Employee',
  Mold: 'Mold',
  Piece: 'Piece',
  Mold_Piece: 'Mold_Piece',
  Production_Order: 'Production_Order'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
