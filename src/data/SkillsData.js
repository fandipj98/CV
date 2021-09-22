import BuildIcon from '@material-ui/icons/Build';

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import c from "../assets/images/c.png";
import python from "../assets/images/python.png";
import php from "../assets/images/php.png";
import sql from "../assets/images/sql.png";

import react from "../assets/images/react.png";
import django from "../assets/images/django.png";
import laravel from "../assets/images/laravel.png";
import phalcon from "../assets/images/phalcon.png";

import tefl from "../assets/images/TEFL.jpg";
import honorable from "../assets/images/Honorable_Mention.jpg";

const SkillsData = {
    title: "Skills",
    icon: <BuildIcon />,
    data: [
        {
            key: 1,
            name: "C++",
            icon: c,
        },
        {
            key: 2,
            name: "Python",
            icon: python,
        },
        {
            key: 3,
            name: "HTML",
            icon: html,
        },
        {
            key: 4,
            name: "CSS",
            icon: css,
        },
        {
            key: 5,
            name: "Javascript",
            icon: javascript,
        },
        {
            key: 6,
            name: "PHP",
            icon: php,
        },
        {
            key: 7,
            name: "SQL",
            icon: sql,
        },
    ],
}

export const Framework = [
    {
        key: 1,
        name: "React",
        icon: react,
    },
    {
        key: 2,
        name: "Django",
        icon: django,
    },
    {
        key: 3,
        name: "Laravel",
        icon: laravel,
    },
    {
        key: 4,
        name: "Phalcon",
        icon: phalcon,
    },
]

export const Language = [
    {
        key: 1,
        name: "Bahasa Indonesia",
        rating: "90",
    },
    {
        key: 2,
        name: "English",
        rating: "70",
    },
]

export const Certification = [
    {
        key: 1,
        name: "TEFL",
        image: tefl,
    },
    {
        key: 2,
        name: "Honorable Mention Ideafuse 2018",
        image: honorable,
    },
]

export default SkillsData;