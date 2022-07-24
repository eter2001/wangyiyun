<template>
  <div class="search">
    <SearchTop></SearchTop>
    <List></List>
    <MusicZone></MusicZone>
  </div>
</template>
<script>
import SearchTop from "../components/Search/SearchTop.vue";
import List from "../components/Search/List.vue";
import MusicZone from "../components/Search/MusicZone.vue";
export default {
  setup() {},
  components: {
    SearchTop,
    List,
    MusicZone
  },
};
</script>