import { mount } from '@vue/test-utils'
import Libraries from '@/views/Libraries'
import LibraryList from '@/components/LibraryList'
import LibraryForm from '@/components/LibraryForm'

describe('Testing Libraries.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Libraries)
    // then
    expect(wrapper.text()).toMatch('Libraries')
  })

  it('should have libraries list component', () => {
    // when
    const wrapper = mount(Libraries)
    // then
    const list = wrapper.findComponent(LibraryList)
    expect(list.exists()).toBeTruthy()
  })

  it('should have libraries form component', () => {
    // when
    const wrapper = mount(Libraries)
    // then
    const form = wrapper.findComponent(LibraryForm)
    expect(form.exists()).toBeTruthy()
  })
})
