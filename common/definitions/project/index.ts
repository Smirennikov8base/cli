/**
 * Must be send to different git repository, cause server use it too
 */

import { IFunctionHandler } from "./handler";
import { TriggerDefinition } from './trigger';
import { WebhookDefinition } from "./webhook";

export enum FunctionType {
  resolver = "resolver",
  trigger = "trigger",
  webhook = "webhook"
}

export enum GraphQlFunctionType {
  Mutation = "Mutation",
  Query = "Query",
  NotGraphQl = "NoGraphQL"
}

export interface FunctionDefinition {
  name: string;

  handler: IFunctionHandler;

  type: FunctionType;

  gqlType?: GraphQlFunctionType;

  gqlschemaPath: string;

  environments?: Map<string, string>;
}

export interface ProjectDefinition {

  name: string;
  functions: FunctionDefinition[];
  triggers: TriggerDefinition[];
  webhooks: WebhookDefinition[];
  rootPath: string;
  gqlSchema: string;
}

export * from "./handler";
export * from "./trigger";
export * from "./webhook";