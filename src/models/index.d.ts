import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SitesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Sites {
  readonly id: string;
  readonly name: string;
  readonly type?: string;
  readonly likes: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sites, SitesMetaData>);
  static copyOf(source: Sites, mutator: (draft: MutableModel<Sites, SitesMetaData>) => MutableModel<Sites, SitesMetaData> | void): Sites;
}