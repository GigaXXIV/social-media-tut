import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import React from 'react'

export default function savedPostsPage() {
  return (
    <Layout hideNavigation={undefined}>

        <div>
            <h1 className="text-6xl mb-6 text-gray-300">Saved Posts</h1>
        </div>
        <PostCard />
        <PostCard />
        
    </Layout>
  )
}
