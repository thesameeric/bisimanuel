import { shallowMount } from '@vue/test-utils';
import header from '@/components/header.vue';

describe('header.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'LOGO';
    const wrapper = shallowMount(header, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
