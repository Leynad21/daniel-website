import styles from "./timeline.module.css"
import React from 'react'
import TimelineCard from './TimelineCard'
import Fade from 'react-reveal/Fade';
import { timelineData } from './TimeLineData';

const TimelineList = () => {
    return (
        <div className={styles.list__container}>
            <div className={styles.first_list__container}>

                <Fade big duration={1200} opposite={true} >
                    <TimelineCard
                        date={timelineData[0].date}
                        title={timelineData[0].title}
                        description={timelineData[0].description}
                        iconUrl={timelineData[0].iconUrl}
                    />
                    <TimelineCard
                        date={timelineData[1].date}
                        title={timelineData[1].title}
                        description={timelineData[1].description}
                        iconUrl={timelineData[1].iconUrl}
                    />
                    <TimelineCard
                        date={timelineData[2].date}
                        title={timelineData[2].title}
                        description={timelineData[2].description}
                        iconUrl={timelineData[2].iconUrl}
                    />
                    <TimelineCard
                        date={timelineData[3].date}
                        title={timelineData[3].title}
                        description={timelineData[3].description}
                        iconUrl={timelineData[3].iconUrl}
                    />
                    <TimelineCard
                        date={timelineData[4].date}
                        title={timelineData[4].title}
                        description={timelineData[4].description}
                        iconUrl={timelineData[4].iconUrl}
                    />
                    <TimelineCard
                        date={timelineData[5].date}
                        title={timelineData[5].title}
                        description={timelineData[5].description}
                        iconUrl={timelineData[5].iconUrl}
                        bifurcationStart={true}
                    />
                </Fade>
                <div className={styles.second_list__container}>
                    <div className={styles.second_list__container_left}>
                        <Fade big duration={1200} opposite={true} >
                            <TimelineCard
                                date={timelineData[7].date}
                                title={timelineData[7].title}
                                description={timelineData[7].description}
                                iconUrl={timelineData[7].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[8].date}
                                title={timelineData[8].title}
                                description={timelineData[8].description}
                                iconUrl={timelineData[8].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[15].date}
                                title={timelineData[15].title}
                                description={timelineData[15].description}
                                iconUrl={timelineData[15].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[16].date}
                                title={timelineData[16].title}
                                description={timelineData[16].description}
                                iconUrl={timelineData[16].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[17].date}
                                title={timelineData[17].title}
                                description={timelineData[17].description}
                                iconUrl={timelineData[17].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[18].date}
                                title={timelineData[18].title}
                                description={timelineData[18].description}
                                iconUrl={timelineData[18].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[19].date}
                                title={timelineData[19].title}
                                description={timelineData[19].description}
                                iconUrl={timelineData[19].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[20].date}
                                title={timelineData[20].title}
                                description={timelineData[20].description}
                                iconUrl={timelineData[20].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[21].date}
                                title={timelineData[21].title}
                                description={timelineData[21].description}
                                iconUrl={timelineData[21].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[22].date}
                                title={timelineData[22].title}
                                description={timelineData[22].description}
                                iconUrl={timelineData[22].iconUrl}
                                bifurcationStart={"end-line"}
                            />
                        </Fade>
                    </div>

                    <div className={styles.second_list__container_right}>
                        <Fade big duration={1200} opposite={true} >
                            <TimelineCard
                                date={timelineData[6].date}
                                title={timelineData[6].title}
                                description={timelineData[6].description}
                                iconUrl={timelineData[6].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[9].date}
                                title={timelineData[9].title}
                                description={timelineData[9].description}
                                iconUrl={timelineData[9].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[10].date}
                                title={timelineData[10].title}
                                description={timelineData[10].description}
                                iconUrl={timelineData[10].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[11].date}
                                title={timelineData[11].title}
                                description={timelineData[11].description}
                                iconUrl={timelineData[11].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[12].date}
                                title={timelineData[12].title}
                                description={timelineData[12].description}
                                iconUrl={timelineData[12].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[13].date}
                                title={timelineData[13].title}
                                description={timelineData[13].description}
                                iconUrl={timelineData[13].iconUrl}
                            />
                            <TimelineCard
                                date={timelineData[14].date}
                                title={timelineData[14].title}
                                description={timelineData[14].description}
                                iconUrl={timelineData[14].iconUrl}
                                bifurcationStart={"end-line"}
                            />
                        </Fade>
                    </div>

                </div>

            </div>
        </div >

    )
}

export default TimelineList