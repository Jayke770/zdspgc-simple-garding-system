import { Page, Card, List, ListInput, Button } from "konsta/react"
import Head from "next/head"
import Image from "next/image"
export default function Home() {
    return (
        <Page className="flex justify-center items-center bg-gradient-to-tr to-primary from-md-dark-surface-1 ">
            <Head>
                <title>ZDSPGC Grading View System</title>
            </Head>
            <Card
                raised
                className="w-full md:w-[400px] k-color-brand-primary">
                <div className="flex justify-center items-center p-5 mb-4">
                    <Image
                        src="/zdspgc.png"
                        width={160}
                        height={160}
                        alt="logo" />
                </div>
                <div className="px-4 flex flex-col gap-2 pb-4">
                    <List margin="m-0">
                        <ListInput
                            floatingLabel
                            outline
                            label="Username or Email"
                            colors={{
                                outlineLabelBgMaterial: "bg-md-light-surface-1 dark:bg-md-dark-surface-1"
                            }} />
                        <ListInput
                            outline
                            floatingLabel
                            type="password"
                            label="Password"
                            colors={{
                                outlineLabelBgMaterial: "bg-transparent dark:bg-md-dark-surface-1"
                            }} />
                    </List>
                    <div className="px-3 mt-2">
                        <Button
                            rounded>Login</Button>
                    </div>
                </div>
            </Card>
        </Page>
    )
}