import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ProjectTwoMain from '../components/inner-pages/projects/project-two';

const ProjectTwo = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Project Two Homy'} />
         <ProjectTwoMain />
      </Wrapper>
   );
};

export default ProjectTwo;