import React from "react"

import { Layout, Head, Hero, About, Skills, Projects, Contacts, DarkSeparator, LightSeparator} from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
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

