<template>
  <div>
    <h3>Cars</h3>
    <ul>
      <li v-for="car in allCars" :key="car.id">
        <nuxt-link :to="`car/${car.id}`">
          {{ car.year }} {{ car.make }} {{ car.model }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from '~/plugins/nuxt-class-component'

import { AllCars } from '~/apollo/schema'
import gqlAllCars from '~/apollo/queries/AllCars.graphql'

@Component({})
export default class IndexPage extends Vue {

  head = {
    title: 'Cars with Apollo'
  }

  allCars: AllCars.AllCars[] = []

  get apollo () {
    return {
      allCars: {
        query: gqlAllCars,
        prefetch: true
      }
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: #3498DB;
}

a:hover {
  border-bottom: 1px solid;
}
</style>
