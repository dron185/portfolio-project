import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/social.png"
import todolistImg from "../../../assets/images/todolist.jpg"
import counterImg from "../../../assets/images/count.png"
import {Container} from "../../../components/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from './Works_Styles';
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "mini",
        status: "mini"
    }
]

const worksData = [
    {
        title: "Todolist",
        src: todolistImg,
        text: "Todolist - is a convenient task management application. Create, edit, and mark completed tasks to always stay organized and productive.",
        type: "react",
        id: "1",
        demoLink: 'https://dron185.github.io/todolist/',
        codeLink: 'https://github.com/dron185/todolist'
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Social Network - is a modern platform for communication and messaging. Chat, share news and make new friends in a convenient and intuitive environment.",
        type: "react",
        id: "2",
        demoLink: 'https://dron185.github.io/samurai-way-main/',
        codeLink: 'https://github.com/dron185/samurai-way-main'
    },
    {
        title: "Counter",
        src: counterImg,
        text: "Counter - is a simple application for counting numbers. Increase or decrease the value with a single tap. A lightweight and convenient tool for tracking numeric values.",
        type: "mini",
        id: "3",
        demoLink: 'https://dron185.github.io/counter-new/',
        codeLink: 'https://github.com/dron185/counter'
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "mini") {
        filteredWorks = worksData.filter(work => work.type === "mini")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div
                                    style={{width: "330px", flexGrow: 1, display: "flex"}}
                                    layout={true}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work key={w.id}
                                          title={w.title}
                                          src={w.src}
                                          text={w.text}
                                          demoLink={w.demoLink}
                                          codeLink={w.codeLink}
                                    />

                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};