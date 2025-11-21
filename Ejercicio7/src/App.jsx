import PostList from "../components/PostList.jsx";
import { PostDetails } from "../components/PostDetails.jsx";
import UserSearch from "../components/UserSearch.jsx";
import PostComments from "../components/PostComments.jsx";
import NewPostForm from "../components/NewPostForm.jsx";

export default function App() {
  return (
    <div>
      <h1>Ejercicios useEffect</h1>

      <PostList />
      <PostDetails />
      <UserSearch />
      <PostComments postId={1} />
      <NewPostForm />
    </div>
  );
}



