import "./PostList.css";
import { PropTypes } from 'prop-types';
import ButtonSave from "../ui-elems/ButtonSave";
import PostCard from "../PostCard/PostCard";

function PostList({ posts, loading }) {

  const showPosts = (posts) => posts.map(post => {
    return (
      <PostCard
        key={post.id}
        author_name={"Nickker"}
        avatar_url={'#'}
        post_content={post.content}
      />
    );
  });

  const PostListElement = ({ posts }) => {
    
    return (
      <>
        {showPosts(posts)}
      </>
    )
  };
  
  return (
    <div className="post-list">
      <nav
        className="upper-button-container"
      >      
        <ButtonSave />
      </nav>
      {
        (posts === null)
          ?
          <p className="post-list" style={{ color: 'gray', }}>
            Постов нет
          </p>
          :
          loading ? <p>Загружаем данные...</p> : <PostListElement posts={posts} />
      }
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
}

export default PostList;