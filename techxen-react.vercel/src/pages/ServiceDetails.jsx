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

const ServiceDetails = () => {
  const { serviceName } = useParams();
  let heading,content
  switch (serviceName) {
    case 'Web-Development':
      heading="Web development";
      content=<Webdev/>
      break;
    case 'E-commerce-Development':
      heading = 'E-commerce Developnment';
      content=<Ecommercedev/>;
      break;
    case 'Ecommerce-Market-Place':
      heading = 'Ecommerce Market Place';
      content=<Amazondomestic/>;
      break;
    case 'Digital-Card':
      heading = 'Digital Card Services';
      content=<Digitalcard/>;
      break;
    case 'Graphic-Designing':
      heading = 'Graphic Designing';
      content=<Graphicdesign/>;
      break;
    case 'SEO':
      heading = 'SEO';
      content=<Seo/>;
      break;
    case 'App-Development':
      heading ='App Developnment';
      content=<Appdev/>;
      break;
    case 'Social-Media':
      heading = 'Social Media';
      content=<Socialmedia/>;
      break;
      case 'Data-Analytics':
        heading = 'Data Analytics';
        content=<Dataanalytic/>;
        break;
      case 'Pay-Per-Click':
        heading = 'Pay-Per-Click Ads(PPC)';
        content=<PPC/>;
        break;
  }
  
  return (
    <div>
      <Commonhero name={heading}/>
      <Herobanner/>
      <div>
        {content}
      </div>
    </div>
  )
}

export default ServiceDetails