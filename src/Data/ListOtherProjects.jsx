import { FaAppStore } from "react-icons/fa";
import { PiGooglePlayLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const ListOtherProjects = [
    {
        id: "04",
        title: "Project four",
        subDesc: "This is a system for visualizing attacks generated by IDS where this data is sent through the ELK stack to be processed, stored and finally visualized in a web dashboard so security engineers can have insights about their organization security.",
        imgUrl: '',
        projectUrl: "",
        tags: {
            tags1: "ReactJs",
            tags2: "ChakraUi",
            tags3: "Swr",
        },
        bnts: {
            bntAppStor: {
                link: '',
                icon: <FaAppStore/>
            },
            bntGoolePlay: {
                link: '',
                icon: <PiGooglePlayLogo/>
            },
            bntGithub: {
                link: '',
                icon: <FaGithub/>
            },
            bntWeb: {
                link:'',
                icon: <CgWebsite/>
            },
        },
        desc: {
            line1: "Ansible: For task automation on the servers.",
            line2: "Docker for deploying the elastic stack.",
            line3: "Pfsense firewall",
            line4: "Suricata IDS.",
        },

    },
]