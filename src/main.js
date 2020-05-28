import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('tooltip', {
  bind: function (el, binding) {
    let position = binding.value.position ? binding.value.position : 'top';
    let tooltipMessage = binding.value.message ? binding.value.message : 'Tooltip';
    let span = document.createElement('span');
    let text = document.createTextNode(tooltipMessage);
    el.addEventListener('mouseenter', () => {
      span.appendChild(text);
      span.classList.add('d-tooltip')
      span.classList.add(position)
      el.appendChild(span)
    })
    el.addEventListener('mouseleave', function () {
      span.parentNode.removeChild(span)
    })
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
