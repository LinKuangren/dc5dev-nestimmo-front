'use client'

import { fetchAllPosts } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import DrawerPost from "@/components/post/DrawerPost";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const PostList = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['getAllPosts'],
        queryFn: fetchAllPosts
    })

    if(isPending) return <div className="h-full flex justify-center items-center">Loading...</div>

    console.log(data);

    return (
        <div>
            <h2 className="text-4xl font-bold my-5 text-cyan-700">Post List</h2>
            <DrawerPost />
            <div className="grid grid-cols-4 gap-2">
                {data?.map((post: any) => (
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                            <div className="flex flex-col space-y-1.5 mb-4">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight">{post.title}</h3>
                                <p className="text-sm text-muted-foreground">{post.description}</p>
                            </div>
                            <div className="flex items-center">
                                <p>{post.category?.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PostList;