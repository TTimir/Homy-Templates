import { useState } from "react"
import inner_blog_data from "../data/inner-data/BlogData";

const useBlogs = () => {
   const [blogs, setBlogs] = useState(inner_blog_data)

   return {
      blogs,
      setBlogs,
   }
}

export default useBlogs;