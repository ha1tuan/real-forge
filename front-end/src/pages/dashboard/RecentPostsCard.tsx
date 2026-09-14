import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import type { RecentPost } from "../../types";

interface RecentPostsCardProps {
  posts: RecentPost[];
}

export default function RecentPostsCard({ posts }: RecentPostsCardProps) {
  return (
    <Card header={<CardTitle>Bài đăng gần đây</CardTitle>}>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.title} className="flex items-center gap-3">
            <span className="flex-1 text-body-sm leading-[1.35] font-body text-text-secondary">{post.title}</span>
            <span className="rf-num text-body-sm leading-[normal] text-text-primary">{post.views}</span>
            <span className="rf-num text-body-sm leading-[normal] text-status-success">♥ {post.likes}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
