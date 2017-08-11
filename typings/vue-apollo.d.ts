
declare module "vue-apollo" {
  import { ApolloClient } from 'apollo-client';
  import Vue, { PluginObject, PluginFunction } from 'vue';

  export const addGraphQLSubscriptions: {};

  class VueApollo implements PluginObject<{}> {
    [key: string]: any;
    install: PluginFunction<{}>;
    constructor (options: { defaultClient: ApolloClient });
    static install (pVue: typeof Vue, options?: {} | undefined): void;
  }
  export default VueApollo;
}
