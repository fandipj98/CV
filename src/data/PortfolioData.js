import LocalMallIcon from '@material-ui/icons/LocalMall';

import e_psu from "../assets/images/e_psu.jpg";
import restoku from "../assets/images/restoku.jpg";

const PortfolioData = {
    title: "Portfolio",
    icon: <LocalMallIcon />,
    data:[
        {
            key: 1,
            name: "E-Lapor PSU",
            language: "Python",
            framework: "Django",
            description: "DESCRIPTION PLACEHOLDER 1",
            image: e_psu
        },
        {
            key: 2,
            name: "RestoKu",
            language: "PHP",
            framework: "Phalcon",
            description: "DESCRIPTION PLACEHOLDER 2",
            image: restoku
        },
    ],
}

export default PortfolioData;