<template><v-layout column>
  <v-flex xs6 offset-x3>
    <panel title = "Songs">
      <v-btn class = "cyan accent-2"
      slot = "action"
      @click = "navigateTo({name: 'songs-create'})"
      fab
      light
      medium
      absolute
      right
      middle>
      <v-icon>add</v-icon>
      </v-btn>

        <div v-for ="song in songs"
        class = "song"
        :key = "song.id">

        <v-layout>
          <v-flex xs6>
            <div class = "song-title">
              {{song.title}}
            </div>
            <div class = "song-artist">
              {{song.artist}}
            </div>
            <div class = "song-genre">
              {{song.genre}}
            </div>
            <v-btn
            dark
            class = "cyan"
            @click = "navigateTo({
            name: 'song',
            params: {
            songId: song.id
            }
            })">
            View

            </v-btn>
          </v-flex>

          <v-flex xs6>
            <img class = "album-image" :src="song.abumImage"/>
          </v-flex>
       </v-layout>
        </div>
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

.song {
  padding: 20px;
  height: 330px;
  overflox: hidden;
}
.song-title{
  font-size:30px
}
.song-artist{
  font-size:24px
}
.song-genre{
  font-size:18px
}
.album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
