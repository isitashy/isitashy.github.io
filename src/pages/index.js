import React from "react"

import { Layout, Hero, About, Skills, Projects, Contacts, DarkSeparator, LightSeparator} from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <DarkSeparator />
      <Skills />
      <LightSeparator />
      <Projects />
      <DarkSeparator />
      <Contacts />
    </Layout>
  )
}

export default IndexPage

