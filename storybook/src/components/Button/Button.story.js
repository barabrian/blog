import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

storiesOf('Button', module)
  .addDecorator((story, context) => withInfo(`
    This is a **button**!
  `)(story)(context))
  .addDecorator(withKnobs)
  .add('Default Button', () => {
    const isLoading = boolean('isLoading', false)
    return <Button
      onClick={action('Clicked!')}
      isLoading={isLoading}
    >Button</Button>
  })
