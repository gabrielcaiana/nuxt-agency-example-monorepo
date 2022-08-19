import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../components/Button.vue'

describe('UI Button', () => {
  it('should render correctly button', () => {
    const wrapper = mount(Button)
    expect(wrapper).toBeDefined()
  })

  it('can be disabled with prop', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })

    const button = wrapper.find('button')
    expect(button.element.disabled).toBe(true)
  })

  it('emits the correct text when clicked', () => {
    const wrapper = mount(Button)
    const button = wrapper.find('button')
    button.trigger('click')

    // @ts-ignore
    expect(wrapper.emitted()['click:mybutton'][0][0]).toBe('hello from button')
  })

  it('accepts a default slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'hello world!!!'
      }
    })

    expect(wrapper.html()).toContain('hello world!!!')
  })
})