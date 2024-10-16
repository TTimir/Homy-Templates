import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ProjectThreeMain from '../components/inner-pages/projects/project-three';

const ProjectThree = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Project Three Homy'} />
         <ProjectThreeMain />
      </Wrapper>
   );
};

export default ProjectThree;