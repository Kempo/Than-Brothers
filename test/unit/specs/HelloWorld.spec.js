import Vue from 'vue'
import Title from '@/components/Title'

describe('Title.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.start h1').textContent)
  })
})
