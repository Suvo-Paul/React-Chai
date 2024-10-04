import React from 'react'
import appwriteService from '../appwrite/conf'
import { Link } from "react-router-dom"

function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {featuredImage ? (
                        <img
                            className='rounded-xl'
                            src={appwriteService.getFilePreview(featuredImage)}
                            alt={title}
                        />
                    ) : (
                        <div className="bg-gray-200 rounded-xl h-40 flex items-center justify-center">
                            <span>No Image Available</span>
                        </div>
                    )}
                </div>
                <h2 className='text-xl font-bold'>
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard;
