import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ProjectOneMain from '../components/inner-pages/projects/project-one';

const ProjectOne = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Project One Homy'} />
         <ProjectOneMain />
      </Wrapper>
   );
};

export default ProjectOne;