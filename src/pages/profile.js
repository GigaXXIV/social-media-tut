import Avatar from '@/components/Avatar'
import Card from '@/components/Card'
import FriendInfo from '@/components/FriendInfo'
import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProfilePage() {

    const router = useRouter();
    const {asPath:pathname} = router
    const isPosts = pathname.includes('posts') || pathname === "/profile";
    const isAbout = pathname.includes('about');
    const isFriends = pathname.includes('friends');
    const isPhotos = pathname.includes('photos');
 
    
    const activeTabClasses = 'flex item-center px-2 py-2 gap-2 border-b-4 border-b-socialBlue text-socialBlue bg-socialBlue bg-opacity-10 rounded-t-md'

    const nonActiveTabClasses = 'flex item-center px-2 py-2 gap-2'

  return (
    <Layout hideNavigation={undefined}>

        <Card noPadding={true} roundedCorners={false} shadow={true}>
            <div className='relative'>

            <div className="h-48 flex justify-center items-center rounded-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"/>       
            </div>
            <div className='absolute left-4 top-32'>
            <Avatar size={"big"}/>
            </div>
            <div className='p-4 pb-0'>
                <div className='ml-40'>
                <h1 className='text-3xl font-bold mt-1'>
                    Giga XXIV
                </h1>
                <div className='text-gray-400 leading-8'>
                    Stockholm, Sweden
                </div>
                </div>
                <div className='mt-6 flex gap-2 justify-between mx-6'>
                    <Link href="/profile/posts" className={isPosts ? activeTabClasses : nonActiveTabClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

                        <span className='hidden md:block'> Posts</span>
                    
                    </Link>
                    <Link href="/profile/about" className={isAbout ? activeTabClasses : nonActiveTabClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

<span className='hidden md:block'> About</span>
                    
                    </Link>
                    <Link href="/profile/friends" className={isFriends ? activeTabClasses : nonActiveTabClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

<span className='hidden md:block'> Friends</span>
                    
                    </Link>
                    <Link href="/profile/photos" className={isPhotos ? activeTabClasses : nonActiveTabClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

<span className='hidden md:block'> Photos</span>
                    
                    </Link>
                </div>
            </div>



            </div>

        </Card>
        { isPosts && (
            <div>

                <PostCard />
            </div>
        )}
        {isAbout && (
            <div>
                <Card noPadding={false} roundedCorners={false} shadow={true}>
                    <h2 className='text-3xl mb-2'>About Me</h2>
                    <p className='mb-2'>This is my about me page.</p>
                    <p className='mb-2'>Not sure why Lorem Ipsum isn't working. </p>
                </Card>
            </div>
        )}
        {isFriends && (
              <div>
              <Card noPadding={undefined} roundedCorners={false} shadow={true}>
                <h2 className="text-3xl mb-2">Friends</h2>
                <div className="flex flex-col" >
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                    <div className='border-b p-4 -mx-4'>
                            <FriendInfo />

                    </div>
                   
            
            </div>
      </Card>
    </div>
        )}
        {isPhotos && (
            <div>
                <Card noPadding={undefined} roundedCorners={false} shadow={true}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-24 md:mb-0'>

                    <div className='overflow-hidden rounded-md h-80 flex items-center shadow-md'>
                        <img src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8U3BhaW58ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
                    </div>
                    <div className='overflow-hidden rounded-md h-80 flex items-center shadow-md'>
                        <img src="https://images.unsplash.com/photo-1561369408-1e91d37fd2c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80" alt="" />
                    </div>
                    <div className='overflow-hidden rounded-md h-80 flex items-center shadow-md'>
                        <img src="https://images.unsplash.com/photo-1567627007677-b6502f1fcfd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFNwYWlufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="" />
                    </div>
                    <div className='overflow-hidden rounded-md h-80 flex items-center shadow-md'>
                        <img src="https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1552&q=80" alt="" />
                    </div>

                    </div>
                </Card>
            </div>
        )}
        

    </Layout>
  )
}
