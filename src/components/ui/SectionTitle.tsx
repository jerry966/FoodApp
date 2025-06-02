import React from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  const alignment = centered ? "text-center" : "text-left";

  return (
    <div className={`mb-10 ${alignment}`}>
      <h2 className="section-title text-2xl md:text-3xl mb-2">{title}</h2>
      {subtitle && <p className="title-base-secondary">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
