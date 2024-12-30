import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import { useParams } from 'react-router-dom'
import Webdev from '../components/Services/webdev'
import Appdev from '../components/Services/Appdev'
import Ecommercedev from '../components/Services/Ecommercedev'
import Socialmedia from '../components/Services/Socialmedia'
import Seo from '../components/Services/SEO'
import Graphicdesign from '../components/Services/Graphicdesign'
import Digitalcard from '../components/Services/Digitalcard'
import Amazondomestic from '../components/Services/Amazondomestic'
import PPC from '../components/Services/PPC'
import Dataanalytic from '../components/Services/Dataanalytic'
import { Helmet } from 'react-helmet'

const ServiceDetails = () => {
  const { serviceName } = useParams();
  let heading,content,metaDescription,metaKeywords;
  switch (serviceName) {
    case 'Web-Development':
      heading="Web development";
      content=<Webdev/>;
      metaDescription = "Explore our Web Development services to create dynamic, responsive, and high-performance websites for your business.";
      metaKeywords = "web development, website development, custom websites, responsive design, business websites";
      break;
    case 'E-commerce-Development':
      heading = 'E-commerce Developnment';
      content=<Ecommercedev/>;
      metaDescription = "Build a strong online store with our E-commerce Development services. From storefront design to payment integration, we have you covered.";
      metaKeywords = "ecommerce development, online store development, shopping websites, ecommerce platform";
      break;
    case 'Ecommerce-Market-Place':
      heading = 'Ecommerce Market Place';
      content=<Amazondomestic/>;
      metaDescription = "Create and manage your own e-commerce marketplace with our expert services, tailored to your business needs.";
      metaKeywords = "ecommerce marketplace, marketplace development, online marketplace, multi-vendor platform";
      break;
    case 'Digital-Card':
      heading = 'Digital Card Services';
      content=<Digitalcard/>;
      metaDescription = "Get digital business cards to enhance your professional networking and branding with secure and customizable solutions.";
      metaKeywords = "digital card, virtual business card, digital business cards, secure business cards, customizable digital cards";
      break;
    case 'Graphic-Designing':
      heading = 'Graphic Designing';
      content=<Graphicdesign/>;
      metaDescription = "Professional Graphic Designing services to create visually stunning branding and marketing materials for your business.";
      metaKeywords = "graphic design, branding, logo design, marketing materials, visual design";
      break;
    case 'SEO':
      heading = 'SEO';
      content=<Seo/>;
      metaDescription = "Boost your website's visibility and ranking on search engines with our result-oriented SEO services.";
      metaKeywords = "SEO, search engine optimization, SEO services, keyword research, website ranking";
      break;
    case 'App-Development':
      heading ='App Developnment';
      content=<Appdev/>;
      metaDescription = "Create high-performance mobile apps for your business with our custom app development services.";
      metaKeywords = "app development, mobile app development, custom apps, iOS app, Android app";
      break;
    case 'Social-Media':
      heading = 'Social Media';
      content=<Socialmedia/>;
      metaDescription = "Enhance your brand presence and engage with your audience effectively through our Social Media Marketing services.";
      metaKeywords = "social media marketing, social media management, SMM, digital marketing, brand engagement";
      break;
      case 'Data-Analytics':
        heading = 'Data Analytics';
        content=<Dataanalytic/>;
        metaDescription = "Unlock valuable insights from your business data with our data analytics services, designed to enhance decision-making.";
        metaKeywords = "data analytics, business analytics, data-driven insights, analytics services, decision-making";
        break;
      case 'Pay-Per-Click':
        heading = 'Pay-Per-Click Ads(PPC)';
        content=<PPC/>;
        metaDescription = "Maximize your ROI with our Pay-Per-Click (PPC) advertising services. Get immediate visibility with targeted ads.";
        metaKeywords = "PPC, pay-per-click, Google Ads, paid advertising, search engine ads";
        break;
  }
  
  return (
    <div>
      <Helmet>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </Helmet>
      <Commonhero name={heading}/>
      <Herobanner/>
      <div>
        {content}
      </div>
    </div>
  )
}

export default ServiceDetails