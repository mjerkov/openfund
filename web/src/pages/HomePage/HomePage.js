import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import ProjectsCell from 'src/components/Projects/ProjectsCell'
import RoundCell from 'src/components/Round/RoundCell'
import { PageHeading } from 'src/components/UI'

const HomePage = () => {
  return (
    <GlobalLayout>
      <RoundCell />
      <PageHeading className="mt-8 mb-5">Projekti</PageHeading>
      <ProjectsCell />
    </GlobalLayout>
  )
}

export default HomePage
