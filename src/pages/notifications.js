import Avatar from '@/components/Avatar'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import NotificationCard from '@/components/NotificationCard'
import React from 'react'

export default function NotificationsPage() {
  return (
    <Layout hideNavigation={undefined}>

        <div>
        <h1 className="text-6xl mb-6 text-gray-300">Notifications</h1>
        </div>
        <Card noPadding={true} roundedCorners={false} shadow={true}>
            <div className=''>

                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                
            </div>
        </Card>
        
    </Layout>
  )
}
