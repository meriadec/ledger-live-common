// @flow

import type { CryptoCurrency, Unit } from "./currencies";

import type { OperationRaw, Operation } from "./operation";

export type Address = {
  str: string,
  path: string
};

export type AccountRaw = {
  // unique account identifier
  id: string,

  // account xpub
  xpub: string,

  // account path on the device
  path: string,

  // next receive address
  freshAddress: string,
  freshAddressPath: string,

  // account name
  name: string,

  // whether or not the account is segwit (useful to not re-parse path everytime)
  isSegwit: boolean,

  // account balance in satoshi
  balance: number,

  // the last block height currently synchronized
  blockHeight: number,

  // whether or not the account is archived
  archived: boolean,

  // ------------------------------------- Specific raw fields

  // account currency id
  currencyId: string,

  // list of operations
  operations: OperationRaw[],

  // user preferred magnitude. used to recover the account.unit
  unitMagnitude: number,

  // used to know when the last sync happened
  lastSyncDate: string
};

export type Account = {
  // unique account identifier
  id: string,

  // account xpub
  xpub: string,

  // account path on the device
  path: string,

  // next receive address
  freshAddress: string,
  freshAddressPath: string,

  // account name
  name: string,

  // whether or not the account is segwit (useful to not re-parse path everytime)
  isSegwit: boolean,

  // account balance in satoshi
  balance: number,

  // the last block height currently synchronized
  blockHeight: number,

  // whether or not the account is archived
  archived: boolean,

  // ------------------------------------- Specific account fields

  // currency of this account
  currency: CryptoCurrency,

  // lazy list of operations. potentially big & uncomplete list.
  operations: Operation[],

  // user preferred unit to use. unit is coming from currency.units. You can assume currency.units.indexOf(unit) will work. (make sure to preserve reference)
  unit: Unit,

  // used to know when the last sync happened
  lastSyncDate: Date
};
