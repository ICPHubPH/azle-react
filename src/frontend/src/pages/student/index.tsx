import React from 'react';
import Header from '@/components/student/Header';
import UpperContent from '@/components/student/UpperContent';
import PostSummary from '@/components/post-summary/PostSummary';
import { dummyPosts } from '../landing/dummy-data';
import TopProviders from '@/components/homepage/top-providers/top-providers';

const StudentPage: React.FC = () => {
  return (
    <div className="">
      <Header />

      <div className="container mx-auto px-4">
        <UpperContent />
      </div>

      {/* Center the posts */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {dummyPosts.map((post) => (
            <PostSummary
              key={post.email} // Add a unique key for each mapped item
              postAuthorEmail={post.email}
              postAuthorAvatarSource={post.avatarSource}
              postTitle={post.postTitle}
              postThumbnailSource={post.postThumbnailSource}
              postDescription={post.postDescription}
              postRatingCount={post.postRatingCount}
              postBookmarkCount={post.postBookmarkCount}
              postCommentCount={post.postCommentCount}
            />
          ))}
        </div>
      </div>

      {/* Center the top providers */}
      <div className="container mx-auto px-4">
        <TopProviders />
      </div>
    </div>
  );
};

export default StudentPage;
