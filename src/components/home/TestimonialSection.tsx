import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  profileImage: string;
};

type TestimonialSectionProps = {
  reviews: Review[];
};

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ reviews }) => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <SectionTitle
          title="Customer Reviews"
          subtitle="What our customers say about us"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.profileImage}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="subtitle-primary text-main">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex text-secondary mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="subtitle-secondary">{review.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
