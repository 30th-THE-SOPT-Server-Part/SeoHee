import { BlogCreateDto } from "../interfaces/blog/BlogCreateDto";
import { BlogResponseDto } from "../interfaces/blog/BlogResponseDto";
import { BlogUpdateDto } from "../interfaces/blog/BlogUpdateDto";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import Blog from "../models/Blog";

const createBlog = async (blogCreateDto: BlogCreateDto): Promise<PostBaseResponseDto> => {
    try{
        const blog = new Blog({
            title: blogCreateDto.title,
            author: blogCreateDto.author,
            content: blogCreateDto.content,
            tags: blogCreateDto.tags,
            reviewers: blogCreateDto.reviewers,
        }); 

        await blog.save(); //저장

        const data ={
            _id: blog.id
        };

        return data;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

const updateBlog = async(postId: string, blogUpdateDto: BlogUpdateDto) => {
    try{
        await Blog.findByIdAndUpdate(postId, blogUpdateDto);
    } catch (error){
        console.log(error);
        throw error;
    }
}

const findBlogById = async(postId: string): Promise<BlogResponseDto | null> => {
    try{
        const blog = await Blog.findById(postId);

        if(!blog){
            return null;
        }

        return blog;
    }catch (error){
        console.log(error);
        throw error;
    }
}

const deleteBlog = async(postId: string): Promise<void> => {
    try {
        await Blog.findByIdAndDelete(postId);
    } catch (error){
    console.log(error);
    throw error;
    }
}

export default {
    createBlog,
    updateBlog,
    findBlogById,
    deleteBlog
}