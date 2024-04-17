import { useParams } from "react-router-dom"
import { ListProjects } from "../Data/ListProjects"
import Fancybox from "./components/Fancybox"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useState } from "react"


function ProjectDetails() {
    const { id } = useParams()
    const project = ListProjects.find((item) => (item.id === id))

    const [click, setClick] = useState(true)

    const clicked = () => {
        setClick(!click)
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }
    return (
        <div>
            <div className="container pt-10 text-gray-900 dark:text-gray-200 ">
                <h1 className="text-4xl text-gray-900 dark:text-gray-200 font-medium mb-10">{project.title}</h1>
                <div className="mb-5  mx-auto md:w-[60%] h-full  bg-gray-900 rounded-sm shadow-sm">
                    <Fancybox
                        options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}
                    >
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={click ? true : false}
                            autoPlaySpeed={3000}
                            className="owl-carousel owl-theme skill-slider"
                        >
                            {
                                Object.keys(project.imgsUrl).map((item, index) => (
                                    <div key={index} className="item" onFocus={clicked}>
                                        <a data-fancybox="gallery" href={project.imgsUrl[item]}>
                                            <img
                                                className="object-contain w-full h-full  m-auto  transform duration-500 ease-in-out hover:scale-105"
                                                src={project.imgsUrl[item]}
                                            />
                                        </a>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </Fancybox>
                </div>
                <div className="mb-10">
                    <h2 className="font-bold ">Tags:</h2>
                    <div className="mt-2 w-fit">
                        <ul className="flex gap-1 flex-wrap my-2">
                            {
                                Object.keys(project.tags).map((tag, y) => (
                                    <li key={y}
                                        className="bg-blue-100 dark:bg-blue-700 text-sm capitalize px-4 py-1 rounded-full text-blue-700 dark:text-blue-50   font-medium">
                                        {project.tags[tag]}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="font-bold mb-10">
                    <h2>Links:</h2>
                    <div className="mt-2 w-fit">
                        <ul className="flex gap-1 flex-wrap my-2">
                            {
                                Object.keys(project.bnts).map((btn, x) => (
                                    <li key={x}
                                        className="px-2 py-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                        <a className="text-black text-3xl dark:text-gray-300" href={project.bnts[btn].link}>{project.bnts[btn].icon}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div >
                    <h2 className="font-bold ">Description :</h2>
                    <p className="mb-5 text-gray-700 dark:text-gray-300">{project.subDesc} </p>
                    <ul className="mb-4 text-gray-700 dark:text-gray-300">
                        {
                            Object.keys(project.desc).map((line, k) => (
                                <li key={k}
                                    className="list-disc ml-3 text-sm  px-1 py-1 font-medium ">
                                    {project.desc[line]}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails