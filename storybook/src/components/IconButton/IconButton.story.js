import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import IconButton from './IconButton'

storiesOf('IconButton', module)
  .addDecorator((story, context) => withInfo(`IconButton component`)(story)(context))
  .addDecorator(withKnobs)
  .add('IconButton', () => (
    <IconButton />
  ))
