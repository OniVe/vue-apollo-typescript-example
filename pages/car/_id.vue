<template>
  <div v-if="Car">
    <h3>{{ Car.make }} {{ Car.model }}</h3>
    <p>{{ formatCurrency(Car.price) }}</p>
    <img :src="Car.photoURL" :alt="`${Car.model} photo`">
    <p>
      <nuxt-link to="/">Home page</nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from '~/plugins/nuxt-class-component'

import { CarFieldsFragment, CarQueryVariables } from '~/apollo/schema'
import gqlCar from '~/apollo/queries/Car.gql'

@Component({})
export default class CarPage extends Vue {

  Car: CarFieldsFragment | null = null

  get apollo () {
    return {
      Car: {
        query: gqlCar,
        prefetch: ({ route }) => ({ id: route.params.id }),
        variables (): CarQueryVariables {
          return { id: this.$route.params.id }
        }
      }
    }
  }

  head () {
    return {
      title: (this.Car ? `${this.Car.make} ${this.Car.model}` : 'Loading')
    }
  }

  formatCurrency (num) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
    return formatter.format(num)
  }
}
</script>

<style>
img {
  max-width: 600px;
}
</style>
