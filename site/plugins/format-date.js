import Vue from "vue";

Vue.filter("formatDate", (dateStr) =>
  Intl.DateTimeFormat("en-GB", { dateStyle: 'full'}).format(new Date(dateStr))
);