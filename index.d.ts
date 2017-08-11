declare module '*.vue' {
  import Vue from 'vue'
  export default typeof Vue
}

declare module "*.gql" {
  import { DocumentNode } from 'graphql'

  const content: DocumentNode
  export default content
}

declare module "*.graphql" {
  import { DocumentNode } from 'graphql'

  const content: DocumentNode
  export default content
}
