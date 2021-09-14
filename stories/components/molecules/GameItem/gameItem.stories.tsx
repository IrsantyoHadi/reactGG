/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import GameCard, {
  GameCardProps,
} from '../../../../components/molecules/GameCard';

export default {
  title: 'Components/Molecules/Input',
  component: GameCard,
} as Meta;

const Template = (args: GameCardProps) => <GameCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: '/img/Thumbnail-1.png',
  title: 'Super Mechs',
  console: 'Mobile',
};
