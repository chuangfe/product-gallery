(function () {
  const vm = new Vue({
    el: "#app",
    data: {
      products: [
        {
          title: "CAROUSEL",
          text: "jQuery",
          imageSrc: "./images/carousel-01.jpg",
          githubSrc: "https://github.com/chuangfe/carousel",
          githubPagesSrc: "https://chuangfe.github.io/carousel/dist",
        },
        {
          title: "CAROUSEL",
          text: "VUE",
          imageSrc: "./images/carousel-02.png",
          githubSrc: "https://github.com/chuangfe/carousel-vue",
          githubPagesSrc: "https://chuangfe.github.io/carousel-vue/dist",
        },
        {
          title: "MASK MAP",
          text: "VUE / LEAFLET",
          imageSrc: "./images/mask-map.png",
          githubSrc: "https://github.com/chuangfe/mask-map",
          githubPagesSrc: "https://chuangfe.github.io/mask-map/dist",
        },
        {
          title: "Pokemon Store",
          text: "VUE",
          imageSrc: "./images/pokemon.png",
          githubSrc: "https://github.com/chuangfe/pokemon-store",
          githubPagesSrc: "https://chuangfe.github.io/pokemon-store/dist/",
        },
        {
          title: "TODO MVC",
          text: "VUE",
          imageSrc: "./images/todo-mvc.png",
          githubSrc: "https://github.com/chuangfe/todomvc-vue",
          githubPagesSrc: "https://chuangfe.github.io/todomvc-vue",
        },
      ],
    },
    methods: {
      getNumberPadStart(i) {
        return String(i).padStart(2, "0");
      },
      getItemClass(i) {
        return "item-" + i;
      },
    },
  });
})();
