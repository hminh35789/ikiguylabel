import React from "react"
import AdminNav from "../components/admin/AdminNav"

export const metaData = {
    title: 'Ikihuy Admin',
    description: 'Ikiguy Admin Dashboard'
}

const AdminLayout = ({children} : {children: React.ReactNode}) => {
    return (
    <div >
        <AdminNav />
        {children}
    </div>
    )
}

export default AdminLayout