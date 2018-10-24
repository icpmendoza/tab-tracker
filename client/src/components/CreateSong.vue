<template>
<v-layout>
<v-flex xs4>
  <panel title = "Song Metadata">
     <v-text-field
    v-model = "song.title"
    required
    :rules = "[required]"
    label = "Title"></v-text-field>

    <v-text-field
    v-model = "song.artist"
    required
    :rules = "[required]"
    label = "Artist"></v-text-field>

    <v-text-field
    v-model = "song.genre"
    required
    :rules = "[required]"
    label = "Genre"></v-text-field>

    <v-text-field
    v-model = "song.album"
    required
    :rules = "[required]"
    label = "Album"></v-text-field>

    <v-text-field
    v-model = "song.abumImage"
    required
    :rules = "[required]"
    label = "Album Image Url"></v-text-field>

    <v-text-field
    v-model = "song.youtubeId"
    required
    :rules = "[required]"
    label = "Youtube Id"></v-text-field>
  </panel>
</v-flex>

  <v-flex xs8>
    <panel title = "Song Structure" class = "ml-2">
    <v-text-field
    v-model = "song.lyrics"
    required
    :rules = "[required]"
    multi-line
    label = "Lyrics"></v-text-field>
    <v-text-field
    v-model = "song.tab"
    required
    :rules = "[required]"
    multi-line
    label = "Tab"></v-text-field>
  </panel>
    <div class = "danger-alert" v-if = "error">
    {{error}}
    </div>
    <v-btn class = "cyan"
    dark
    @click="create">
    Create Song
    </v-btn>

  </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        abumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
