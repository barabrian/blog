---
to: "<%= story ? 'src/components/' + name  + '/' + name + '.story.js' : null %>"
---
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import <%= name %> from './<%= name %>'

storiesOf('<%= name %>', module)
  .addDecorator((story, context) => withInfo(`<%= name %> component`)(story)(context))
  .addDecorator(withKnobs)
  .add('<%= name %>', () => (
    <<%= name %> />
  ))
