import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Error, ErrorProps } from '~/components/error'

export default {
  title: 'Components/Error',
  component: Error,
} as ComponentMeta<typeof Error>

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />
const defaultArgs: ErrorProps = {}

export const Default = Template.bind({})
Default.storyName = 'エラー画面'
Default.args = defaultArgs
