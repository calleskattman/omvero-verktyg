// app/[slug]/page.tsx
import { notFound } from "next/navigation";
import { ToolLayout } from "@/components/ToolLayout";
import { tools } from "@/config/tools";

// Generera statiska sidor vid build
export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = tool.component;

  return (
    <ToolLayout title={tool.name} description={tool.shortDescription}>
      <ToolComponent />
    </ToolLayout>
  );
}
