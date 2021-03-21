import MyCard from './Card.vue';

export default {
  title: 'Example/Card',
  component: MyCard
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCard },
  template: '<my-card  :title="title"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Card111'
};

