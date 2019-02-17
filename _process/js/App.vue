<template>
  <div class="position-relative d-flex ml-2" style="z-index: 100">
    <div class="container py-2">
      <div class="row justify-content-center">
        <div class="input-group">
          <input
            type="text"
            id="searchinput"
            v-model="query"
            class="form-control text-white border-right-0 border"
            :class="[isActive ? 'wide' : 'short']"
            @focus="isActive=true"
            @blur="isActive=false"
            ref="searchinput"
            style="background: transparent;"
            aria-describedby="searchinput"
            autocomplete="off"
          >
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary border-left-0 border text-white"
              style="background-color: transparent"
              type="button"
              @click="$refs.searchinput.focus()"
              id="button-addon2"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="query" class="position-absolute row justify-content-center" style="top: 47px;">
      <div class="card">
        <ul class="list-group list-group-flush px-0" v-for="(item, index) in queried" :key="index">
          <li class="list-group-item">
            <a :href="item.url" class="d-flex text-secondary">
              <span class="pr-2" v-html="item.icon"></span>
              <span v-html="item.title"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      query: null,
      content: [],
      isActive: false
    };
  },
  methods: {
    displaySearch: function() {
      $(".dropdown-menu").dropdown("toggle");
    }
  },
  computed: {
    queried: function() {
      return this.content.filter(item => {
        return (
          item.title.toLowerCase().match(this.query.toLowerCase()) ||
          item.summary.toLowerCase().match(this.query.toLowerCase()) ||
          item.tags.toLowerCase().match(this.query.toLowerCase())
        );
      });
    }
  },
  mounted: function() {
    fetch("/js/data.json")
      .then(response => response.json())
      .then(data => {
        this.content = data;
      });
  }
};
</script>
<style scoped>
input {
  transition: all 0.5s ease-out;
}

.wide {
  width: 250px;
}
.short {
  width: 60px;
}
</style>
