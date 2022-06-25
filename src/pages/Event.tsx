import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

type ParamsProp = {
  slug: string;
};

export const Event = () => {
  const { slug } = useParams<ParamsProp>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 mt-[75px]">
        {slug ? (
          <Video lessonsSlug={slug} />
        ) : (
          <div className="flex-1 min-h-full bg-cover bg-event bg-center" />
        )}
        <Sidebar />
      </main>
    </div>
  );
};
