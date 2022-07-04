import { mount } from '@vue/test-utils'
import LibraryList from '@/components/LibraryList'

describe('Testing LibraryList.vue', () => {
  it('should render an accordion item with the parameters', () => {
    // when
    const testLibrary = {
      id: 1,
      libraryName: 'frontendTest.js',
      programmingLanguage: 'JavaScript',
      latestVersion: '2.3.4',
      useField: 'test Frontend',
      website: 'www.frontendTestJS.com',
      upvotes: 0,
      downvotes: 0,
      createdAt: '2022-7-2',
      updatedAt: '2022-7-2',
      projects: [],
      installs: []
    }
    const wrapper = mount(LibraryList, {
      propsData: {
        library: testLibrary
      }
    })
    // then
    const listTarget = wrapper.find('.data-bs-target')
    expect(listTarget.text()).toBe('#panelsStayOpen-collapseOne1')
  })

  it.each`
    projects    | expected
    ${[]}       | ${'0 Projects'}
    ${[{}]}     | ${'1 Projects'}
    ${[{}, {}]} | ${'2 Projects'}
  `('should render amount of projects ($projects.length projects)', ({ projects, expected }) => {
    // when
    const testLibrary = {
      id: 1,
      libraryName: 'frontendTest.js',
      programmingLanguage: 'JavaScript',
      latestVersion: '2.3.4',
      useField: 'test Frontend',
      website: 'www.frontendTestJS.com',
      upvotes: 0,
      downvotes: 0,
      createdAt: '2022-7-2',
      updatedAt: '2022-7-2',
      projects: projects,
      installs: []
    }
    const wrapper = mount(LibraryList, {
      propsData: {
        library: testLibrary
      }
    })
    // then
    const listTarget = wrapper.find('.data-bs-target')
    expect(listTarget.text()).toContain(`Projects: ${expected}`)
  })
})
