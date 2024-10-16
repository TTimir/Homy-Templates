import BlogSidebar from '../common-blog/BlogSidebar'
import { useState } from "react";
import ReactPaginate from 'react-paginate';
import inner_blog_data from '../../../data/inner-data/BlogData';
import { Link } from 'react-router-dom';

const BlogTwoArea = () => {

   const blog = inner_blog_data.filter(items => items.page === "blog_2");

   const itemsPerPage = 5;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % blog.length;
      setItemOffset(newOffset);
   };

   return (
      <div className="blog-section-three mt-130 xl-mt-100 mb-150 xl-mb-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-8">
                  {currentItems.map((item) => (
                     <article key={item.id} className="blog-meta-three mb-70 lg-mb-40">
                        {item.class_name && <figure className={`post-img position-relative m0 ${item.class_name}`}>
                           <Link to={`/blog_details/${item.id}`} className="stretched-link fw-500 date tran3s">{item.date}</Link>
                        </figure>}
                        <div className={`post-data ${item.img_transparent}`}>
                           <div className="post-info"><Link to={`/blog_details/${item.id}`}>{item.info_name}</Link> {item.info_time} min</div>
                           <Link to={`/blog_details/${item.id}`} className="blog-title d-block"><h4>{item.title}</h4></Link>
                           <p>{item.desc}</p>
                           <Link to={`/blog_details/${item.id}`} className="btn-eight"><span>Read More</span> <i className="bi bi-arrow-up-right"></i></Link>
                        </div>
                     </article>
                  ))}

                  <ReactPaginate
                     breakLabel="..."
                     nextLabel={<img src="/assets/images/icon/icon_46.svg" alt="" className="ms-2" />}
                     onPageChange={handlePageClick}
                     pageRangeDisplayed={3}
                     pageCount={pageCount}
                     previousLabel={<img src="/assets/images/icon/icon_46.svg" alt="" className="ms-2" />}
                     renderOnZeroPageCount={null}
                     className="pagination-one square d-flex align-items-center style-none pt-30"
                  />
               </div>
               <BlogSidebar style={true} />
            </div>
         </div>
      </div>
   )
}

export default BlogTwoArea
