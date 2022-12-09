import { Navbar, Page, Link as Klink, Panel, List, ListItem, Card } from "konsta/react"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { FaUsers, FaLayerGroup } from 'react-icons/fa'
import CountUp from "react-countup"
export default function Sudo() {
    const [nav, setNav] = useState<SudoNavbar>()
    return (
        <Page className=" k-color-brand-primary">
            <Head>
                <title>ZDSPGC Control Panel</title>
            </Head>
            <Navbar
                className=" k-color-brand-primary"
                title="ZDSPGC Control Panel" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                <Link href={"/sudo/students"}>
                    <Card
                        className=" k-color-brand-blue"
                        margin="m-0">
                        <div className="flex gap-4 items-center">
                            <FaUsers className="text-6xl dark:text-blue-700" />
                            <div className="flex flex-col gap-1">
                                <div className="text-xl">Students</div>
                                <CountUp
                                    className="text-primary text-2xl font-bold"
                                    end={100}
                                    start={0} />
                            </div>
                        </div>
                    </Card>
                </Link>
                <Link href={"/sudo/subjects"}>
                    <Card
                        className=" k-color-brand-amber"
                        margin="m-0">
                        <div className="flex gap-4 items-center">
                            <FaLayerGroup className="text-6xl dark:text-amber-700" />
                            <div className="flex flex-col gap-1">
                                <div className="text-xl">Subjects</div>
                                <CountUp
                                    className="text-primary text-2xl font-bold"
                                    end={100}
                                    start={0} />
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>
        </Page>
    )
}