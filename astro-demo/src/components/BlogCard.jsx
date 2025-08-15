const BlogCard = ({post}) => {
    return(
        <div className='bg-white text-gray-800 font-sans'>
            <h2 className="text-3xl sm:text-4xl text-left font-bold text-gray-800 mt-4 mb-10"> {post.title} </h2>
            <p class="text-gray-600">{post.description}</p>

            {/* <div className='text-gray-600 line-clamp-3'> {post.body && documentToReactComponents(post.body)}</div> */}
            {<a href={`/blog/${post.slug}`} className='text-indigo-600 font-medium hover:underline transition-colors inline-block my-5'>Read More about this Post</a>}
        </div>
    );
}

export default BlogCard;
