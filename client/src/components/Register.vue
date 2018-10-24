<template>
<v-layout column>
  <v-flex xs6 offset-x3>
    <panel title = "Register">
    <v-text-field
    v-model = "email"
    label = "Email"></v-text-field>
    <br/>
    <v-text-field
    label = "Password"
    type = "password"
    v-model = "password"></v-text-field>
    <br/>
    <div class = "error" v-html = "error"/>
    <br/>
    <v-btn class = "cyan"
    dark
    @click="register">
    Register
    </v-btn>
  </panel>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}

</script>

<style scoped>
.error{
  color:red;
}
</style>
