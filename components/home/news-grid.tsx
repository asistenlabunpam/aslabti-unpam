import { SearchAlert } from "lucide-react";
import { Container } from "../container";
import { BlurFade } from "../ui/blur-fade";
import { Card } from "../ui/post-card";
import { wordPressService } from "@/services";
import { Post } from "@/types";

async function getRecentPosts(): Promise<Post[]> {
  return await wordPressService.getPosts<Post>();
}

export async function NewsGrid() {
  const recentPosts = await getRecentPosts();

  return (
    <Container as="section" className="px-4 mb-10 pb-16 sm:px-6 py-8 lg:px-8">
      {recentPosts.length === 0 ? (
        <BlurFade
          delay={0.45}
          direction="up"
          inView
          className="text-center py-8 w-full space-y-6"
        >
          <SearchAlert className="size-20 text-base-foreground-300 mx-auto" />
          <p className="text-base-foreground-400 font-medium">
            Belum ada berita acara
          </p>
        </BlurFade>
      ) : (
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 my-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.slice(0, 3).map((post, index) => (
            <BlurFade
              key={post.id}
              delay={0.45 + index * 0.15}
              direction="up"
              inView
            >
              <Card
                key={post.id}
                featuredImage={post._embedded?.["wp:featuredmedia"]?.[0]}
                title={post.title.rendered}
                url={post.slug}
                date={post.date}
              />
            </BlurFade>
          ))}
        </div>
      )}
    </Container>
  );
}
