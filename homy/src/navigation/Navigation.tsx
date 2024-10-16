import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import Home from '../pages/Home';
import HomeTwo from '../pages/HomeTwo';
import HomeThree from '../pages/HomeThree';
import HomeFour from '../pages/HomeFour';
import HomeFive from '../pages/HomeFive';
import HomeSix from '../pages/HomeSix';
import HomeSeven from '../pages/HomeSeven';
import AboutUsOne from '../pages/AboutUsOne';
import AboutUsTwo from '../pages/AboutUsTwo';
import Agency from '../pages/Agency';
import AgencyDetails from '../pages/AgencyDetails';
import Agent from '../pages/Agent';
import AgentDetails from '../pages/AgentDetails';
import ProjectOne from '../pages/ProjectOne';
import ProjectTwo from '../pages/ProjectTwo';
import ProjectThree from '../pages/ProjectThree';
import ProjectFour from '../pages/ProjectFour';
import ProjectDetails from '../pages/ProjectDetails';
import ServiceOne from '../pages/ServiceOne';
import ServiceTwo from '../pages/ServiceTwo';
import ServiceDetails from '../pages/ServiceDetails';
import ListingOne from '../pages/ListingOne';
import ListingFive from '../pages/ListingFive';
import ListingTwo from '../pages/ListingTwo';
import ListingSix from '../pages/ListingSix';
import ListingThree from '../pages/ListingThree';
import ListingSeven from '../pages/ListingSeven';
import ListingFour from '../pages/ListingFour';
import ListingEight from '../pages/ListingEight';
import ListingNine from '../pages/ListingNine';
import ListingEleven from '../pages/ListingEleven';
import ListingTen from '../pages/ListingTen';
import ListingTwelve from '../pages/ListingTwelve';
import ListingThirteen from '../pages/ListingThirteen';
import ListingFourteen from '../pages/ListingFourteen';
import ListingFifteen from '../pages/ListingFifteen';
import ListingSixteen from '../pages/ListingSixteen';
import ListingSeventeen from '../pages/ListingSeventeen';
import ListingDetailsOne from '../pages/ListingDetailsOne';
import ListingDetailsTwo from '../pages/ListingDetailsTwo';
import ListingDetailsThree from '../pages/ListingDetailsThree';
import ListingDetailsFour from '../pages/ListingDetailsFour';
import ListingDetailsFive from '../pages/ListingDetailsFive';
import ListingDetailsSix from '../pages/ListingDetailsSix';
import Compare from '../pages/Compare';
import PricingOne from '../pages/PricingOne';
import PricingTwo from '../pages/PricingTwo';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import NotFound from '../pages/NotFound';
import BlogOne from '../pages/BlogOne';
import BlogTwo from '../pages/BlogTwo';
import BlogThree from '../pages/BlogThree';
import BlogDetails from '../pages/BlogDetails';
import DynamicBlogDeatils from '../pages/DynamicBlogDeatils';
import DashboardIndex from '../pages/DashboardIndex';
import DashboardMessage from '../pages/DashboardMessage';
import DashboardProfile from '../pages/DashboardProfile';
import DashboardAccountSettings from '../pages/DashboardAccountSettings';
import DashboardMembership from '../pages/DashboardMembership';
import DashboardPropertiesList from '../pages/DashboardPropertiesList';
import DashboardAddProperty from '../pages/DashboardAddProperty';
import DashboardFavourites from '../pages/DashboardFavourites';
import DashboardSavedSearch from '../pages/DashboardSavedSearch';
import DashboardReview from '../pages/DashboardReview';

const AppNavigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/home-four" element={<HomeFour />} />
        <Route path="/home-five" element={<HomeFive />} />
        <Route path="/home-six" element={<HomeSix />} />
        <Route path="/home-seven" element={<HomeSeven />} />
        <Route path="/about_us_01" element={<AboutUsOne />} />
        <Route path="/about_us_02" element={<AboutUsTwo />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/agency_details" element={<AgencyDetails />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/agent_details" element={<AgentDetails />} />
        <Route path="/project_01" element={<ProjectOne />} />
        <Route path="/project_02" element={<ProjectTwo />} />
        <Route path="/project_03" element={<ProjectThree />} />
        <Route path="/project_04" element={<ProjectFour />} />
        <Route path="/project_details_01" element={<ProjectDetails />} />
        <Route path="/service_01" element={<ServiceOne />} />
        <Route path="/service_02" element={<ServiceTwo />} />
        <Route path="/service_details" element={<ServiceDetails />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/pricing_01" element={<PricingOne />} />
        <Route path="/pricing_02" element={<PricingTwo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/listing_01" element={<ListingOne />} />
        <Route path="/listing_02" element={<ListingTwo />} />
        <Route path="/listing_03" element={<ListingThree />} />
        <Route path="/listing_04" element={<ListingFour />} />
        <Route path="/listing_05" element={<ListingFive />} />
        <Route path="/listing_06" element={<ListingSix />} />
        <Route path="/listing_07" element={<ListingSeven />} />
        <Route path="/listing_08" element={<ListingEight />} />
        <Route path="/listing_09" element={<ListingNine />} />
        <Route path="/listing_10" element={<ListingTen />} />
        <Route path="/listing_11" element={<ListingEleven />} />
        <Route path="/listing_12" element={<ListingTwelve />} />
        <Route path="/listing_13" element={<ListingThirteen />} />
        <Route path="/listing_14" element={<ListingFourteen />} />
        <Route path="/listing_15" element={<ListingFifteen />} />
        <Route path="/listing_16" element={<ListingSixteen />} />
        <Route path="/listing_17" element={<ListingSeventeen />} />
        <Route path="/listing_details_01" element={<ListingDetailsOne />} />
        <Route path="/listing_details_02" element={<ListingDetailsTwo />} />
        <Route path="/listing_details_03" element={<ListingDetailsThree />} />
        <Route path="/listing_details_04" element={<ListingDetailsFour />} />
        <Route path="/listing_details_05" element={<ListingDetailsFive />} />
        <Route path="/listing_details_06" element={<ListingDetailsSix />} />
        <Route path="/blog_01" element={<BlogOne />} />
        <Route path="/blog_02" element={<BlogTwo />} />
        <Route path="/blog_03" element={<BlogThree />} />
        <Route path="/blog_details" element={<BlogDetails />} />
        <Route path="/blog_details/:id" element={<DynamicBlogDeatils />} />
        <Route path="/dashboard/dashboard-index" element={<DashboardIndex />} />
        <Route path="/dashboard/message" element={<DashboardMessage />} />
        <Route path="/dashboard/profile" element={<DashboardProfile />} />
        <Route path="/dashboard/account-settings" element={<DashboardAccountSettings />} />
        <Route path="/dashboard/membership" element={<DashboardMembership />} />
        <Route path="/dashboard/properties-list" element={<DashboardPropertiesList />} />
        <Route path="/dashboard/add-property" element={<DashboardAddProperty />} />
        <Route path="/dashboard/favourites" element={<DashboardFavourites />} />
        <Route path="/dashboard/saved-search" element={<DashboardSavedSearch />} />
        <Route path="/dashboard/review" element={<DashboardReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
