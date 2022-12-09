import { Navbar, Page, Link as Klink, List, NavbarBackLink } from "konsta/react"
import Link from "next/link"
import { Grid } from 'gridjs-react'
import "gridjs/dist/theme/mermaid.css"
import { faker } from '@faker-js/faker'
const data = Array.from({ length: 100 }).map((_, i) => [i + 1, Math.floor(Math.random() * 99999), faker.company.name(), Math.floor(Math.random() * 3) + 1, faker.date.past().toUTCString()])
export default function Subject() {
    return (
        <Page>
            <Navbar
                className=" k-color-brand-primary"
                left={
                    <Link href={"/sudo"}>
                        <NavbarBackLink className=" k-color-brand-primary" />
                    </Link>
                }
                title="Subjects" />
            <div className="p-4">
                <Grid
                    data={data}
                    columns={["No.", 'Subject Code', 'Subject Name', "Unit", "Created"]}
                    search={true}
                    resizable={true}
                    pagination={{
                        enabled: true,
                        limit: 10
                    }}
                    className={{
                        table: 'w-full'
                    }} />
            </div>
        </Page>
    )
}