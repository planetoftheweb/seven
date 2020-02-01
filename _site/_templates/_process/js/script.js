$(document).ready(function() {
  $(window).on('activate.bs.scrollspy', function() {
    var hash = $('.site-nav')
      .find('a.active')
      .attr('href')

    $('.site-nav').removeClass('inbody')

    if (hash == '#main-content') {
      $('.site-nav').addClass('inbody')
    } else {
      $('.site-nav').removeClass('inbody')
    }
  })

  $(window).trigger('scroll')

  $(window).on('scroll', function() {
    var top = $(window).scrollTop()
    $('.layout-hero, .layout-hero-content')
      .css('transform', 'translate3d(0px, ' + top / 2 + 'px, 0px)')
      .css('opacity', 1 - Math.max(top / (window.innerHeight * 0.6), 0))
  })

  var app = new Vue({
    el: '.searchbox',
    data: {
      query: null,
      content: [],
      isActive: false
    },
    methods: {
      handleBlur: function(e) {
        if (e.relatedTarget !== null) {
          console.log(e.relatedTarget.href)
          window.location = e.relatedTarget.href
        }
        this.isActive = false
      },
      handleClick: function(e) {}
    },
    computed: {
      queried: function() {
        return this.content.filter(item => {
          return (
            item.title.toLowerCase().match(this.query.toLowerCase()) ||
            item.tags.toLowerCase().match(this.query.toLowerCase())
          )
        })
      }
    },
    mounted: function() {
      fetch('/js/data.js')
        .then(response => response.json())
        .then(data => {
          this.content = data
        })
    }
  })
})
