import ProjectDetail from "@/components/project/project-detail";
import React from "react";

// Example with a manual delay in a data fetch
async function fetchDataWithDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Loaded after delay" });
    }, 2000); // 2-second delay
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await fetchDataWithDelay();
  return (
    <div>
      <ProjectDetail slug={slug} />
    </div>
  );
}
