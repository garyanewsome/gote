import React from "react"

import ClassNames from 'classnames'

import Store      from '../stores/appStore'
import Section   from './section'
import Gote from './gote'

function AppView(props) {
  return (
    <Section className="text-left" elementId="gote">
      <Gote originalElement={props.originalElement} />
    </Section>
  );
}

export default AppView
